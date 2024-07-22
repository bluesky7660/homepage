

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

	//자식크에 따라 부모크기설정
	function adjustParentSize() {
        const parent = document.querySelector('.iso-box-wrapper');
        const children = document.querySelectorAll('.iso-box-wrapper .iso-box');
        
        let maxWidth = 0;
        let maxHeight = 0;
        
        children.forEach(child => {
            const rect = child.getBoundingClientRect();
            maxWidth = Math.max(maxWidth, rect.right - parent.getBoundingClientRect().left);
            maxHeight = Math.max(maxHeight, rect.bottom - parent.getBoundingClientRect().top);
        });
        
        parent.style.width = `${maxWidth}px`;
        parent.style.height = `${maxHeight}px`;
    }

    // 페이지가 로드되었을 때와 창 크기가 변경될 때 크기를 조정합니다.
    window.addEventListener('load', adjustParentSize);
    window.addEventListener('resize', adjustParentSize);

    // $('.smoothScroll').click(function(event) {
    //     event.preventDefault();
    //     var target = $(this).data('target');
    //     $('html, body').animate({
    //         scrollTop: $(target).offset().top
    //     }, 800);
    // });

    // $('#topButton').click(function() {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 800);
    // });
    

});

// document.addEventListener("DOMContentLoaded", function() {
    // function scrollToSection(id) {
    //     const element = document.getElementById(id);
    //     element.scrollIntoView({ behavior: 'smooth' });
    // }
    // function scrollToTop() {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
// });
// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: 'smooth' });
// }
// document.addEventListener("DOMContentLoaded", function() {
//     // 앵커 링크 클릭 이벤트 핸들러
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });

//     // 스크롤 이벤트 핸들러
//     // window.onscroll = function() {
//     //     scrollFunction();
//     // };
// });

// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//     } else {
//         console.error("Target element not found:", id);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // 앵커 링크 클릭 이벤트 핸들러
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();  // 기본 링크 동작 방지
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });

//     // 페이지 로드 시 URL 해시를 확인하고 자동으로 스크롤
//     if (window.location.hash) {
//         const targetId = window.location.hash.substring(1);
//         scrollToSection(targetId);
        
//         // 다음 이벤트 루프에서 해시 제거
//         setTimeout(() => {
//             history.replaceState(null, null, window.location.pathname + window.location.search);
//         }, 0);
//     }
// });


// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//         // 해시 제거를 위한 setTimeout
//         setTimeout(() => {
//             history.replaceState(null, null, window.location.pathname + window.location.search);
//         }, 500); // 스크롤이 완료될 시간을 충분히 고려한 시간
//     } else {
//         console.error("Target element not found:", id);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // 앵커 링크 클릭 이벤트 핸들러
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();  // 기본 링크 동작 방지
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });

//     // 페이지 로드 시 URL 해시를 확인하고 자동으로 스크롤
//     if (window.location.hash) {
//         const targetId = window.location.hash.substring(1);
//         scrollToSection(targetId);
//     }
// });

// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });

//         // 해시 제거를 위해 요청 애니메이션 프레임 사용
//         requestAnimationFrame(() => {
//             requestAnimationFrame(() => {
//                 history.replaceState(null, null, window.location.pathname + window.location.search);
//             });
//         });
//     } else {
//         console.error("Target element not found:", id);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // 앵커 링크 클릭 이벤트 핸들러
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();  // 기본 링크 동작 방지
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });

//     // 페이지 로드 시 URL 해시를 확인하고 자동으로 스크롤
//     if (window.location.hash) {
//         const targetId = window.location.hash.substring(1);
//         scrollToSection(targetId);
//     }
// });

// $(window).on('hashchange', function() {
//     console.log('Hash changed to:', window.location.hash);
// });


// document.addEventListener("DOMContentLoaded", function() {
//     // 특정 섹션으로 부드럽게 스크롤하는 함수
//     function scrollToSection(id) {
//         const element = document.getElementById(id);
//         element.scrollIntoView({ behavior: 'smooth' });
//     }

//     // 앵커 링크 클릭 이벤트 핸들러
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             scrollToSection(targetId);
//         });
//     });
// });


// MAIN NAVIGATION

 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: false
    }); 

    /* NAVIGATION VISIBLE ON SCROLL */
    // mainNav();
    // $(window).scroll(function () {
    //     mainNav();
    // });


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

    