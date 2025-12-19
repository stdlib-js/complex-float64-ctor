"use strict";var o=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=o(function(S,n){"use strict";function c(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}n.exports=c});var a=o(function(d,u){"use strict";function y(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}u.exports=y});var E=o(function(q,v){"use strict";var m=require("@stdlib/assert-is-number").isPrimitive,p=require("@stdlib/utils-define-read-only-property"),i=require("@stdlib/utils-define-nonenumerable-read-only-property"),h=require("@stdlib/string-format"),l=s(),f=a();function e(r,t){if(!(this instanceof e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!m(r))throw new TypeError(h("invalid argument. Real component must be a number. Value: `%s`.",r));if(!m(t))throw new TypeError(h("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return p(this,"re",r),p(this,"im",t),this}i(e,"BYTES_PER_ELEMENT",8);i(e.prototype,"BYTES_PER_ELEMENT",8);i(e.prototype,"byteLength",16);i(e.prototype,"toString",l);i(e.prototype,"toJSON",f);v.exports=e});var w=E();module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
