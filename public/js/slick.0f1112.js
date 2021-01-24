!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n,l=this;if(l.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,onSetPosition:null,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},l.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},i.extend(l,l.initials),l.activeBreakpoint=null,l.animType=null,l.animProp=null,l.breakpoints=[],l.breakpointSettings=[],l.cssTransitions=!1,l.paused=!1,l.positionProp=null,l.respondTo=null,l.shouldClick=!0,l.$slider=i(t),l.$slidesCache=null,l.transformType=null,l.transitionType=null,l.windowWidth=0,l.windowTimer=null,l.options=i.extend({},l.defaults,o),l.currentSlide=l.options.initialSlide,l.originalSettings=l.options,(s=l.options.responsive||null)&&s.length>-1){for(n in l.respondTo=l.options.respondTo||"window",s)s.hasOwnProperty(n)&&(l.breakpoints.push(s[n].breakpoint),l.breakpointSettings[s[n].breakpoint]=s[n].settings);l.breakpoints.sort(function(i,e){return e-i})}l.autoPlay=i.proxy(l.autoPlay,l),l.autoPlayClear=i.proxy(l.autoPlayClear,l),l.changeSlide=i.proxy(l.changeSlide,l),l.clickHandler=i.proxy(l.clickHandler,l),l.selectHandler=i.proxy(l.selectHandler,l),l.setPosition=i.proxy(l.setPosition,l),l.swipeHandler=i.proxy(l.swipeHandler,l),l.dragHandler=i.proxy(l.dragHandler,l),l.keyHandler=i.proxy(l.keyHandler,l),l.autoPlayIterator=i.proxy(l.autoPlayIterator,l),l.instanceUid=e++,l.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,l.init(),l.checkResponsive()}}()).prototype.addSlide=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateSlide=function(e,t){var o={},s=this;if(1===s.options.slidesToShow&&!0===s.options.adaptiveHeight&&!1===s.options.vertical){var n=s.$slides.eq(s.currentSlide).outerHeight(!0);s.$list.animate({height:n},s.options.speed)}!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}}):(s.applyTransition(),!1===s.options.vertical?o[s.animType]="translate("+e+"px, 0px)":o[s.animType]="translate(0px,"+e+"px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.asNavFor=function(e){var t=null!=this.options.asNavFor?i(this.options.asNavFor).getSlick():null;null!=t&&t.slideHandler(e,!0)},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&!0!==i.paused&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this;!1===i.options.infinite?1===i.direction?(i.currentSlide+1===i.slideCount-1&&(i.direction=0),i.slideHandler(i.currentSlide+i.options.slidesToScroll)):(i.currentSlide-1==0&&(i.direction=1),i.slideHandler(i.currentSlide-i.options.slidesToScroll)):i.slideHandler(i.currentSlide+i.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow=i(e.options.prevArrow),e.$nextArrow=i(e.options.nextArrow),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.appendTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled"))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("index",e)}),e.$slidesCache=e.$slides,e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent();var t="overflow:";void 0!==e.options.overflow?t+=e.options.overflow:t+="hidden",e.$list=e.$slideTrack.wrap('<div class="slick-list" style="'+t+'"/>').parent(),e.$slideTrack.css("opacity",0),!0===e.options.centerMode&&(e.options.slidesToScroll=1),i("img[data-src]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),!0===e.options.accessibility&&e.$list.prop("tabIndex",0),e.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.checkResponsive=function(){var e,t,o,s=this,n=s.$slider.width(),l=window.innerWidth||i(window).width();if("window"===s.respondTo?o=l:"slider"===s.respondTo?o=n:"min"===s.respondTo&&(o=Math.min(l,n)),s.originalSettings.responsive&&s.originalSettings.responsive.length>-1&&null!==s.originalSettings.responsive){for(e in t=null,s.breakpoints)s.breakpoints.hasOwnProperty(e)&&o<s.breakpoints[e]&&(t=s.breakpoints[e]);null!==t?null!==s.activeBreakpoint?t!==s.activeBreakpoint&&(s.activeBreakpoint=t,s.options=i.extend({},s.originalSettings,s.breakpointSettings[t]),s.refresh()):(s.activeBreakpoint=t,s.options=i.extend({},s.originalSettings,s.breakpointSettings[t]),s.refresh()):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,s.refresh())}},e.prototype.changeSlide=function(e,t){var o,s,n,l,r=this;switch(i(e.target).is("a")&&e.preventDefault(),o=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||i(e.target).parent().index()*r.options.slidesToScroll;if(l=0,(n=r.getNavigableIndexes())[d]&&n[d]===d)if(d>n[n.length-1])d=n[n.length-1];else for(var a in n){if(d<n[a]){d=l;break}l=n[a]}r.slideHandler(d,!1,t);default:return}null!=window.wooliteObj&&setTimeout(function(){window.wooliteObj.scrollHandler(),window.wooliteObj.scrollCallback()},100)},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(){var e=this;e.autoPlayClear(),e.touchObject={},i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&"object"!=typeof e.options.prevArrow&&e.$prevArrow.remove(),e.$nextArrow&&"object"!=typeof e.options.nextArrow&&e.$nextArrow.remove(),e.$slides.parent().hasClass("slick-track")&&e.$slides.unwrap().unwrap(),e.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$list.off(".slick"),i(window).off(".slick-"+e.instanceUid),i(document).off(".slick-"+e.instanceUid)},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(e,t,o){var s=this;s.$slides.eq(t).find("p a").css({visibility:"visible"}),!1===s.cssTransitions?(s.$slides.eq(t).css({zIndex:1e3}),s.$slides.eq(t).animate({opacity:1},s.options.speed,s.options.easing,o),s.$slides.eq(e).animate({opacity:0},s.options.speed,s.options.easing,function(){i(this).find("p a").css({visibility:"hidden"})})):(s.applyTransition(t),s.applyTransition(e),s.$slides.eq(t).css({opacity:1,zIndex:1e3}),s.$slides.eq(e).css({opacity:0}),o&&setTimeout(function(){s.disableTransition(t),s.disableTransition(e),s.$slides.eq(e).find("p a").css({visibility:"hidden"}),o.call()},s.options.speed))},e.prototype.filterSlides=function(i){var e=this;null!==i&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)o=Math.ceil(i.slideCount/i.options.slidesToScroll);else for(;e<i.slideCount;)++o,e=t+i.options.slidesToShow,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!=0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=!1===s.options.vertical?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,!0===s.options.variableWidth&&(e=(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow))[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(e=(o=!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1))[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getNavigableIndexes=function(){for(var i=this,e=0,t=0,o=[];e<i.slideCount;)o.push(e),e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o},e.prototype.getSlideCount=function(){var e=this;if(!0===e.options.swipeToSlide){var t=null;return e.$slideTrack.find(".slick-slide").each(function(o,s){if(s.offsetLeft+i(s).outerWidth()/2>-1*e.swipeLeft)return t=s,!1}),Math.abs(i(t).attr("index")-e.currentSlide)}return e.options.slidesToScroll},e.prototype.init=function(){var e=this;i(e.$slider).hasClass("slick-initialized")||(i(e.$slider).addClass("slick-initialized"),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),i(".slidex").removeClass("slidex")),null!==e.options.onInit&&e.options.onInit.call(this,e)},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&!0===e.options.autoplay&&i("li",e.$dots).on("mouseenter.slick",function(){e.paused=!0,e.autoPlayClear()}).on("mouseleave.slick",function(){e.paused=!1,e.autoPlay()})},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),!0===e.options.pauseOnHover&&!0===e.options.autoplay&&(e.$list.on("mouseenter.slick",function(){e.paused=!0,e.autoPlayClear()}),e.$list.on("mouseleave.slick",function(){e.paused=!1,e.autoPlay()})),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.options.slide,e.$slideTrack).on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,function(){e.checkResponsive(),e.setPosition()}),i(window).on("resize.slick.slick-"+e.instanceUid,function(){i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.setPosition()},50))}),i("*[draggable!=true]",e.$slideTrack).on("dragstart",function(i){i.preventDefault()}),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(function(){e.setPosition})},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),!0===i.options.autoplay&&i.autoPlay()},e.prototype.keyHandler=function(i){var e=this;37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:"next"}})},e.prototype.lazyLoad=function(){var e,t,o=this;function s(e){i("source[data-srcset]",e).each(function(){var e=i(this),t=i(this).attr("data-srcset");e.attr("srcset",t).removeAttr("data-srcset")}),i("img[data-src]",e).each(function(){var e=i(this),t=i(this).attr("data-src");e.on("load",function(){e.animate({opacity:1},200)}).css({opacity:0}).attr("src",t).removeAttr("data-src").removeClass("slick-loading")})}!0===o.options.centerMode?!0===o.options.infinite?t=(e=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(e=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),t=o.options.slidesToShow/2+1+2+o.currentSlide):(t=(e=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide)+o.options.slidesToShow,!0===o.options.fade&&(e>0&&e--,t<=o.slideCount&&t++)),s(o.$slider.find(".slick-slide").slice(e,t)),o.slideCount<=o.options.slidesToShow?s(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?s(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&s(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI()},e.prototype.postSlide=function(i){var e=this;null!==e.options.onAfterChange&&e.options.onAfterChange.call(this,e,i),e.animating=!1,e.setPosition(),e.swipeLeft=null,!0===e.options.autoplay&&!1===e.paused&&e.autoPlay(),null!=window.wooliteObj&&(window.wooliteObj.scrollHandler(),window.wooliteObj.scrollCallback())},e.prototype.refresh=function(){var e=this,t=e.currentSlide;e.destroy(),i.extend(e,e.initials),e.init(),e.changeSlide({data:{message:"index",index:t}},!0)},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),!0===e.options.focusOnSelect&&i(e.options.slide,e.$slideTrack).on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),null!==e.options.onReInit&&e.options.onReInit.call(this,e)},e.prototype.removeSlide=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?i+"px":"0px",t="top"==o.positionProp?i+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},o.cssTransitions,s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s))},e.prototype.setDimensions=function(){var e=this;if(!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth)e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length));else if(!0===e.options.variableWidth){var t=0;e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.children(".slick-slide").each(function(){t+=Math.ceil(i(this).outerWidth(!0))}),e.$slideTrack.width(Math.ceil(t)+1)}else e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length));var o=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-o)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:800,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:800,opacity:0})});var o=t.$slides.eq(t.currentSlide);i(o).css({zIndex:900,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),null!==i.options.onSetPosition&&i.options.onSetPosition.call(this,i)},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;n.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),t=n.$slider.find(".slick-slide"),!0===n.options.centerMode?(e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active"):t.length<=n.options.slidesToShow?t.addClass("slick-active"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.selectHandler=function(e){var t=this,o=parseInt(i(e.target).parents(".slick-slide").attr("index"));if(o||(o=0),t.slideCount<=t.options.slidesToShow)return t.$slider.find(".slick-slide").removeClass("slick-active"),t.$slides.eq(o).addClass("slick-active"),!0===t.options.centerMode&&(t.$slider.find(".slick-slide").removeClass("slick-center"),t.$slides.eq(o).addClass("slick-center")),void t.asNavFor(o);t.slideHandler(o)},e.prototype.slideHandler=function(i,e,t){var o,s,n,l,r,d=this;e=e||!1,!0===d.animating&&!0===d.options.waitForAnimate||!0===d.options.fade&&d.currentSlide===i||d.slideCount<=d.options.slidesToShow||(!1===e&&d.asNavFor(i),o=i,r=d.getLeft(o),l=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?l:d.swipeLeft,!1===d.options.infinite&&!1===d.options.centerMode&&(i<0||i>d.getDotCount()*d.options.slidesToScroll)?!1===d.options.fade&&(o=d.currentSlide,!0!==t?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o)):!1===d.options.infinite&&!0===d.options.centerMode&&(i<0||i>d.slideCount-d.options.slidesToScroll)?!1===d.options.fade&&(o=d.currentSlide,!0!==t?d.animateSlide(l,function(){d.postSlide(o)}):d.postSlide(o)):(!0===d.options.autoplay&&clearInterval(d.autoPlayTimer),s=o<0?d.slideCount%d.options.slidesToScroll!=0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!=0?0:o-d.slideCount:o,d.animating=!0,null!==d.options.onBeforeChange&&i!==d.currentSlide&&d.options.onBeforeChange.call(this,d,d.currentSlide,s),n=d.currentSlide,d.currentSlide=s,d.setSlideClasses(d.currentSlide),d.updateDots(),d.updateArrows(),!0!==d.options.fade?!0!==t?d.animateSlide(r,function(){d.postSlide(s)}):d.postSlide(s):!0!==t?d.fadeSlide(n,s,function(){d.postSlide(s)}):d.postSlide(s)))},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":"vertical"},e.prototype.swipeEnd=function(i){var e=this;if(e.dragging=!1,e.shouldClick=!(e.touchObject.swipeLength>10),void 0===e.touchObject.curX)return!1;if(e.touchObject.swipeLength>=e.touchObject.minSwipe)switch(e.swipeDirection()){case"left":e.slideHandler(e.currentSlide+e.getSlideCount()),e.currentDirection=0,e.touchObject={};break;case"right":e.slideHandler(e.currentSlide-e.getSlideCount()),e.currentDirection=1,e.touchObject={}}else e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s=this;return o=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!s.dragging||o&&1!==o.length)&&(e=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==o?o[0].pageX:i.clientX,s.touchObject.curY=void 0!==o?o[0].pageY:i.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),"vertical"!==s.swipeDirection()?(void 0!==i.originalEvent&&s.touchObject.swipeLength>4&&i.preventDefault(),t=(!1===s.options.rtl?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),!1===s.options.vertical?s.swipeLeft=e+s.touchObject.swipeLength*t:s.swipeLeft=e+s.touchObject.swipeLength*(s.$list.height()/s.listWidth)*t,!0!==s.options.fade&&!1!==s.options.touchMove&&(!0===s.animating?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},e.prototype.swipeStart=function(i){var e,t=this;if(1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&"object"!=typeof e.options.prevArrow&&e.$prevArrow.remove(),e.$nextArrow&&"object"!=typeof e.options.nextArrow&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&!0!==e.options.infinite&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.removeClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled"),e.$nextArrow.removeClass("slick-disabled")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")):e.currentSlide>e.slideCount-e.options.slidesToShow+i&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled"),e.$prevArrow.removeClass("slick-disabled")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},i.fn.slick=function(i){return this.each(function(t,o){o.slick=new e(o,i)})},i.fn.slickAdd=function(i,e,t){return this.each(function(o,s){s.slick.addSlide(i,e,t)})},i.fn.slickCurrentSlide=function(){return this.get(0).slick.getCurrent()},i.fn.slickFilter=function(i){return this.each(function(e,t){t.slick.filterSlides(i)})},i.fn.slickGoTo=function(i,e){return this.each(function(t,o){o.slick.changeSlide({data:{message:"index",index:parseInt(i)}},e)})},i.fn.slickNext=function(){return this.each(function(i,e){e.slick.changeSlide({data:{message:"next"}})})},i.fn.slickPause=function(){return this.each(function(i,e){e.slick.autoPlayClear(),e.slick.paused=!0})},i.fn.slickPlay=function(){return this.each(function(i,e){e.slick.paused=!1,e.slick.autoPlay()})},i.fn.slickPrev=function(){return this.each(function(i,e){e.slick.changeSlide({data:{message:"previous"}})})},i.fn.slickRemove=function(i,e){return this.each(function(t,o){o.slick.removeSlide(i,e)})},i.fn.slickRemoveAll=function(){return this.each(function(i,e){e.slick.removeSlide(null,null,!0)})},i.fn.slickGetOption=function(i){return this.get(0).slick.options[i]},i.fn.slickSetOption=function(i,e,t){return this.each(function(o,s){s.slick.options[i]=e,!0===t&&(s.slick.unload(),s.slick.reinit())})},i.fn.slickUnfilter=function(){return this.each(function(i,e){e.slick.unfilterSlides()})},i.fn.unslick=function(){return this.each(function(i,e){e.slick&&e.slick.destroy()})},i.fn.getSlick=function(){var i=null;return this.each(function(e,t){i=t.slick}),i}});
