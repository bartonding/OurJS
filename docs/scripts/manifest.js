var manifest = {
  'Global': [
    '<#>自定义扩展',
    'Global.typeOf',
    'Global.execScript',
    'Global.getNamespace',
    '<#>模块化',
    'Global.declareModule',
    'Global.runApplication',
    '<#>执行代码块',
    'Global.execute'
  ],
  'Object': [
    '<#>ES5',
    'Object.keys',
    '<#>自定义扩展',
    'Object.forEach',
    'Object.clone',
    'Object.append'
  ],
  'Array': [
    '<#>ES5',
    'Array.isArray',
    'Array.prototype.forEach',
    'Array.prototype.map',
    'Array.prototype.filter',
    'Array.prototype.every',
    'Array.prototype.some',
    'Array.prototype.indexOf',
    'Array.prototype.lastIndexOf',
//    'Array.prototype.reduce',
//    'Array.prototype.reduceRight',
    '<#>自定义扩展',
    'Array.from',
    'Array.prototype.contains'
  ],
  'String': [
    '<#>ES5',
    'String.prototype.trim',
    'String.prototype.toJSON',
    '<#>ES6',
    'String.prototype.repeat',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
    'String.prototype.contains',
    'String.prototype.toArray',
    '<#>自定义扩展',
    'String.prototype.clean'
  ],
  'Boolean': [
    '<#>ES5',
    'Boolean.prototype.toJSON'
  ],
  'Number': [
    '<#>ES5',
    'Number.prototype.toJSON',
    '<#>ES6',
    'Number.isFinite',
    'Number.isNaN',
    'Number.isInteger',
    'Number.toInteger',
    '<#>自定义扩展',
    'Number.prototype.format'
  ],
  'Math': [
    '<#>自定义扩展',
    'Math.limit',
    'Math.randomRange'
  ],
  'Date': [
    '<#>ES5',
    'Date.now',
    'Date.prototype.toJSON'
  ],
  'RegExp': [
    '<#>自定义扩展',
    'RegExp.escape'
  ],
  'JSON': [
    '<#>ES5',
    'JSON.parse',
    'JSON.stringify'
  ],
  'navigator': [
    '<#>从 UA 中得到的结果(仅供参考)',
    'navigator.userAgentInfo',
    'navigator.userAgentInfo.engine',
    'navigator.userAgentInfo.name',
    'navigator.userAgentInfo.version',
    '<#>特性判断得到的结果(准确)',
    'navigator.inStandardsMode',
    'navigator.isIE',
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
    '<#>',
    'location.parameters'
  ],
  'cookie': [
    'cookie.set',
    'cookie.get',
    'cookie.remove'
  ],
  'localStorage': [
    '<#>HTML5',
    'localStorage.setItem',
    'localStorage.getItem',
    'localStorage.removeItem',
    'localStorage.clear'
  ],
  'window': [
    '<#>获取视口信息',
    'window.getClientSize',
    'window.getScrollSize',
    'window.getPageOffset',
    '<#>处理事件',
    'window.on',
    'window.off',
    'window.fire'
  ],
  'document': [
    '<#>HTML5',
    'document.head',
    '<#>获取元素',
    'document.$',
    '<#>常用方法',
    'document.preloadImages',
    '<#>处理事件',
    'document.on',
    'document.off',
    'document.fire'
  ],
  'HTMLElement': [
    '<#>HTML5',
    'HTMLElement.prototype.innerText',
    'HTMLElement.prototype.outerText',
    'HTMLElement.prototype.outerHTML'
  ],
  'Element': [
    '<#>扩展属性/方法',
    'Element.prototype',
    '<#>查找元素',
    'Element.prototype.find',
    '<#>处理类',
    'Element.prototype.hasClass',
    'Element.prototype.addClass',
    'Element.prototype.removeClass',
    'Element.prototype.toggleClass',
    '<#>处理样式',
    'Element.prototype.getStyle',
    'Element.prototype.getStyles',
    'Element.prototype.setStyle',
    'Element.prototype.setStyles',
    '<#>获取位置及尺寸',
    'Element.prototype.getClientRect',
    '<#>处理自定义数据',
    'Element.prototype.getData',
    'Element.prototype.setData',
    'Element.prototype.removeData',
    '<#>比较位置关系',
//    'Element.prototype.comparePosition',
    'Element.prototype.contains',
    '<#>获取相关元素',
    'Element.prototype.getParent',
    'Element.prototype.getPrevious',
    'Element.prototype.getNext',
    'Element.prototype.getFirstChild',
    'Element.prototype.getLastChild',
    'Element.prototype.getChildren',
    'Element.prototype.getChildCount',
    '<#>修改文档树',
    'Element.prototype.append',
    'Element.prototype.prepend',
    'Element.prototype.putBefore',
    'Element.prototype.putAfter',
    'Element.prototype.remove',
    'Element.prototype.replace',
    'Element.prototype.empty',
//    'Element.prototype.clone',
    '<#>处理事件',
    'Element.prototype.on',
    'Element.prototype.off',
    'Element.prototype.fire',
    '<#>动画效果',
    'Element.prototype.animate',
    'Element.prototype.stopAnimate',
    'Element.prototype.getAnimationQueue',
    'Element.prototype.fadeIn',
    'Element.prototype.fadeOut'
  ],
  'Event': [
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
    '<#>DOM3',
    'Event.prototype.isPropagationStopped',
    'Event.prototype.isDefaultPrevented',
    'Event.prototype.isImmediatePropagationStopped',
    'Event.prototype.stopPropagation',
    'Event.prototype.preventDefault',
    'Event.prototype.stopImmediatePropagation'
  ],
  'Component': [
    'Component',
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
    'Animation.options',
    'Animation.prototype.play',
    'Animation.prototype.stop'
  ],
  'components.Switcher': [
    'components.Switcher',
    'components.Switcher.prototype.active',
    'components.Switcher.prototype.getActiveItem',
    'components.Switcher.prototype.getActiveIndex'
  ],
  'components.TabPanel': [
    'components.TabPanel',
    'components.TabPanel.options',
    'components.TabPanel.prototype.active'
  ],
  'components.Dialog': [
    'components.Dialog',
    'components.Dialog.options',
    'components.Dialog.prototype.open',
    'components.Dialog.prototype.close',
    'components.Dialog.prototype.adjust'
  ],
  'components.Calendar': [
    'components.Calendar',
    'components.Calendar.options',
    'components.Calendar.prototype.getElement',
    'components.Calendar.prototype.render'
  ]
};
