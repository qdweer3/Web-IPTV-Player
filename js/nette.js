(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/tr_TR/all.js#xfbml=1&appId=230673750386170";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/*
$(function () {
	var  twitterusername = 'TRT3SPOR';
	$.getJSON('http://twitter.com/users/TRT3SPOR.json?callback=?',
	function(data)
	{
			$('.icon-26-2 + span').html(data.followers_count);
	});
});*/


/* Ajax Form */
$(function(){
    $(".async_result").each(function(index){
	   $("form.async",this).submit(function(event){
            event.preventDefault();
			$.get( $(this).attr("action"), $(this).serialize(),
            function(result){
				//console.log(result[0],$(aa).parent());
				if(result[0] === 0 || result == null)
				{
					$(".async_result").eq(index).html(result[1]);
				}
				else if(result[0] === 1)
				{
					$(".async_result").eq(index).html(result[1]);
				}
				else if(result[0] === 3)
				{
					window.location.replace(result[1]);
				}
			});
		});
	});
});

function randomString(id) {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = id;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

var usrckie = '';

$(function(){
    
    if ($("#team-js").size()) {
        $("#teams-open").show();
    }
	$("#teams-open").click(function(){
        if($("#team-js").hasClass("teams-close")) {
            $(this).find("img").attr("src", "static/img/icon/close.png");
            $("#team-js").removeClass("teams-close");
		} else {
            $(this).find("img").attr("src", "static/img/icon/open.png");
			$("#team-js").addClass("teams-close");
		}
        
        return false;
	});
    
    /*var Facebookurl = 'https://api.facebook.com/method/fql.query?query=SELECT%20fan_count%20FROM%20page%20WHERE%20page_id%20=108016212629651&format=json';
    $.getJSON(Facebookurl, function (LikeCount) {
    	var x = 0;
    	if (LikeCount != null || LikeCount[0] != null) {
    		x = LikeCount[0].fan_count;
    	}
    	$('#trtfb-like-count').html(x.toString());
    
    });*/

	usrckie = getCookie('usrckie');if(usrckie==''||usrckie==undefined){usrckie=randomString(45);setCookie('usrckie',usrckie,365);}
	//	Slider - start
	$('.webtv-slide').cycle({
		fx:     'scrollHorz',
		prev:   '.webtv-navigation .prev',
		next:   '.webtv-navigation .next',
		timeout: 0
	});
	
	$('.cat-slides').cycle({
		fx:     'fade',
		speed:  'fast',
		prev:   '.webtv-navigation .prev',
		next:   '.webtv-navigation .next',
		timeout: 0,
		pagerAnchorBuilder: function(idx, slide) {
			return '.pagide li a:eq(' + idx + ')';
		}
	});
	
	$('.pagide').cycle({
		fx:     'scrollVert',
		prev:   '.pagi.prev',
		next:   '.pagi.next',
		timeout: 0
	});

	$('.web-slide').cycle({
		fx:     'scrollHorz',
		prev:   '.web-navigation .prev',
		next:   '.web-navigation .next',
		timeout: 0
	});

    $('#photoGallerySlide').cycle({
        fx:     'scrollHorz',
        prev:   '#photoGallerySlideNav .prev',
        next:   '#photoGallerySlideNav .next',
        timeout: 0
    });

    $('#videoGallerySlide').cycle({
        fx:     'scrollHorz',
        prev:   '#videoGallerySlideNav .prev',
        next:   '#videoGallerySlideNav .next',
        timeout: 0
    });

	$('.video-bar-slide').cycle({
		fx:     'fade',
		speed:  'fast',
		pager:	'#video-bar-nav',
		timeout: 3000,
		pagerAnchorBuilder: function(idx, slide) {
			return '#video-bar-nav li a:eq(' + idx + ')';
		}
	});

	$('#video-bar-nav').cycle({
		fx:     'fade',
		speed:  'fast',
		timeout: 6000,
		prev:   '.video-bar-sub-navigation .prev',
		next:   '.video-bar-sub-navigation .next'
	});

	$('#gallery-nav').cycle({
		fx:     'fade',
		speed:  'fast',
		timeout: 6000,
		prev:   '.gallery-sub-navigation .prev',
		next:   '.gallery-sub-navigation .next'
	});

	$('.gallery-slide').cycle({
		fx:     'fade',
		speed:  'fast',
		pager:	'#gallery-nav',
		timeout: 3000,
		pagerAnchorBuilder: function(idx, slide) {
			return '#gallery-nav li a:eq(' + idx + ')';
		},
		updateActivePagerLink: function(pager, activeIndex) {
			$(pager).find('li:eq('+activeIndex+')').addClass('active-slide').siblings().removeClass('active-slide');
		}
	});

	$('.video-main .video-slide').cycle({
		fx:     'fade',
		speed:  'fast',
		timeout: 3000,
		pager:  '.video-main .video-nav',
		pagerAnchorBuilder: function(idx, slide) {
			return '.video-main .video-nav li a:eq(' + idx + ')';
		},
		updateActivePagerLink: function(pager, activeIndex) {
			$(pager).find('li:eq('+activeIndex+')').addClass('active-slide').siblings().removeClass('active-slide');
		}
	});

	$('.video-asistan .video-slide').cycle({
		fx:     'fade',
		speed:  'fast',
		timeout: 3000,
		pager:  '.video-asistan .video-nav',
		pagerAnchorBuilder: function(idx, slide) {
			return '.video-asistan .video-nav li a:eq(' + idx + ')';
		},
		updateActivePagerLink: function(pager, activeIndex) {
			$(pager).find('li:eq('+activeIndex+')').addClass('active-slide').siblings().removeClass('active-slide');
		}
	});

    $('.category-slide').cycle({
        fx:     'fade',
        speed:  'fast',
        timeout: 3000,
        pager:  '#category-nav',
        prev:   '.category-navigation .prev',
        next:   '.category-navigation .next',
        pagerEvent: 'mouseover',
        pagerAnchorBuilder: function(idx, slide) {
            return '#category-nav li a:eq(' + idx + ')';
        }
    });

    $('.trtspor2-category-headline-slide').cycle({
        fx:     'fade',
        speed:  'fast',
        timeout: 3000,
        pager:  '#trtspor2-category-headline-nav',
        prev:   '.trtspor2-category-headline-navigation .prev',
        next:   '.trtspor2-category-headline-navigation .next',
        pagerEvent: 'mouseover',
        pagerAnchorBuilder: function(idx, slide) {
            return '#trtspor2-category-headline-nav li a:eq(' + idx + ')';
        }
    });

    $('#trtspor2CategoryPhotoGallerySlide').cycle({
        fx:     'fade',
        speed:  'fast',
        timeout: 3000
    });

    $('#trtspor2CategoryVideoGallerySlide').cycle({
        fx:     'fade',
        speed:  'fast',
        timeout: 3000
    });
	//	Slider - end

	$(".tabs").tabs();

	$('.show-other-link').click(function(e){
		$('.fixture li').removeClass('team-hide');
		$('.show-other').addClass('hide');
		e.preventDefault();
	});

	//	Yorum fonksiyonları - start
	$('.reply').click(function(e){
		e.preventDefault();
		var parent_id = $(this).data('comment-id');
		pagerefresh = false;
		$("#comment-parent-id").val(parent_id);
		$('#comment-area').focus();
		$(".cancel-reply").show();
	});

	$(".cancel-reply").live('click', function(){
		$(this).hide();
		$("#comment-parent-id").val(0);
		return false;
	});
	
	$('.likes a').click(function(e){
		e.preventDefault();
		setCookie($(this).parent().attr('id'), 1, 365);
		$(this).parent().addClass('voted');
		
		var nid		= $(this).data('comment-id');
		var status	= $(this).data('status');

		$.get('ajax.php', {
			status		: status,
			comment_id	: nid,
			form_type	: 'comment_vote'
		},
			function(result){
				if(result[1]){
					var oyla	= result[1][0];
					var cid		= result[1][1];
					var status	= result[1][2];

					$('#comment-'+cid+' .likes a[data-status="'+status+'"] span').text(oyla);
				}
		}, "json");
	});
	
	$('.likes').each(function(){
		if( getCookie($(this).attr('id')) !== '') {
			$(this).addClass('voted');
		}
	});
	//	Yorum fonksiyonları - end
	
	$('.match-navigation a').click(function(e){
		e.preventDefault();

		var status 	= $(this).attr('id');
		var week	= $('#league-week').val();
		var id 		= $('.other-teams').data('id');

		if(status == 'prev-week'){
			var week = Number(week)-1;
			$('#league-week').val(week);
		}else if(status == 'next-week'){
			var week = Number(week)+1;
			$('#league-week').val(week);
		}

		if(week < 2){
			$('#prev-week').hide();
		}else{
			$('#prev-week').show();
		}

		if(week > 33){
			$('#next-week').hide();
		}else{
			$('#next-week').show();
		}

		$.get('ajax.php', {
			week		: week,
			form_type	: 'week_data',
			team_name	: team_name,
			team_id		: team_id,
			id 			: id
		},
			function(result){
				if(result){
					var week	= result.week;
					var home	= result.home;
					var away	= result.away;
					var score	= result.score;
					var date	= result.date;
					var url		= result.url;
					var image	= result.image;

					$('.league-info-date').text(date);
					$('.league-info-week').text(week);
					$('.home-team').text(home);
					$('.away-team').text(away);
					$('.score').text(score);
					$('.match-highlights a').attr('href', url);
					$('.match-highlights img').attr('src', image);

					if (url == null || image == null){
						$('.match-highlights').hide();
						console.log('Maç özeti yok');
					}else{
						$('.match-highlights').show();
					}
				}
		}, "json");
	});

	$('#fixtures-bar a').click(function(e){
		$('.fixture-tab li.loading').show();

		e.preventDefault();

		var month = $(this).data('month');
		var id = $('.fixture-tab').data('id');

		$('#fixtures-bar li').removeClass('selected');
		$(this).parent().addClass('selected');

		$.get('ajax.php', {
			month		: month,
			form_type	: 'fixture',
			id			: id
		},
			function(result){
				if(result){
					$('.fixture-tab ul').html(result);
				}
		}, "json");
	});

	$('.economics ul').cycle({
		fx: 'scrollDown',
		speed:  300,
	});

	$('#city_list').change(function(){
		//alert(this.value);
		$.get('ajax.php', {
			city		: this.value,
			form_type	: 'weather',
		},
			function(result){
				if(result){
					$('.weather .section').html(result[1]);
				}
		}, "json");
	});
});



//okunma adedi ajax update
function okunmaAdedi(data)
{
    $.post("ajax.php?form_type=okunmaAdedi", data);
};
$(function(){
    if(typeof okunmaAdediData !="undefined") {    
        okunmaAdedi(okunmaAdediData);
    }
});

/** toScrollFrame: turns a iframe wrapper into a scrollable masking region on iOS webkits
*
*   @param  iFrame  String   A CSS/jQuery Selector identifying the iFrame to scroll
*   @param  mask    String   A CSS/jQuery Selector identifying the masking/wrapper object
*   @return         Boolean  true on success, false on failure.
*/
var toScrollFrame = function(iFrame, mask){
    if(!navigator.userAgent.match(/iPad|iPhone/i)) return false; //do nothing if not iOS devie
    
    var mouseY = 0;
    var mouseX = 0;
    jQuery(iFrame).ready(function(){ //wait for iFrame to load
        //remeber initial drag motition
        jQuery(iFrame).contents()[0].body.addEventListener('touchstart', function(e){
            mouseY = e.targetTouches[0].pageY;
            mouseX = e.targetTouches[0].pageX;
        });
        
        //update scroll position based on initial drag position
        jQuery(iFrame).contents()[0].body.addEventListener('touchmove', function(e){
            e.preventDefault(); //prevent whole page dragging
            
            var box = jQuery(mask);
            box.scrollLeft(box.scrollLeft()+mouseX-e.targetTouches[0].pageX);
            box.scrollTop(box.scrollTop()+mouseY-e.targetTouches[0].pageY);
            //mouseX and mouseY don't need periodic updating, because the current position
            //of the mouse relative to th iFrame changes as the mask scrolls it.
        });
    });
    
    return true;
};

$(function(){
	if ($(".ipadFrame").size() > 0) {
		toScrollFrame('.ipadFrame','.frameMask'); //add single-touch scrolling to example page
	}
});

function socialMove(){
    if(typeof $(".news-social-media-bar").parent().offset() != 'undefined'){
        var scroll = $(window).scrollTop();
        top_distance = $(".news-social-media-bar").parent().offset().top;
        /*footer_top=$(".footer").offset().top;
        social_top = $(".news-social-media-bar").offset().top;*/
        social_bottom = $(".news-social-media-bar").offset().top + $(".news-social-media-bar").height();
        news_bottom = $(".news-details").offset().top + $(".news-details").height();

        if(scroll >= (top_distance - 80) && (scroll + 340) < news_bottom){
            $(".news-social-media-bar").removeAttr('style');
            $(".news-social-media-bar").not('sticky').addClass('sticky');
            return false;
        }

        if(scroll <= top_distance){
            $(".news-social-media-bar.sticky").removeClass('sticky');
            return false;
        }

        if((scroll + $(window).height()) >= news_bottom){
            $(".news-social-media-bar.sticky").attr('style','position:absolute!important;top:'+(news_bottom - 463)+'px');
            //$(".news-social-media-bar.sticky").removeClass('sticky')
            return false;
        }
    }
}

$(document).ready(function(){
     ms_ie = false;
     ua = window.navigator.userAgent;
     old_ie = ua.indexOf('MSIE ');
     new_ie = ua.indexOf('Trident/');
     if ((old_ie > -1) || (new_ie > -1)) {
        $(".full-wh-bg-img").each(function () {
            var $container = $(this).parent();
            $(this).css({'position':'absolute','top': '-9999px','right': '-9999px','bottom': '-9999px','left': '-9999px','margin':'auto','min-height':'100%','min-width':'100%'}).removeClass('full-wh-bg-img')
            $container.css({"overflow":'hidden','position':'relative'});
        });
    }

    /*if ((old_ie < 0) && (new_ie < 0)) {
        socialMove();
    }*/
});

$(window).scroll(function (event) {
    /*ua = window.navigator.userAgent;
	old_ie = ua.indexOf('MSIE ');
	new_ie = ua.indexOf('Trident/');
    if ((old_ie < 0) && (new_ie < 0)) {
        socialMove();
    }*/
});

var RefreshUrl
    ,RefreshTime
    ,pagerefresh = true
    ,RefreshControl = function(url, time) {
    RefreshUrl      = url;
    RefreshTime     = time;
    thispagerefresh = window.setTimeout(function(){
        if(pagerefresh) {
            setCookie('ScrollTo', $(window).scrollTop(), 1);
            RefreshUrl = RefreshUrl.replace("'", "");
            RefreshUrl = RefreshUrl.replace('"', "");
            RefreshUrl = RefreshUrl.replace("(", "");
            RefreshUrl = RefreshUrl.replace(")", "");
            RefreshUrl = RefreshUrl.replace("{", "");
            RefreshUrl = RefreshUrl.replace("}", "");
            RefreshUrl = RefreshUrl.replace(",", "");
            RefreshUrl = RefreshUrl.replace(";", "");
            RefreshUrl = RefreshUrl.replace("[", "");
            RefreshUrl = RefreshUrl.replace("]", "");
            window.location.href = RefreshUrl;
        }
    }, RefreshTime);
};