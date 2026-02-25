const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0);


const visualpc = new Swiper('.section1 .swiper.pc', {
    lopp:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
const visualm = new Swiper('.section1 .swiper.m', {
    lopp:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


const visualSlidePc = new Swiper('.section3 .swiper', {
    slidesPerView: 2.2,
    spaceBetween:10,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true, // 스크롤바 드래그 활성화
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        1024:{
            slidesPerView: 4,
            spaceBetween:20,
        }
    }
    });
    

    var thumbSwiper = new Swiper(".section4 .swiper", {
        slidesPerView: 1.1,
        spaceBetween:10,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true, // 스크롤바 드래그 활성화
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        breakpoints:{
            1024:{
                slidesPerView: 4,
                spaceBetween:20,
            }
        }
    });
    var thumbSwiper = new Swiper(".sc-insta .swiper", {
        slidesPerView: 2.2,
        spaceBetween:10,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true, // 스크롤바 드래그 활성화
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        breakpoints:{
            1024:{
                slidesPerView: 4,
                spaceBetween:20,
            }
        }
    });

// 메인 비디오 Swiper 초기화
const mainVideoSwiper = new Swiper('.main-video-swiper', {
    loop: true,
    allowTouchMove: false, // 수동 스와이프 비활성화
    autoplay: false,
    effect: 'fade', // fade 효과 추가
    fadeEffect: {
        crossFade: true // 부드러운 크로스 페이드
    },
    speed: 1000, // 전환 속도 (1초)
    pagination: {
        el: '.main-video-swiper .swiper-pagination',
        clickable: true,
    },
    on: {
        init: function() {
            // 첫 번째 비디오 재생
            const firstVideo = this.slides[this.activeIndex].querySelector('video');
            if (firstVideo) {
                firstVideo.play();
                
                // 비디오 종료 시 다음 슬라이드로 이동
                firstVideo.onended = () => {
                    this.slideNext();
                };
            }
        },
        slideChange: function() {
            // 모든 비디오 일시 정지 및 초기화
            const videos = this.el.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
                video.onended = null;
            });
            
            // 현재 슬라이드의 비디오 재생
            const activeVideo = this.slides[this.activeIndex].querySelector('video');
            if (activeVideo) {
                activeVideo.play();
                
                // 비디오 종료 시 다음 슬라이드로 이동
                activeVideo.onended = () => {
                    this.slideNext();
                };
            }
        }
    }
});
