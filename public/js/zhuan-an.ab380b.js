(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.un55');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode1-552.jpg':'images/qrcode1-276.jpg');
var a='data-src';var e=document.querySelector('.un56');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode2-692-1.png':'images/qrcode2-346-1.png');
var a='data-src';var e=document.querySelector('.un57');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode3-510.jpg':'images/qrcode3-255.jpg');
var a='data-src';var e=document.querySelector('.un61');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/placeholder-400.png':'images/placeholder-200.png');
var a='data-src';var e=document.querySelector('.un64');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/you-turn-1018-1.jpg':'images/you-turn-509-1.jpg');
var e=document.querySelector('.un51');e.setAttribute('src',(dpi>1)?'images/partyscanner-cover-752.jpg':'images/partyscanner-cover-376.jpg');
var a='data-src';var e=document.querySelector('.un65');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dockpad-972-1.jpg':'images/dockpad-486-1.jpg');
var a='data-src';var e=document.querySelector('.un66');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/progressive-mesh-1018-1.jpg':'images/progressive-mesh-509-1.jpg');
var a='data-src';var e=document.querySelector('.un67');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/tadis-1018-2.jpg':'images/tadis-509-2.jpg');
var a='data-src';var e=document.querySelector('.un69 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t1-766.png':'images/t1-383.png');
var a='data-src';var e=document.querySelector('.un69 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t2-766.png':'images/t2-383.png');
var a='data-src';var e=document.querySelector('.un69 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t3-766.png':'images/t3-383.png');};
if(!window.HTMLPictureElement){r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.un69 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2150});var cs=new ConsentBanner('privacy-policy.html',undefined,0);cs.start(1);wl=new woolite();
wl.init();
wl.addAnimation($('.un50'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un53'), "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.un59'), "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.un63'), "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.un68'), "2.00s", "0.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un71 source');ldsrcset('.un72 source');ldsrcset('.un73 source');ldsrcset('.un74 source');ldsrcset('.un75 source');ldsrcset('.un76 source');ldsrcset('.un77 source');ldsrcset('.un78 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}