(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],A=0,l=[];A<s.length;A++)a=s[A],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"0e19":function(t,e,n){},"1ec6":function(t,e,n){"use strict";var i=n("0e19"),o=n.n(i);o.a},"432a":function(t,e,n){"use strict";var i=n("b2e3"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"kiri"},[t._m(0),n("div",{staticClass:"frame-notes"},[n("button",{staticClass:"bg-success btn btn-new-note",on:{click:t.newNote}},[t._v(" + Note Baru ")]),n("ListNotes",{attrs:{propNotes:t.notes,propEditNote:t.editNote}})],1)]),n("div",{staticClass:"kanan"},[n("FormNote",{attrs:{propDataForm:t.dataForm,propSaveNote:t.saveNote,propUpdateNote:t.updateNote,propRemoveNote:t.removeNote}})],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://wegodev.com/access.html"}},[n("h2",[t._v("Wegodev")]),n("span",[t._v("Notes")])])])}],a=(n("a4d3"),n("e01a"),n("7db0"),n("c740"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),s=n("bc3a"),c=n.n(s),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"formNote"},[i("form",{on:{submit:t.submitNote}},[i("div",{staticClass:"menu"},[t.canDelete?i("button",{staticClass:"bg-danger btn btn-delete",attrs:{type:"button"},on:{click:t.submitRemove}},[t._v("Delete "),t.isSubmitRemove?i("img",{staticClass:"loader",attrs:{src:n("fa5e")}}):t._e()]):t._e(),i("button",{staticClass:"bg-success btn",attrs:{type:"submit",disabled:!t.isValid}},[t._v("Save "),t.isSubmitSave?i("img",{staticClass:"loader",attrs:{src:n("fa5e")}}):t._e()])]),i("div",{staticClass:"content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"text",attrs:{type:"hidden",readonly:"true"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"text textarea",attrs:{placeholder:"Tuliskan rencana kamu..."},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])])])},p=[],A=(n("498a"),{name:"FormNote",props:{propSaveNote:{type:Function,required:!0},propUpdateNote:{type:Function,required:!0},propRemoveNote:{type:Function,required:!0},propDataForm:{type:Object}},data:function(){return{id:0,title:"",description:"",canDelete:!1,isSubmitSave:!1,isSubmitRemove:!1}},methods:{submitNote:function(t){t.preventDefault(),this.isSubmitSave=!0,this.isSubmitSave=!1,0===this.id?this.propSaveNote(this.title,this.description):this.propUpdateNote(this.id,this.title,this.description)},submitRemove:function(){this.isSubmitRemove=!0,this.propRemoveNote(this.id),this.resetInput(),this.canDelete=!1,this.isSubmitRemove=!1},resetInput:function(){this.id=0,this.title="",this.description=""}},watch:{propDataForm:function(t){t.id>0?(this.id=t.id,this.title=t.title,this.description=t.description,this.canDelete=!0):(this.resetInput(),this.canDelete=!1)}},computed:{isValid:function(){var t=!0;return 0===this.title.trim().length&&(t=!1),t}}}),l=A,d=(n("432a"),n("2877")),f=Object(d["a"])(l,u,p,!1,null,"15e222de",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listNotes"},[n("ul",t._l(t.propNotes,(function(e,i){return n("li",{key:i},[n("button",{staticClass:"btn-note",on:{click:function(n){return t.idNote(e.id)}}},[n("label",[t._v(t._s(t.cutString(e.title,25)))]),n("span",[t._v(t._s(t.cutString(e.description,100)))])])])})),0)])},v=[],g={name:"listNotes",props:{propNotes:{type:Array,required:!0},propEditNote:{type:Function,required:!1}},data:function(){return{}},methods:{idNote:function(t){this.propEditNote(t)},cutString:function(t,e){return t.substring(0,e)+"..."}}},b=g,N=(n("1ec6"),Object(d["a"])(b,m,v,!1,null,"a07bcf64",null)),w=N.exports,C={name:"app",data:function(){return{notes:{},dataForm:{}}},components:{FormNote:h,ListNotes:w},methods:{newNote:function(){this.dataForm={id:0}},editNote:function(t){this.dataForm=this.notes.find((function(e){return e.id===t}))},saveNote:function(t,e){var n=this,i=new URLSearchParams;i.append("title",t),i.append("description",e),c.a.post("http://localhost/wegodev-notes/note/post/",i).then((function(i){var o=i.data,r={id:o,title:t,description:e};n.notes.unshift(r),n.editNote(o)})).catch((function(t){console.log(t)}))},updateNote:function(t,e,n){var i=this,o=new URLSearchParams;o.append("id",t),o.append("title",e),o.append("description",n),c.a.post("http://localhost/wegodev-notes/note/update/",o).then((function(o){var r=i.notes.findIndex((function(e){return e.id==t}));return i.notes[r].title=e,i.notes[r].description=n,o})).catch((function(t){console.log(t)}))},removeNote:function(t){var e=this,n=new URLSearchParams;n.append("id",t),c.a.post("http://localhost/wegodev-notes/note/delete",n).then((function(n){var i=e.notes.findIndex((function(e){return e.id==t}));return e.notes.splice(i,1),n})).catch((function(t){console.log(t)}))},getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=c.a.get("http://localhost/wegodev-notes/note").then((function(t){return t})).catch((function(t){console.log(t)})),t.next=3,e;case 3:n=t.sent,this.notes=n.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},y=C,S=(n("034f"),Object(d["a"])(y,o,r,!1,null,null,null)),k=S.exports;i["a"].config.productionTip=!0,new i["a"]({render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,n){},b2e3:function(t,e,n){},fa5e:function(t,e){t.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"}});
//# sourceMappingURL=app.3c3e4aed.js.map