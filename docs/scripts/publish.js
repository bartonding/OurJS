/**
 * @fileOverview OurJA API data generator.
 * @author sundongguo@gmail.com
 * @version 20120320
 */

/** Make JSON.stringify available. */
var JSON = {};

(function() {
//--------------------------------------------------[JSON.stringify]
  var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
      },
      rep;

  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
      var c = meta[a];
      return typeof c === 'string'
          ? c
          : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }

  function str(key, holder) {
    var i,
        k,
        v,
        length,
        mind = gap,
        partial,
        value = holder[key];
    if (value && typeof value === 'object' &&
        typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }
    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }
    switch (typeof value) {
      case 'string':
        return quote(value);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'boolean':
      case 'null':
        return String(value);
      case 'object':
        if (!value) {
          return 'null';
        }
        gap += indent;
        partial = [];
        if (Object.prototype.toString.apply(value) === '[object Array]') {
          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }
          v = partial.length === 0
              ? '[]'
              : gap
              ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
              : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }
        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === 'string') {
              k = rep[i];
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }
        v = partial.length === 0
            ? '{}'
            : gap
            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
            : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function(value, replacer, space) {
      var i;
      gap = '';
      indent = '';
      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }
      } else if (typeof space === 'string') {
        indent = space;
      }
      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
          (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }
      return str('', {'': value});
    };
  }

})();

/** Parse string for Descriptions and Examples. */
String.prototype.startsWith = function(subString) {
  return this.indexOf(subString) === 0;
};
String.prototype.endsWith = function(subString) {
  var lastIndex = this.lastIndexOf(subString);
  return lastIndex >= 0 && lastIndex === this.length - subString.length;
};
function parseDescription(string) {
  return string.split(/[\r\n]+/)
      .map(function(line, index, lines) {
        var newLine = line.trim();
        if (index !== lines.length - 1 && !newLine.endsWith('>')) {
          newLine += '<br>';
        }
        return newLine;
      })
      .join('');
}
function parseExample(string) {
  return string.split(/[\r\n]+/)
      .map(function(line) {
        return line.startsWith('  ') ? line.slice(2) : line;
      })
      .join('\r');
}

/** Get a symbol's raw data. */
function filterSymbol(source) {
  var name = source.alias.replace('#', (source.isNamespace ? '.' : '.prototype.'));
  symbols[name] = {
//    author: source.author,
    name: name,
    type: source.type,
    isStatic: name.indexOf('.prototype.') === -1,
    isFunction: (source.isa === 'CONSTRUCTOR' || source.isa === 'FUNCTION'),
    isConstructor: source.isa === 'CONSTRUCTOR',
    parameters: source.params.map(function(item) {
      var newItem = {};
      newItem.type = item.type;
      newItem.name = item.name;
      newItem.description = parseDescription(item.desc);
      newItem.isOptional = item.isOptional;
      return newItem;
    }),
    returns: source.returns.map(function(item) {
      var newItem = {};
      newItem.type = item.type;
      newItem.description = parseDescription(item.desc);
      return newItem;
    }),
    fires: source.fires.map(function(item) {
      // 使用 jsdoc-toolkit 获取的文档数据中，fires 仅为字符串，因此在写注释文档时约定：第一行为事件名，其后为描述。
      var match = parseDescription(item).match(/(\w*)(?:<br>)(.*)/);
      var mame = match && match[1] || '';
      var description = match && match[2] || '';
      return {
        name: mame,
        description: description
      };
    }),
    description: parseDescription(source.desc),
    examples: source.example.map(function(item) {
      return parseExample(item.desc);
    }),
    requires: source.requires,
    since: source.since,
    deprecated: source.deprecated,
    see: source.see
  };

  if (source.properties.length) {
    source.properties.forEach(function(property) {
      filterSymbol(property);
    });
  }

  if (source.methods.length) {
    source.methods.forEach(function(method) {
      filterSymbol(method);
    });
  }

}

/** Called automatically by JsDoc Toolkit. */
var symbols = {};
function publish(symbolSet) {
  // Config.
  publish.conf = {
    outDir: JSDOC.opt.d || SYS.pwd + '../out/jsdoc/'
  };

  // Get a list of all the classes in the symbolset.
  var classes = symbolSet.toArray().filter(function($) {
    return ($.is('CONSTRUCTOR') || $.isNamespace)
  });

  // Output data.
  classes.forEach(function(symbol) {
    symbol.methods = symbol.getMethods();
    // Handle a symbol.
    if (symbol.name === '_global_') {
      return;
    }
    filterSymbol(symbol);
  });

  IO.saveFile(publish.conf.outDir + '/scripts/', 'data.js', 'var apiData = ' + JSON.stringify(symbols) + ';');

}
