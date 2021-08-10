System.register("chunks:///_virtual/VideoCamera.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i;return{setters:[function(e){t=e.asyncToGenerator},function(e){i=e.cclegacy}],execute:function(){i._RF.push({},"9578axkwt9GiKmMk2GWznXK","VideoCamera",void 0);e("default",function(){function e(){}var i=e.prototype;return i.Setup=function(){var e=t(regeneratorRuntime.mark((function e(){var t,i,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return t=document.getElementById("video"),i={audio:!1,video:{facingMode:"environment",width:{ideal:640},height:{ideal:480}}},e.next=6,navigator.mediaDevices.getUserMedia(i);case 6:return n=e.sent,t.srcObject=n,t.setAttribute("webkit-playsinline",""),t.setAttribute("playsinline","playsinline"),t.setAttribute("muted",""),t.style.width="640px",t.style.height="480px",e.abrupt("return",new Promise((function(e,i){t.onloadedmetadata=function(){r.Resize(t),e(t)}})));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i.Resize=function(e){var t=window.innerWidth,i=window.innerHeight,n=e.videoWidth/e.videoHeight;if(t/i<n){var r=n*i;e.style.width=r+"px",e.style.marginLeft=-(r-t)/2+"px",e.style.height=i+"px",e.style.marginTop="0px"}else{var a=1/(n/t);e.style.height=a+"px",e.style.marginTop=-(a-i)/2+"px",e.style.width=t+"px",e.style.marginLeft="0px"}},e}());i._RF.pop()}}}));

System.register("chunks:///_virtual/GameMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./VideoCamera.ts"],(function(e){"use strict";var i,t,n,a,r,c,o,l,s,h,d,u,p;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.defineProperty},function(e){c=e.cclegacy,o=e._decorator,l=e.Camera,s=e.Node,h=e.view,d=e.Vec3,u=e.Component},function(e){p=e.default}],execute:function(){var v,f,w,g,y,m,b;c._RF.push({},"d98c6lPlPhIio4tyB45R8+K","GameMgr",void 0);var I=o.ccclass,R=o.property;e("GameMgr",(v=I("GameMgr"),f=R(l),w=R(s),v((m=i((y=function(e){function i(){for(var i,t=arguments.length,c=new Array(t),o=0;o<t;o++)c[o]=arguments[o];return i=e.call.apply(e,[this].concat(c))||this,n(a(i),"camera",m,a(i)),n(a(i),"cube",b,a(i)),r(a(i),"videoCamera",new p),r(a(i),"videoDom",void 0),r(a(i),"deepAR",void 0),i}t(i,e);var c=i.prototype;return c.start=function(){this.RockARInit()},c.update=function(e){},c.JeelizArInit=function(){var e=this,i=window.JEELIZFACEFILTER;i.init({videoSettings:{flip:!1},canvasId:"ar-canvas",NNCPath:"./libs/jeeliz/nn/",callbackReady:function(e,t){if(!e){var n=h.getVisibleSize(),a=t.canvasElement;a.style.width=window.innerWidth+"px",a.style.height=window.innerHeight+"px",a.width=n.width,a.height=n.height,i.resize()}},callbackTrack:function(t){i.render_video(),e.Sync(e.cube,t)}})},c.RockARInit=function(){var e=this,i=window.WEBARROCKSFACE;i.init({videoSettings:{flip:!0},canvasId:"ar-canvas",NNCPath:"./libs/rocks/neuralNets/",callbackReady:function(e,t){if(!e){var n=h.getVisibleSize(),a=t.canvasElement;a.style.width=window.innerWidth+"px",a.style.height=window.innerHeight+"px",a.width=n.width,a.height=n.height,i.resize()}},callbackTrack:function(t){i.render_video(),e.Sync(e.cube,t)}})},c.Sync=function(e,i){e.active=i.detected>.85;var t=Math.tan(this.camera.camera.aspect*this.camera.fov*Math.PI/360),n=1/(2*i.s*t),a=-n-.5,r=i.x*n*t,c=i.y*n*t/this.camera.camera.aspect;e.position=new d(r,c,a),e.eulerAngles=new d(180*i.rx/Math.PI,180*i.ry/Math.PI,180*i.rz/Math.PI)},i}(u)).prototype,"camera",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=i(y.prototype,"cube",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=y))||g));c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./VideoCamera.ts","./GameMgr.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});