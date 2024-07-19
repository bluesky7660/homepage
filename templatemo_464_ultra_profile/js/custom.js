

// ISOTOPE FILTER

jQuery(document).ready(function($){

	// if ( $('.iso-box-wrapper').length > 0 ) { 

	//     var $container 	= $('.iso-box-wrapper'), 
	//     	$imgs 		= $('.iso-box img');



	//     $container.imagesLoaded(function () {

	//     	$container.isotope({
	// 			layoutMode: 'fitRows',
	// 			itemSelector: '.iso-box'
	//     	});

	//     	$imgs.load(function(){
	//     		$container.isotope('reLayout');
	//     	})

	//     });

	//     //filter items on button click

	//     $('.filter-wrapper li a').click(function(){

	//         var $this = $(this), filterValue = $this.attr('data-filter');

	// 		$container.isotope({ 
	// 			filter: filterValue,
	// 			animationOptions: { 
	// 			    duration: 750, 
	// 			    easing: 'linear', 
	// 			    queue: false, 
	// 			}              	 
	// 		});	            

	// 		// don't proceed if already selected 

	// 		if ( $this.hasClass('selected') ) { 
	// 			return false; 
	// 		}

	// 		var filter_wrapper = $this.closest('.filter-wrapper');
	// 		filter_wrapper.find('.selected').removeClass('selected');
	// 		$this.addClass('selected');

	//       return false;
	//     }); 

	// }
	// init Isotope
    // var $container = $('.iso-box-wrapper');
    // $container.isotope({
    //     itemSelector: '.iso-box',
    //     layoutMode: 'fitRows',
    //     fitRows: {
    //         gutter: 0
    //     }
    // });

    // // filter items on button click
    // $('.filter-wrapper a').click(function() {
    //     var filterValue = $(this).attr('data-filter');
    //     $container.isotope({ filter: filterValue });
    //     $('.filter-wrapper a').removeClass('selected');
    //     $(this).addClass('selected');
    //     return false;
    // });

	var $container = $('.iso-box-wrapper').isotope({
        itemSelector: '.iso-box',
        layoutMode: 'fitRows', // 또는 'masonry'와 같은 다른 레이아웃 모드
        percentPosition: true // 비율 기반 위치 설정
    });

    // 필터 버튼 클릭 시
    $('.filter-wrapper a').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });

        // 선택된 필터 버튼 스타일 업데이트
        $('.filter-wrapper a').removeClass('selected');
        $(this).addClass('selected');

        return false;
    });

    // 윈도우 크기 변경 시 Isotope 레이아웃 조정
    $(window).resize(function() {
        $container.isotope('layout');
    });

});


// MAIN NAVIGATION

 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* NAVIGATION VISIBLE ON SCROLL */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });


	//처음 헤더 숨기기
    // function mainNav() {
    //     var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    //     if (top > 40) $('.sticky-navigation').stop().animate({
    //         "opacity": '1',
    //         "top": '0'
    //     });
    //     else $('.sticky-navigation').stop().animate({
    //         "opacity": '0',
    //         "top": '-75'
    //     });
    // }


// HIDE MOBILE MENU AFTER CLIKING ON A LINK

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
