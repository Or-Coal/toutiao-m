(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[787],{53:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-edit-container"},[n("van-nav-bar",{attrs:{title:"编辑资料","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.back()}}}),n("van-cell-group",{staticClass:"action-card"},[n("van-cell",{attrs:{title:"头像","is-link":"",center:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("van-image",{staticClass:"avatar",attrs:{round:"",src:t.$store.state.user},on:{click:t.imageavatarEn}}),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"iptFile",attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})]},proxy:!0}])}),n("van-cell",{attrs:{title:"名称","is-link":"",value:t.profile.name},on:{click:t.showNameDialogFn}}),n("van-cell",{attrs:{title:"生日","is-link":"",value:t.profile.birthday},on:{click:t.isShowBirthFn}})],1),n("van-dialog",{attrs:{title:"标题","show-cancel-button":"","before-close":t.onNameDialogBeforeClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("input",{directives:[{name:"fofo",rawName:"v-fofo"},{name:"model",rawName:"v-model",value:t.nameuserFn,expression:"nameuserFn"}],attrs:{type:"text"},domProps:{value:t.nameuserFn},on:{input:function(e){e.target.composing||(t.nameuserFn=e.target.value)}}})]),n("van-popup",{staticStyle:{height:"50%"},attrs:{position:"bottom",round:""},model:{value:t.isShowBirth,callback:function(e){t.isShowBirth=e},expression:"isShowBirth"}},[n("van-datetime-picker",{attrs:{type:"date",title:"选择出生日期","min-date":t.minDate,"max-date":t.maxDate,"show-toolbar":!0},on:{cancel:t.cancelbirFn,confirm:t.confirmbirFn},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},i=[],a=n(3019),s=n(6198),o=(n(8309),n(4916),n(7601),n(8975),n(32)),u=n(7037),c=n(1709),f=n(4665),l={name:"UserEdit",data:function(){return{profile:{},show:!1,nameuserFn:"",isShowBirth:!1,minDate:new Date(1900,0,1),maxDate:new Date,currentDate:new Date}},created:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Og)();case 2:n=e.sent,console.log(n),t.profile=n.data.data;case 5:case"end":return e.stop()}}),e)})))()},methods:(0,a.Z)((0,a.Z)({},(0,f.OI)(["setUser"])),{},{imageavatarEn:function(){this.$refs.iptFile.click()},onFileChange:function(t){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!==t.target.files.length){n.next=2;break}return n.abrupt("return");case 2:return r=new FormData,r.append("photo",t.target.files[0]),n.next=6,(0,o.y2)(r);case 6:i=n.sent,e.profile.photo=i.data.data.photo,e.setUser(i.data.data.photo);case 9:case"end":return n.stop()}}),n)})))()},showNameDialogFn:function(){this.show=!0,this.nameuserFn=this.profile.name},onNameDialogBeforeClose:function(t,e){var n=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("confirm"!==t){r.next=12;break}if(!/^[A-Za-z0-9\u4e00-\u9fa5]{1,7}$/.test(n.nameuserFn)){r.next=8;break}return r.next=4,(0,o.$4)({name:n.nameuserFn});case 4:n.profile.name=n.nameuserFn,e(),r.next=10;break;case 8:(0,u.Z)({type:"warning",message:"用户名中英文和数字1-7位"}),e(!1);case 10:r.next=13;break;case 12:"cancel"===t&&e();case 13:case"end":return r.stop()}}),r)})))()},isShowBirthFn:function(){this.isShowBirth=!0,this.currentDate=new Date(this.profile.birthday)},cancelbirFn:function(){this.isShowBirth=!1},confirmbirFn:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.$4)({birthday:(0,c.p)(t.currentDate)});case 2:t.isShowBirth=!1,t.profile.birthday=(0,c.p)(t.currentDate);case 4:case"end":return e.stop()}}),e)})))()}})},h=l,d=n(3736),m=(0,d.Z)(h,r,i,!1,null,"dc46c738",null),p=m.exports},9337:function(t,e,n){var r=n(2109),i=n(9781),a=n(3887),s=n(5656),o=n(1236),u=n(6135);r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=o.f,c=a(r),f={},l=0;while(c.length>l)n=i(r,e=c[l++]),void 0!==n&&u(f,e,n);return f}})},2629:function(t,e,n){var r,i,a=n(7964)["default"];n(5837),n(4916),n(3123),n(9600),n(5306),n(8309),n(7601),n(4723),n(1539),n(9714),n(7042),n(9653),n(3753),function(s,o){"object"==a(e)?t.exports=o():(r=o,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i))}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",u="day",c="week",f="month",l="quarter",h="year",d="date",m="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),a=n-i<0,s=e.clone().add(r+(a?-1:1),f);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:h,w:c,d:u,D:d,h:o,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=y;var _=function(t){return t instanceof Y},M=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();D[a]&&(i=a),n&&(D[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;D[o]=e,i=o}return!r&&i&&(g=i),i||!r&&g},b=function(t,e){if(_(t))return t.clone();var n="object"==a(e)?e:{};return n.date=t,n.args=arguments,new Y(n)},S=w;S.l=M,S.i=_,S.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function a(t){this.$L=M(t.locale,null,!0),this.parse(t)}var y=a.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!S.u(e)||e,a=S.p(t),l=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(a){case h:return r?l(1,0):l(31,11);case f:return r?l(1,v):l(0,v+1);case c:var w=this.$locale().weekStart||0,g=(p<w?p+7:p)-w;return l(r?y-g:y+(6-g),v);case u:case d:return m($+"Hours",0);case o:return m($+"Minutes",1);case s:return m($+"Seconds",2);case i:return m($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,a=S.p(t),c="set"+(this.$u?"UTC":""),l=(n={},n[u]=c+"Date",n[d]=c+"Date",n[f]=c+"Month",n[h]=c+"FullYear",n[o]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[a],m=a===u?this.$D+(e-this.$W):e;if(a===f||a===h){var p=this.clone().set(d,1);p.$d[l](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[S.p(t)]()},y.add=function(r,a){var l,d=this;r=Number(r);var m=S.p(a),p=function(t){var e=b(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(m===f)return this.set(f,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===u)return p(1);if(m===c)return p(7);var v=(l={},l[s]=e,l[o]=n,l[i]=t,l)[m]||1,y=this.$d.getTime()+r*v;return S.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,f=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].substr(0,a)},l=function(t){return S.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:f(n.monthsShort,o,c,3),MMMM:f(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,u,2),ddd:f(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:S.s(a,2,"0"),h:l(1),hh:l(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||d[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,a,d){var m,p=S.p(a),v=b(r),y=(v.utcOffset()-this.utcOffset())*e,$=this-v,w=S.m(this,v);return w=(m={},m[h]=w/12,m[f]=w,m[l]=w/3,m[c]=($-y)/6048e5,m[u]=($-y)/864e5,m[o]=$/n,m[s]=$/e,m[i]=$/t,m)[p]||$,d?w:S.a(w)},y.daysInMonth=function(){return this.endOf(f).$D},y.$locale=function(){return D[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},a}(),O=Y.prototype;return b.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",u],["$M",f],["$y",h],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,Y,b),t.$i=!0),b},b.locale=M,b.isDayjs=_,b.unix=function(t){return b(1e3*t)},b.en=D[g],b.Ls=D,b.p={},b}))},5663:function(t,e,n){var r,i,a,s=n(7964)["default"];n(5837),n(4916),n(3123),function(o,u){"object"==s(e)?t.exports=u(n(2629)):(i=[n(2629)],r=u,a="function"===typeof r?r.apply(e,i):r,void 0===a||(t.exports=a))}(0,(function(t){"use strict";function e(t){return t&&"object"==s(t)&&"default"in t?t:{default:t}}var n=e(t),r={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(r,null,!0),r}))},9319:function(t,e,n){var r,i,a=n(7964)["default"];n(5837),n(4916),n(5306),function(s,o){"object"==a(e)?t.exports=o():(r=o,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i))}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,a,s,o){for(var u,c,f,l=a.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,m=0;m<d;m+=1){var p=h[m];p.d&&(u=s?n(e).diff(a,p.d,!0):a.diff(e,p.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(f=u>0,v<=p.r||!p.r){v<=1&&m>0&&(p=h[m-1]);var y=l[p.l];o&&(v=o(""+v)),c="string"==typeof y?y.replace("%d",v):y(v,r,p.l,f);break}}if(r)return c;var $=f?l.future:l.past;return"function"==typeof $?$(c):$.replace("%s",c)},r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}}))},1709:function(t,e,n){"use strict";n.d(e,{S:function(){return o},p:function(){return u}});var r=n(2629),i=n.n(r),a=n(9319),s=n.n(a),o=(n(5663),function(t){i().extend(s()),i().locale("zh");var e=i()(),n=i()(t);return e.to(n)}),u=function(t){return i()(t).format("YYYY-MM-DD")}},3019:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=787-legacy.40ffd46c.js.map