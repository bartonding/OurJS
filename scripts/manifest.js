var manifest = {
  'Global': [
    '#自定义扩展',
    'Global.typeOf',
    'Global.execScript',
    'Global.getNamespace',
    '#模块化',
    'Global.declareModule',
    'Global.runApplication',
    '#执行代码块',
    'Global.execute'
  ],
  'Object': [
    '#ES5',
    'Object.keys',
    '#自定义扩展',
    'Object.forEach',
    'Object.clone',
    'Object.append'
  ],
  'Array': [
    '#ES5',
    'Array.isArray',
    'Array.prototype.indexOf',
    'Array.prototype.lastIndexOf',
    'Array.prototype.every',
    'Array.prototype.some',
    'Array.prototype.forEach',
    'Array.prototype.map',
    'Array.prototype.filter',
//    'Array.prototype.reduce',
//    'Array.prototype.reduceRight',
    '#自定义扩展',
    'Array.from',
    'Array.prototype.contains',
    'Array.prototype.getFirst',
    'Array.prototype.getLast'
  ],
  'String': [
    '#ES5',
    'String.prototype.trim',
    'String.prototype.toJSON',
    '#ES6',
    'String.prototype.repeat',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
    'String.prototype.contains',
    'String.prototype.toArray',
    '#自定义扩展',
    'String.prototype.clean'
  ],
  'Boolean': [
    '#ES5',
    'Boolean.prototype.toJSON'
  ],
  'Number': [
    '#ES5',
    'Number.prototype.toJSON',
    '#ES6',
    'Number.isFinite',
    'Number.isNaN',
    'Number.isInteger',
    'Number.toInteger',
    '#自定义扩展',
    'Number.prototype.padZero'
  ],
  'Math': [
    '#自定义扩展',
    'Math.limit',
    'Math.randomRange'
  ],
  'Date': [
    '#ES5',
    'Date.now',
    'Date.prototype.toJSON',
    '#自定义扩展',
    'Date.from',
    'Date.prototype.format'
  ],
  'RegExp': [
    '#自定义扩展',
    'RegExp.escape'
  ],
  'JSON': [
    '#ES5',
    'JSON.parse',
    'JSON.stringify'
  ],
  'navigator': [
    '#从 UA 中得到的结果(仅供参考)',
    'navigator.userAgentInfo.engine',
    'navigator.userAgentInfo.name',
    'navigator.userAgentInfo.version',
    '#特性判断得到的结果(准确)',
    'navigator.inStandardsMode',
    'navigator.isIE10',
    'navigator.isIElt10',
    'navigator.isIE9',
    'navigator.isIElt9',
    'navigator.isIE8',
    'navigator.isIElt8',
    'navigator.isIE7',
    'navigator.isIE6',
    'navigator.isFirefox',
    'navigator.isChrome',
    'navigator.isSafari',
    'navigator.isOpera'
  ],
  'location': [
    '#自定义扩展',
    'location.parameters'
  ],
  'cookie': [
    '#自定义扩展',
    'cookie.getItem',
    'cookie.setItem',
    'cookie.removeItem'
  ],
  'localStorage': [
    '#HTML5',
    'localStorage.getItem',
    'localStorage.setItem',
    'localStorage.removeItem',
    'localStorage.clear'
  ],
  'window': [
    '#获取视口信息',
    'window.getClientSize',
    'window.getScrollSize',
    'window.getPageOffset',
    '#处理事件',
    'window.on',
    'window.off',
    'window.fire'
  ],
  'document': [
    '#HTML5',
    'document.head',
    '#获取和创建元素',
    'document.$',
    '#处理事件',
    'document.on',
    'document.off',
    'document.fire',
    '#自定义扩展',
    'document.preloadImages'
  ],
  'Element': [
    '#处理内容',
    'Element.prototype.innerText',
    'Element.prototype.outerText',
    'Element.prototype.outerHTML',
    '#查找元素',
    'Element.prototype.find',
    '#处理类',
    'Element.prototype.hasClass',
    'Element.prototype.addClass',
    'Element.prototype.removeClass',
    'Element.prototype.toggleClass',
    '#处理样式',
    'Element.prototype.getStyle',
    'Element.prototype.getStyles',
    'Element.prototype.setStyle',
    'Element.prototype.setStyles',
    '#获取位置及尺寸',
    'Element.prototype.getClientRect',
    '#处理自定义数据',
    'Element.prototype.getData',
    'Element.prototype.setData',
    'Element.prototype.removeData',
    '#比较位置关系',
    'Element.prototype.comparePosition',
    'Element.prototype.contains',
    '#遍历文档树',
    'Element.prototype.getParent',
    'Element.prototype.getPreviousSibling',
    'Element.prototype.getNextSibling',
    'Element.prototype.getFirstChild',
    'Element.prototype.getLastChild',
    'Element.prototype.getChildren',
    'Element.prototype.getChildCount',
    '#修改文档树',
    'Element.prototype.append',
    'Element.prototype.prepend',
    'Element.prototype.putBefore',
    'Element.prototype.putAfter',
    'Element.prototype.replace',
    'Element.prototype.remove',
    'Element.prototype.empty',
//    'Element.prototype.clone',
    '#处理事件',
    'Element.prototype.on',
    'Element.prototype.off',
    'Element.prototype.fire',
    '#动画效果',
    'Element.prototype.morph',
    'Element.prototype.highlight',
    'Element.prototype.fadeIn',
    'Element.prototype.fadeOut'
  ],
  'HTMLFormElement': [
    '#自定义扩展',
    'HTMLFormElement.prototype.getFieldValue'
  ],
  'Event': [
    '#自定义扩展',
    'Event.prototype.originalEvent',
    'Event.prototype.type',
    'Event.prototype.isMouseEvent',
    'Event.prototype.isKeyboardEvent',
    'Event.prototype.bubbles',
    'Event.prototype.target',
    'Event.prototype.relatedTarget',
    'Event.prototype.timeStamp',
    'Event.prototype.ctrlKey',
    'Event.prototype.altKey',
    'Event.prototype.shiftKey',
    'Event.prototype.metaKey',
    'Event.prototype.clientX',
    'Event.prototype.clientY',
    'Event.prototype.screenX',
    'Event.prototype.screenY',
    'Event.prototype.pageX',
    'Event.prototype.pageY',
    'Event.prototype.offsetX',
    'Event.prototype.offsetY',
    'Event.prototype.leftButton',
    'Event.prototype.middleButton',
    'Event.prototype.rightButton',
    'Event.prototype.wheelUp',
    'Event.prototype.wheelDown',
    'Event.prototype.which',
    '#DOM3',
    'Event.prototype.isPropagationStopped',
    'Event.prototype.isDefaultPrevented',
    'Event.prototype.isImmediatePropagationStopped',
    'Event.prototype.stopPropagation',
    'Event.prototype.preventDefault',
    'Event.prototype.stopImmediatePropagation'
  ],
  'Component': [
    '#创建组件',
    'Component',
    '#处理选项',
    'Component.prototype.setOptions',
    '#处理事件',
    'Component.prototype.on',
    'Component.prototype.off',
    'Component.prototype.fire'
  ],
  'Request': [
    'Request',
    'Request.options',
    'Request.prototype.send',
    'Request.prototype.abort'
  ],
  'Animation': [
    'Animation',
    'Animation.prototype.addClip',
    'Animation.prototype.play',
    'Animation.prototype.reverse',
    'Animation.prototype.pause',
    'Animation.prototype.stop',
    'Animation.createBasicRenderer',
    'Animation.createStyleRenderer'
  ],
  'Switcher': [
    'Switcher',
    'Switcher.prototype.active'
  ],
  'TabPanel': [
    'TabPanel',
    'TabPanel.options',
    'TabPanel.prototype.active'
  ],
  'Slideshow': [
    'Slideshow',
    'Slideshow.options',
    'Slideshow.prototype.show'
  ],
  'Dialog': [
    'Dialog',
    'Dialog.options',
    'Dialog.prototype.open',
    'Dialog.prototype.close',
    'Dialog.prototype.reposition'
  ],
  'Paginator': [
    'Paginator',
    'Paginator.options',
    'Paginator.prototype.turn',
    'Paginator.prototype.render'
  ],
  'Calendar': [
    'Calendar',
    'Calendar.options',
    'Calendar.prototype.getElement',
    'Calendar.prototype.render'
  ],
  'Validator': [
    'Validator',
    'Validator.prototype.validate'
  ]
};
