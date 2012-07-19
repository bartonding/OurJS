/**
 * @fileOverview 组件。
 * @author sundongguo@gmail.com
 * @version 20120610
 */
(function() {
//==================================================[组件]
  /*
   * 组件的构造器。
   * 为各组件的实例提供 options/events 属性，以及 setOptions/on/off/fire 原型方法。
   * <Object events> {
   *   <string type>: <Array handlers> [
   *     <Object handler>: {
   *       name: <string name>
   *       listener: <Function listener>
   *     }
   *   ]
   * };
   *
   * 构造函数：
   *   Component
   */

  var RE_EVENT_NAME = /^(\w+)(\.\w+)?$/;
  var RE_EVENT_NAME_SEPARATOR = /\s*,\s*/;

  /**
   * 组件事件对象。
   * @name ComponentEvent
   * @constructor
   * @private
   * @param {string} type 事件类型。
   * @param {string} target 事件来源。
   */
  function ComponentEvent(type, target) {
    this.type = type;
    this.target = target;
  }

  // 解析事件名称。
  var parseEventName = function(eventName) {
    var result = {};
    var match;
    if (eventName && (match = eventName.match(RE_EVENT_NAME))) {
      result.type = match[1];
      result.label = match[2] || '';
    }
    if (result.type + result.label !== eventName) {
      throw new SyntaxError('Invalid event name "' + eventName + '"');
    }
    return result;
  };

//--------------------------------------------------[Component Constructor]
  /**
   * 创建一个组件。
   * @name Component
   * @constructor
   * @param {Function} constructor 组件的构造函数。
   * @param {Object} defaultOptions 组件的默认选项。
   * @param {Object} prototype 组件的原型对象。
   * @description
   *   组件的实例将具备事件处理和选项设置的功能。
   *   组件的实例及其原型对象中都不能设置以下属性：
   *   'options'，'events'，'setOptions'，'on'，'off'，'fire'。
   *   修改一个组件的默认选项时，应修改该组件的 options 属性的属性值，不要为 options 属性重新赋值。
   */
  function Component(constructor, defaultOptions, prototype) {
    var formalParameterLength = constructor.length;
    // 真正的构造函数，为事件处理做准备并自动处理选项。
    var Component = function() {
      this.events = {};
      this.options = Object.clone(Component.options);
      var parameters = Array.from(arguments);
      if (parameters.length > formalParameterLength) {
        this.setOptions(parameters[formalParameterLength]);
        parameters.length = formalParameterLength;
      }
      constructor.apply(this, parameters);
    };
    // 默认选项。
    Component.options = defaultOptions;
    // 扩充原型链。
    Component.prototype = this;
    // 将 prototype 的属性追加到原型中。
    Object.append(Component.prototype, prototype);
    // 重新设定 constructor 属性。
    Component.prototype.constructor = Component;
    // 返回组件。
    return Component;
  }

//--------------------------------------------------[Component.prototype.setOptions]
  /**
   * 为本组件设置选项。
   * @name Component.prototype.setOptions
   * @function
   * @param {Object} options 新的选项。新的选项用于覆盖旧的选项，因此旧选项中原本不存在的属性不会被设置。
   * @returns {Object} 本组件。
   * @description
   *   共有三种方式为一个组件设置选项：
   *   <ul>
   *     <li>在在创建组件实例之前，可以修改该组件的构造器的 options 属性，来修改此类组件的默认选项。这种方式设置的选项对后续创建的组件均生效。<br>建议在项目对某一类组件有相同的要求时这么做。</li>
   *     <li>在创建组件实例时，可以通过参数 options 来指定本次创建的实例的选项。这种方式设置的选项仅对本次创建的实例生效。<br>建议在创建每个组件的实例时这么做。</li>
   *     <li>使用本方法，可以在实例创建之后修改当前的选项。这种方式设置的选项将在组件下一次访问这些设置时生效。<br>仅在需要重用某一个组件，但需要不同的选项时才这么做。</li>
   *   </ul>
   */
  Component.prototype.setOptions = function(options) {
    Object.append(this.options, options || {}, {whiteList: Object.keys(this.options)});
    return this;
  };

//--------------------------------------------------[Component.prototype.on]
  /**
   * 为本组件添加事件监听器。
   * @name Component.prototype.on
   * @function
   * @param {string} name 事件名称，格式为 <dfn><var>type</var>.<var>label</var></dfn>，详细信息请参考下表。
   *   使用逗号分割多个事件名称，即可同时为多个事件注册同一个监听器。
   *   <table>
   *     <tr><th></th><th>是否必选</th><th>详细描述</th></tr>
   *     <tr><td><dfn><var>type</var></dfn></td><td>必选</td><td>要监听的事件类型</td></tr>
   *     <tr><td><dfn>.<var>label</var></dfn></td><td>可选</td><td>给事件类型加上标签，以便调用 off 方法时精确匹配要删除的事件监听器。<br>不打算删除的事件监听器没有必要指定标签。</td></tr>
   *   </table>
   * @param {Function} listener 事件监听器。
   *   该函数被调用时 this 的值为本组件。
   * @returns {Object} 本组件。
   */
  Component.prototype.on = function(name, listener) {
    var component = this;
    if (name.contains(',')) {
      name.split(RE_EVENT_NAME_SEPARATOR).forEach(function(name) {
        Component.prototype.on.call(component, name, listener);
      });
      return component;
    }
    var events = component.events;
    var type = parseEventName(name).type;
    var handlers = events[type] || (events[type] = []);
    handlers.push({name: name, listener: listener});
    return component;
  };

//--------------------------------------------------[Component.prototype.off]
  /**
   * 删除本组件上已添加的事件监听器。
   * @name Component.prototype.off
   * @function
   * @param {string} name 事件名称。本组件上绑定的所有名称与 name 匹配的监听器都将被删除。使用逗号分割多个事件名称，即可同时删除多种名称的事件监听器。
   * @returns {Object} 本组件。
   */
  Component.prototype.off = function(name) {
    var component = this;
    if (name.contains(',')) {
      name.split(RE_EVENT_NAME_SEPARATOR).forEach(function(name) {
        Component.prototype.off.call(component, name);
      });
      return component;
    }
    var events = component.events;
    var type = parseEventName(name).type;
    var handlers = events[type];
    if (!handlers) {
      return component;
    }
    var i = 0;
    var handler;
    while (i < handlers.length) {
      handler = handlers[i];
      if (handler.name === name) {
        handlers.splice(i, 1);
      } else {
        i++;
      }
    }
    if (handlers.length === 0) {
      delete events[type];
    }
    return component;
  };

//--------------------------------------------------[Component.prototype.fire]
  /**
   * 触发本组件的某类事件，运行相关的事件监听器。
   * @name Component.prototype.fire
   * @function
   * @param {String} type 事件类型。
   * @param {Object} [data] 在事件对象上附加的数据。
   * @returns {Object} 本组件。
   */
  Component.prototype.fire = function(type, data) {
    var component = this;
    var handlers = component.events[type];
    if (handlers) {
      var event = Object.append(new ComponentEvent(type, component), data || {});
      handlers.forEach(function(handler) {
        handler.listener.call(component, event);
      });
    }
    return component;
  };

//--------------------------------------------------[Component]
  window.Component = Component;

})();

(function() {
//==================================================[Switcher]
  /*
   * 使用一个数组创建切换器，在每次切换活动元素时会触发相应的事件。
   * Switcher 是一个基础组件，因此放在本文件中。
   */

//--------------------------------------------------[Switcher Constructor]
  /**
   * 使用一个数组创建切换控制器。在这个数组中，同一时刻最多只有一个元素是“活动”的。
   * @name Switcher
   * @constructor
   * @param {Array} items 指定在本数组中的各元素间切换，本数组包含的元素必须是引用类型的值，且不能有重复。
   * @fires active
   *   {Element} event.activeItem 当前的活动元素。
   *   {number} event.activeIndex 当前的活动元素在 items 中的索引。
   *   {Element} event.inactiveItem 上一个活动元素。
   *   {number} event.inactiveIndex 上一个活动元素在 items 中的索引。
   *   成功调用 active 方法后触发。
   * @description
   *   动态修改实例对象的 items 属性的内容，可以随时增加/减少切换控制器的控制范围。
   */
  function Switcher(items) {
    this.items = items;
    this.activeItem = null;
    this.activeIndex = -1;
  }

//--------------------------------------------------[Switcher.options]
  /**
   * 默认选项。
   * @name Switcher.options
   */
  Switcher.options = {};

//--------------------------------------------------[Switcher.prototype.active]
  /**
   * 将一个元素标记为“活动”，并将当前的活动元素（如果有）标记为“非活动”。
   * @name Switcher.prototype.active
   * @function
   * @param {Object|number} value 要标记为“活动”的元素，或者这个元素在 items 中的索引值。
   *   要标记为“活动”的元素不能为当前的活动元素。
   *   如果指定的值为不在 items 中的对象，或为一个不在有效范索引围内的数字，则取消活动元素。
   * @returns {Object} Switcher 对象。
   * @description
   *   如果要标记为“活动”的元素与当前的活动元素相同，则调用此方法无效。
   */
  Switcher.prototype.active = function(value) {
    var switcher = this;
    var item = null;
    var index = -1;
    var x;
    if (typeof value === 'number') {
      x = switcher.items[value];
      if (x) {
        item = x;
        index = value;
      }
    } else {
      x = switcher.items.indexOf(value);
      if (x > -1) {
        item = value;
        index = x;
      }
    }
    var lastActiveItem = switcher.activeItem;
    var lastActiveIndex = switcher.activeIndex;
    if (index !== lastActiveIndex) {
      switcher.activeItem = item;
      switcher.activeIndex = index;
      switcher.fire('active', {
        activeItem: item,
        activeIndex: index,
        inactiveItem: lastActiveItem,
        inactiveIndex: lastActiveIndex
      });
    }
    return switcher;
  };

//--------------------------------------------------[Switcher]
  window.Switcher = new Component(Switcher, Switcher.options, Switcher.prototype);

})();
