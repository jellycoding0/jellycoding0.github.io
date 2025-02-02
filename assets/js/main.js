/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

   jQuery(document).ready(function ($) {
    console.log("✅ JavaScript Loaded Successfully!");
  
    // FitVids 초기화 (비디오 반응형 지원)
    if ($.fn.fitVids) {
      $("#main").fitVids();
    } else {
      console.warn("⚠️ fitVids 플러그인이 로드되지 않았습니다.");
    }
  
    // Follow 메뉴 드롭다운
    $(".author__urls-wrapper button").on("click", function () {
      $(".author__urls").toggleClass("is--visible");
      $(".author__urls-wrapper").find("button").toggleClass("open");
    });
  
    // ESC 키로 검색 창 닫기
    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        if ($(".initial-content").hasClass("is--hidden")) {
          $(".search-content").toggleClass("is--visible");
          $(".initial-content").toggleClass("is--hidden");
        }
      }
    });
  
    // 검색 토글 버튼 클릭 시
    $(".search__toggle").on("click", function () {
      $(".search-content").toggleClass("is--visible");
      $(".initial-content").toggleClass("is--hidden");
  
      setTimeout(function () {
        $(".search-content input").focus();
      }, 400);
    });
  
    // SmoothScroll 초기화
    if (typeof SmoothScroll !== "undefined") {
      new SmoothScroll('a[href*="#"]', {
        offset: 20,
        speed: 400,
        speedAsDuration: true,
        durationMax: 500,
      });
    } else {
      console.warn("⚠️ SmoothScroll 라이브러리가 로드되지 않았습니다.");
    }
  
    // Magnific Popup 초기화
    if ($.fn.magnificPopup) {
      $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image...",
        gallery: { enabled: true, navigateByImgClick: true },
        closeOnContentClick: true,
        midClick: true,
      });
    } else {
      console.warn("⚠️ Magnific Popup 플러그인이 로드되지 않았습니다.");
    }
  
    // 카테고리 토글 기능
    $(".category-toggle").on("click", function () {
      console.log("✅ Category Clicked!");
  
      const postList = $(this).next(".post-list");
      if (postList.length) {
        postList.toggleClass("visible"); // 포스트 목록 보이기/숨기기 토글
      }
    });
  });
  