function gui(){var cb='',_=' top: -1000px;',zb='" for "gwt:onLoadErrorFn"',xb='" for "gwt:onPropertyErrorFn"',ib='");',Ab='#',rc='.cache.js',Cb='/',Ib='//',dc='6B30B928ED496C7CFE0C82F3E3D5DED8',ic='8E269379B92BFA047DAD826B860B388D',qc=':',fc=':1',gc=':2',hc=':3',jc=':4',kc=':5',lc=':6',mc=':7',rb='::',Fc=':moduleBase',bb='<!doctype html>',db='<html><head><\/head><body><\/body><\/html>',ub='=',Bb='?',nc='B4341CA8820E83C92B55039CBBCD4824',wb='Bad handler "',oc='C3A0F389047E68FF0B88118BF2863476',ab='CSS1Compat',gb='Chrome',fb='DOMContentLoaded',W='DUMMY',pc='E7A9D2F5228BE187FCF23C348C040A49',Ec='Ignoring non-whitelisted Dev Mode URL: ',Dc='__gwtDevModeHook:gui',Cc='_gwt_dummy_',Hb='base',Fb='baseUrl',R='begin',X='body',Q='bootstrap',Eb='clear.cache.gif',Jb='clipboardData.access',tb='content',xc='css/auto/clean.css',yc='css/auto/gui.css',Ub='default',zc='end',hb='eval("',Lb='event',Bc='file:',ec='foobar',_b='gecko',Mb='gecko.variant',Ob='gecko1_8',U='gui',cc='gui.devmode.js',Gb='gui.nocache.js',qb='gui::',S='gwt.codesvr.gui=',T='gwt.codesvr=',yb='gwt:onLoadErrorFn',vb='gwt:onPropertyErrorFn',sb='gwt:property',nb='head',vc='href',Ac='http:',Yb='ie10',Rb='ie11',$b='ie8',Zb='ie9',Y='iframe',Db='img',kb='javascript',Z='javascript:""',sc='link',wc='loadExternalRefs',ob='meta',mb='moduleRequested',lb='moduleStartup',Xb='msie',pb='name',Pb='none',Tb='onLoad',$='position:absolute; width:0; height:0; border:none; left: -1000px;',tc='rel',Wb='safari',jb='script',bc='selectingPermutation',V='startup',Sb='std',uc='stylesheet',Qb='trident',eb='undefined',ac='unknown',Nb='user.agent',Vb='webkit',Kb='window';var o=window;var p=document;r(Q,R);function q(){var a=o.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:U,sessionId:o.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
gui.__sendStats=r;gui.__moduleName=U;gui.__errFn=null;gui.__moduleBase=W;gui.__softPermutationId=0;gui.__computePropValue=null;gui.__getPropMap=null;gui.__gwtInstallCode=function(){};gui.__gwtStartLoadingFragment=function(){return null};var s=function(){return false};var t=function(){return null};__propertyErrorFunction=null;var u=o.__gwt_activeModules=o.__gwt_activeModules||{};u[U]={moduleName:U};var v;function w(){B();return v}
function A(){B();return v.getElementsByTagName(X)[0]}
function B(){if(v){return}var a=p.createElement(Y);a.src=Z;a.id=U;a.style.cssText=$+_;a.tabIndex=-1;p.body.appendChild(a);v=a.contentDocument;if(!v){v=a.contentWindow.document}v.open();var b=document.compatMode==ab?bb:cb;v.write(b+db);v.close()}
function C(k){function l(a){function b(){if(typeof p.readyState==eb){return typeof p.body!=eb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(fb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(fb,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=w();var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(hb));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode(ib));g=f.createElement(jb);g.language=kb;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(jb);g.language=kb;g.text=c[i];e.appendChild(g);d(e,g)}}}
gui.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;p.getElementsByTagName(nb)[0].appendChild(n)}
gui.__startLoadingFragment=function(a){return G(a)};gui.__installRunAsyncCode=function(a){var b=A();var c=w().createElement(jb);c.language=kb;c.text=a;b.appendChild(c);b.removeChild(c)};function D(){var c={};var d;var e;var f=p.getElementsByTagName(ob);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(pb),k;if(j){j=j.replace(qb,cb);if(j.indexOf(rb)>=0){continue}if(j==sb){k=i.getAttribute(tb);if(k){var l,m=k.indexOf(ub);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=cb}c[j]=l}}else if(j==vb){k=i.getAttribute(tb);if(k){try{d=eval(k)}catch(a){alert(wb+k+xb)}}}else if(j==yb){k=i.getAttribute(tb);if(k){try{e=eval(k)}catch(a){alert(wb+k+zb)}}}}}t=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;gui.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Ab);if(b==-1){b=a.length}var c=a.indexOf(Bb);if(c==-1){c=a.length}var d=a.lastIndexOf(Cb,Math.min(c,b));return d>=0?a.substring(0,d+1):cb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Db);b.src=a+Eb;a=e(b.src)}return a}
function g(){var a=t(Fb);if(a!=null){return a}return cb}
function h(){var a=p.getElementsByTagName(jb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(Gb)!=-1){return e(a[b].src)}}return cb}
function i(){var a=p.getElementsByTagName(Hb);if(a.length>0){return a[a.length-1].href}return cb}
function j(){var a=p.location;return a.href==a.protocol+Ib+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==cb){k=h()}if(k==cb){k=i()}if(k==cb&&j()){k=e(p.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return gui.__moduleBase+a}
function H(){var f=[];var g=0;function h(a,b){var c=f;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
j[Jb]=function(){if(!!window.clipboardData){return Kb}else{return Lb}};i[Jb]={event:0,window:1};j[Mb]=function(){try{if(!j.hasOwnProperty(Nb)||k(Nb)!==Ob){return Pb}}catch(a){return Pb}if(navigator.userAgent.toLowerCase().indexOf(Qb)!=-1){return Rb}return Sb};i[Mb]={ie11:0,none:1,std:2};j[Tb]=function(){if(!o.marvin){o.marvin={onLoadArray:[],onLoad:function(){if(!o.marvin.onLoadArray){return}for(var a=0;a<o.marvin.onLoadArray.length;a++)o.marvin.onLoadArray[a]();delete o.marvin.onLoadArray},onReady:function(a){o.marvin.onLoadArray?o.marvin.onLoadArray.push(a):a()}}}return Ub};i[Tb]={'default':0,foobar:1};j[Nb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Vb)!=-1}())return Wb;if(function(){return b.indexOf(Xb)!=-1&&p.documentMode>=10}())return Yb;if(function(){return b.indexOf(Xb)!=-1&&p.documentMode>=9}())return Zb;if(function(){return b.indexOf(Xb)!=-1&&p.documentMode>=8}())return $b;if(function(){return b.indexOf(_b)!=-1}())return Ob;return ac};i[Nb]={gecko1_8:0,ie10:1,ie8:2,ie9:3,safari:4,unknown:5};s=function(a,b){return b in i[a]};gui.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};gui.__computePropValue=k;o.__gwt_activeModules[U].bindings=gui.__getPropMap;r(Q,bc);if(q()){return G(cc)}var l;try{h([Lb,Pb,Ub,Zb],dc);h([Lb,Pb,ec,Zb],dc);h([Kb,Pb,Ub,Zb],dc+fc);h([Kb,Pb,ec,Zb],dc+fc);h([Lb,Pb,Ub,Zb],dc+gc);h([Lb,Pb,ec,Zb],dc+gc);h([Kb,Pb,Ub,Zb],dc+hc);h([Kb,Pb,ec,Zb],dc+hc);h([Lb,Pb,Ub,Wb],ic);h([Lb,Pb,ec,Wb],ic);h([Lb,Pb,Ub,ac],ic+fc);h([Lb,Pb,ec,ac],ic+fc);h([Kb,Pb,Ub,Wb],ic+gc);h([Kb,Pb,ec,Wb],ic+gc);h([Kb,Pb,Ub,ac],ic+hc);h([Kb,Pb,ec,ac],ic+hc);h([Lb,Pb,Ub,Wb],ic+jc);h([Lb,Pb,ec,Wb],ic+jc);h([Lb,Pb,Ub,ac],ic+kc);h([Lb,Pb,ec,ac],ic+kc);h([Kb,Pb,Ub,Wb],ic+lc);h([Kb,Pb,ec,Wb],ic+lc);h([Kb,Pb,Ub,ac],ic+mc);h([Kb,Pb,ec,ac],ic+mc);h([Lb,Pb,Ub,$b],nc);h([Lb,Pb,ec,$b],nc);h([Kb,Pb,Ub,$b],nc+fc);h([Kb,Pb,ec,$b],nc+fc);h([Lb,Pb,Ub,$b],nc+gc);h([Lb,Pb,ec,$b],nc+gc);h([Kb,Pb,Ub,$b],nc+hc);h([Kb,Pb,ec,$b],nc+hc);h([Lb,Rb,Ub,Ob],oc);h([Lb,Rb,ec,Ob],oc);h([Lb,Sb,Ub,Ob],oc+fc);h([Lb,Sb,ec,Ob],oc+fc);h([Kb,Rb,Ub,Ob],oc+gc);h([Kb,Rb,ec,Ob],oc+gc);h([Kb,Sb,Ub,Ob],oc+hc);h([Kb,Sb,ec,Ob],oc+hc);h([Lb,Rb,Ub,Ob],oc+jc);h([Lb,Rb,ec,Ob],oc+jc);h([Lb,Sb,Ub,Ob],oc+kc);h([Lb,Sb,ec,Ob],oc+kc);h([Kb,Rb,Ub,Ob],oc+lc);h([Kb,Rb,ec,Ob],oc+lc);h([Kb,Sb,Ub,Ob],oc+mc);h([Kb,Sb,ec,Ob],oc+mc);h([Lb,Pb,Ub,Yb],pc);h([Lb,Pb,ec,Yb],pc);h([Kb,Pb,Ub,Yb],pc+fc);h([Kb,Pb,ec,Yb],pc+fc);h([Lb,Pb,Ub,Yb],pc+gc);h([Lb,Pb,ec,Yb],pc+gc);h([Kb,Pb,Ub,Yb],pc+hc);h([Kb,Pb,ec,Yb],pc+hc);l=f[k(Jb)][k(Mb)][k(Tb)][k(Nb)];var m=l.indexOf(qc);if(m!=-1){g=parseInt(l.substring(m+1),10);l=l.substring(0,m)}}catch(a){}gui.__softPermutationId=g;return G(l+rc)}
function I(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(sc);b.setAttribute(tc,uc);b.setAttribute(vc,G(a));p.getElementsByTagName(nb)[0].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(wc,R);c(xc);c(yc);r(wc,zc)}
D();gui.__moduleBase=F();u[U].moduleBase=gui.__moduleBase;var J=H();if(o){var K=!!(o.location.protocol==Ac||o.location.protocol==Bc);o.__gwt_activeModules[U].canRedirect=K;function L(){var b=Cc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=Dc;var N=o.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(Ec+N)}N=cb}if(N&&!o[M]){o[M]=true;o[M+Fc]=F();var O=p.createElement(jb);O.src=N;var P=p.getElementsByTagName(nb)[0];P.insertBefore(O,P.firstElementChild||P.children[0]);return false}}}I();r(Q,zc);C(J);return true}
gui.succeeded=gui();