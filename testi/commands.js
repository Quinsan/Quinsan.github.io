!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=308)}({308:function(e,t,n){(function(e){var t,n,o;function i(e){Office.context.mailbox.item.notificationMessages.replaceAsync("github-error",{type:"errorMessage",message:e},(function(e){}))}function r(e){t=JSON.parse(e.message),setConfig(t,(function(e){o.close(),o=null,n.completed(),n=null}))}function c(e){o=null,n.completed(),n=null}Office.initialize=function(e){},("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0).insertDefaultGist=function(e){if((t=getConfig())&&t.defaultGistId)try{getGist(t.defaultGistId,(function(t,n){t?buildBodyContent(t,(function(t,n){t?Office.context.mailbox.item.body.setSelectedDataAsync(t,{coercionType:Office.CoercionType.Html},(function(t){e.completed()})):(i(n),e.completed())})):(i(n),e.completed())}))}catch(t){i(t),e.completed()}else{n=e;var f=new URI("dialog.html?warn=1").absoluteTo(window.location).toString();Office.context.ui.displayDialogAsync(f,{width:20,height:40,displayInIframe:!0},(function(e){(o=e.value).addEventHandler(Office.EventType.DialogMessageReceived,r),o.addEventHandler(Office.EventType.DialogEventReceived,c)}))}}}).call(this,n(309))},309:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
//# sourceMappingURL=commands.js.map