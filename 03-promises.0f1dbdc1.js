!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=r);var t=r("h6c0i"),i={form:document.querySelector(".form")};function a(e,n){var o=Math.random()>.3;return new Promise((function(r,t){return setTimeout((function(){o?r({position:e,delay:n}):t({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var n={};new FormData(i.form).forEach((function(e,o){return n[o]=e}));for(var o=Number(n.delay),r=1;r<=Number(n.amount);r+=1)a(r,o).then((function(e){var n=e.position,o=e.delay;t.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;t.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),o+=Number(n.step)}))}();
//# sourceMappingURL=03-promises.0f1dbdc1.js.map
