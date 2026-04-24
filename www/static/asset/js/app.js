(function ($) {
  // ----------------------------------------
  // majorVariable
  var $window = $(window);
  var $html = $("html");
  var windowW = $(window).width();
  var windowH = $(window).height();
  var windowTab = 1200;
  var headH = $('#l_header').outerHeight();

  var _ua = (function (u) {
    return {
      Tablet:
        (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
        u.indexOf("ipad") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
        u.indexOf("kindle") != -1 ||
        u.indexOf("silk") != -1 ||
        u.indexOf("playbook") != -1,
      Mobile:
        (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
        u.indexOf("iphone") != -1 ||
        u.indexOf("ipod") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
        u.indexOf("blackberry") != -1,
    };
  })(window.navigator.userAgent.toLowerCase());

  // ----------------------------------------
  // scroll
  $('a[href^="#"]').attr("data-scroll-to", "");

  // ----------------------------------------
  // drawr
  function drawr() {
    var drawrTouch = false;

    $(".js_drawr_btn").on("click", function (e) {
      switch (e.type) {
        case "touchstart":
          drawerToggle();
          drawrTouch = true;
          return false;
          break;

        case "click":
          if (!drawrTouch) drawerToggle();
          return false;
          break;
      }

      function drawerToggle() {
        $(".js_drawr_btn, .js_drawr, .js_drawr_cover").toggleClass("is-drawr");
        drawrTouch = false;
        noScroll();
      }
    });

    $(".js_drawr_cover, .js_drawr a").on("click", function (e) {
      $(".js_drawr_btn, .js_drawr, .js_drawr_cover").removeClass("is-drawr");
      noScroll();
    });
  }

  function noScrollDefault(event) {
    event.preventDefault();
  }
  function noScroll() {
    if ($(".is-drawr").length) {
      $("html").addClass("is-fixed");
    } else {
      $("html").removeClass("is-fixed");
    }
  }

  function megamenu() {
    if (windowW > windowTab) {
      $(".js_mega-menu").on({
        mouseenter: function () {
          $(this).addClass("is-menu");
          $(".js_drawr_cover").addClass("is-drawr");
        },
        mouseleave: function () {
          $(this).removeClass("is-menu");
          $(".js_drawr_cover").removeClass("is-drawr");
        },
      });

      $(".js_mega-menu a").on("click", function (e) {
        $(".js_mega-menu").removeClass("is-menu");
        $(".js_drawr_cover").removeClass("is-drawr");
      });
    }
  }

  // ----------------------------------------
  // smoothScroll
  function smoothScroll() {
    $('a[href^="#"]').on("click", function () {
      var href = $(this).attr("href");
      var $target = $(href == "#" || href == "" ? "html" : href);
      var pos = $target.offset().top - headH;
      $("html, body").animate({ scrollTop: pos }, 400);
    });
  }

  // ----------------------------------------
  // moreContent
  function moreContent() {
    $(".js_more").each(function (index, element) {
      var btn = $(this).find(".js_more_btn span");
      var content = $(this).find(".js_more_content");

      //ボタンクリックでイベント発火
      $(btn).on("click", function () {
        if ($(content).hasClass("is-open")) {
          //コンテンツの高さを固定値を代入
          if (windowW <= windowTab) {
            $(content).css("max-height", "94px");
          } else {
            $(content).css("max-height", "120px");
          }
          //openクラスを削除
          $(content).removeClass("is-open");
          $(btn).removeClass("is-open");
          //もっと見るボタンのテキストを設定
          $(btn).html("続きを見る");
        } else {
          //コンテンツの実際の高さを代入
          //キーワード値（none、max-content等）では動作しないので注意
          var high = $(content).get(0).scrollHeight;
          $(content).css("max-height", high + "px");
          //openクラスを追加
          $(content).addClass("is-open");
          $(btn).addClass("is-open");
          //もっと見るボタンのテキストを設定
          $(btn).html("閉じる");
        }
      });
    });
  }

  // ----------------------------------------
  // loadScroll
  function loadScroll() {
    var url = $(location).attr("href");
    if (url.indexOf("#") != -1) {
      var id = url.split("#");
      var $target = $("#" + id[id.length - 1]);
      if ($target.length) {
        var pos = $target.offset().top - headH;
        $("html, body").animate({ scrollTop: pos }, 400);
      }
    } else {
      $("html, body").animate({ scrollTop: 0 }, 0);
    }
  }

  // ----------------------------------------
  // fixedScrollW
  function fixedScrollW() {
    if (!_ua.Mobile && !_ua.Tablet) {
      $(".js_scroll_fixed").css("left", -$(window).scrollLeft());
      $(".js_scroll_fixed").css("width", "calc( 100% + " + window.scrollX + "px)");
    }
  }

  // ----------------------------------------
  // scrollAnim
  function scrollAnim() {
    setTimeout(function () {
      $(".js_anim_scroll, .js_anim_scroll_group").waypoint(
        function (direction) {
          var activePoint = $(this.element);
          if (direction === "down") {
            activePoint.addClass("is-anim");
          }
        },
        { offset: "85%" }
      );
    }, 500);
  }

  // ----------------------------------------
  // modal
  function modalPhoto() {
    $(".js_modal_photo").venobox({
      framewidth: "750px",
      frameheight: "auto",
      bgcolor: "#fff",
      overlayColor: "rgba(255, 255, 255, 0.85)",
      // overlayClose: false,
      closeBackground: "rgba(255, 255, 255, 0)",
      closeColor: "#000",
      titleBackground: "#bfcbc9",
      titleColor: "#fff",
      titlePosition: "bottom",
    });
  }

  // ----------------------------------------
  // accordion
  function accordion() {
    $(".js_accordion>dt").on("click", function () {
      $(this).toggleClass("is-accordion");
      $(this).next().slideToggle();
    });
  }

  function sitemapAccordion() {
    $(".js_sitemap_acc i").on("click", function () {
      $(this).toggleClass("is-accordion");
      $(this).parent().next().slideToggle();
    });
  }

  function faqAccordion() {
    // $('.js_faq_acc>dl>dt, .js_faq_acc>dl>dd>p').on('click', function() {
    $(".js_faq_acc>dl>dt").on("click", function () {
      $(this).toggleClass("is-accordion");
      $(this).nextAll().slideToggle();
    });

    $(".js_faq_acc>dl>dd>p").on("click", function () {
      $(this).toggleClass("is-accordion");
      $(this).next().slideToggle();
    });
  }

  // ----------------------------------------
  // tab
  function tab() {
    $(".js_tab_btn > *").on("click", function () {
      //セレクタ設定
      var thisElm = $(this);
      var thisTabWrap = thisElm.parents(".js_tab");
      var thisTabBtn = thisTabWrap.find(".js_tab_btn > *");
      var thisTabContents = thisTabWrap.find(".js_tab_content > *");

      //current class
      var currentClass = "is-tab";

      //js-tab_btn current 切り替え
      thisTabBtn.removeClass(currentClass);
      thisElm.addClass(currentClass);

      //クリックされた tabが何番目か取得
      var thisElmIndex = thisTabBtn.index(this);

      //js-tab_contents 切り替え
      thisTabContents.removeClass(currentClass);
      thisTabContents.eq(thisElmIndex).addClass(currentClass);
    });
  }

  // ----------------------------------------
  // slide
  function slide() {
    if ($(".js_slide_essential").length) {
      $(".js_slide_essential").slick({
        autoplay: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
      });
    }
  }

  // ----------------------------------------
  // textSize
  function textSize() {
    $(".js_text-size .small").on("click", function () {
      $("html").css("font-size", "8px");
      $(".js_text-size span").removeClass("is-size");
      $(this).addClass("is-size");
      $.cookie("textType", "small");
      $.cookie("textSize", "8px");
    });

    $(".js_text-size .medium").on("click", function () {
      $("html").css("font-size", "10px");
      $(".js_text-size span").removeClass("is-size");
      $(this).addClass("is-size");
      $.cookie("textType", "medium");
      $.cookie("textSize", "10px");
    });

    $(".js_text-size .large").on("click", function () {
      $("html").css("font-size", "12px");
      $(".js_text-size span").removeClass("is-size");
      $(this).addClass("is-size");
      $.cookie("textType", "large");
      $.cookie("textSize", "12px");
    });

    if ($.cookie("textType") && $.cookie("textSize")) {
      $textType = $.cookie("textType");
      $textSize = $.cookie("textSize");
      $(".js_text-size span").removeClass("is-size");
      $(".js_text-size ." + $textType).addClass("is-size");
      $("html").css("font-size", $textSize);
    }
  }

  // ----------------------------------------
  // graph
  function graphIrManagementVisionMission() {
    if ($("#js_graph01").length) {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ["", "売上高", "営業利益", "売上高営業利益率"],
          //["2022年3月期", 2990, 418, 13.98], //2024-05-08 変更
          //["2023年3月期", 3120, 507, 16.25], //2024-05-08 変更
          ["2024年3月期　　(実績)", 2642, 411, 15.5],
          ["2025年3月期　　(計画)", 2928, 378, 12.9], //2024-04-28 変更
          ["2026年3月期　　(計画)", 3218, 428, 13.3], //2024-04-28 変更
          ["2027年3月期　　(計画)", 3757, 655, 17.4], //2024-04-28 変更
        ]);

        var options = {
          legend: { position: "bottom" },
          seriesType: "bars",
          series: {
            2: { type: "line", targetAxisIndex: 1 },
            3: { targetAxisIndex: 0 },
          },
          vAxes: {
            0: { title: "（単位 : 百万円）", minValue: 0, minValue: 5000 },
            1: { title: "（単位 : ％）", minValue: 0, minorGridlines: { color: "#fff" }, gridlines: { count: 0 } },
          },


          colors: ["#5b9bd5", "#ed7d31", "#333"],

          

        };

        var chart = new google.visualization.ComboChart(document.getElementById("js_graph01"));

        var formatter1 = new google.visualization.NumberFormat({ pattern: "#,###百万円" });
        formatter1.format(data, 1);

        var formatter2 = new google.visualization.NumberFormat({ pattern: "#,###百万円" });
        formatter2.format(data, 2);

        var formatter3 = new google.visualization.NumberFormat({ pattern: "##.##％" });
        formatter3.format(data, 3);

        chart.draw(data, options);
      }
    }
  }

  function graphIrManagementVisionMobility() {
    if ($("#js_graph02").length) {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ["", "売上高", "営業利益", "売上高営業利益率"],
          //["2022年3月期", 1450, 68, 4.7], //2024-05-08 変更
          //["2023年3月期", 1470, 89, 6.1], //2024-05-08 変更
          ["2024年3月期　　(実績)", 2825, 283, 10], //2024-05-08 変更
          ["2025年3月期　　(計画)", 3062, 191, 6.3],//2024-05-08 変更
          ["2026年3月期　　(計画)", 3972, 379, 9.5], //2024-04-28 変更
          ["2027年3月期　　(計画)", 4233, 432, 10.2], //2024-04-28 変更
        ]);

        var options = {
          legend: { position: "bottom" },
          seriesType: "bars",
          series: {
            2: { type: "line", targetAxisIndex: 1 },
            3: { targetAxisIndex: 0 },
          },
          vAxes: {
            0: { title: "（単位 : 百万円）", minValue: 0 },
            1: { title: "（単位 : ％）", minValue: 0, minorGridlines: { color: "#fff" }, gridlines: { count: 0 } },
          },
          colors: ["#5b9bd5", "#ed7d31", "#333"],
        };

        var chart = new google.visualization.ComboChart(document.getElementById("js_graph02"));

        var formatter1 = new google.visualization.NumberFormat({ pattern: "#,###百万円" });
        formatter1.format(data, 1);

        var formatter2 = new google.visualization.NumberFormat({ pattern: "#,###百万円" });
        formatter2.format(data, 2);

        var formatter3 = new google.visualization.NumberFormat({ pattern: "##.##％" });
        formatter3.format(data, 3);

        chart.draw(data, options);
      }
    }
  }

  function fixedBanner() {
    $(".js_bnr_fixed .disp").on("click", function () {
      $(this).parent().toggleClass("is-bnr");
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".js_bnr_fixed").fadeIn();
      }
    });
  }

  function sptitText() {
    $(".js_split_txt").each(function () {
      var text = $.trim(this.textContent),
        html = "";
      text.split("").forEach(function (v) {
        html += "<span>" + v + "</span>";
      });
      this.innerHTML = html;
    });
  }

  // 遅延用 引数の分だけ処理を遅らせる
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  // 目隠しの帯のアニメーション
  function pageTransitionOut() {
    const transitionItem = document.querySelectorAll(".js_load .item");
    const transitionLogo = document.querySelectorAll(".js_load .logo");
    const transitionContainer = document.querySelector(".js_load");
    const tl = gsap.timeline();
    tl.to(transitionItem, {
      duration: 0.4,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    });
  }

  function pageTransitionIn() {
    const transitionItem = document.querySelectorAll(".js_load .item");
    const transitionLogo = document.querySelectorAll(".js_load .logo");
    const transitionContainer = document.querySelector(".js_load");
    const tl = gsap.timeline();
    tl.to(transitionLogo, {
      duration: 0.4,
      y: "-20px",
      opacity: 1,
    });
    tl.to(transitionContainer, {
      duration: 1,
      y: "-100%",
      ease: "Expo.easeInOut",
    });
    tl.to(transitionLogo, {
      duration: 0,
      y: "0",
      opacity: 0,
    });
    tl.to(transitionContainer, {
      duration: 0,
      y: 0,
    });
    tl.to(transitionItem, {
      duration: 0,
      scaleY: 0,
      scaleX: 1,
    });
  }

  // ページを離れる時の上に消える動作
  function leaveAnimation() {
    const tl = gsap.timeline();
    tl.to(".js_anim_pjax_container", {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "Quart.easeOut",
    });
  }

  // ページに入った時の下から出てくる動作
  function enterAnimation() {
    const tl = gsap.timeline();
    tl.from(".js_anim_pjax_container", {
      duration: 1.5,
      y: 150,
      opacity: 0,
      ease: "Quart.easeOut",
    });
  }

  // ----------------------------------------
  // loadAnim
  function loadAnim() {
    pageTransitionIn();

    setTimeout(function () {
      $(".js_anim_scroll, .js_anim_scroll_group").waypoint(
        function (direction) {
          var activePoint = $(this.element);
          if (direction === "down") {
            activePoint.addClass("is-anim");
          }
        },
        { offset: "70%" }
      );
    }, 930);
  }

  // * ----------------------------------------
  // * animation-link
  function animLink() {
    $('a:not(a[target="_blank"], a[href^="tel"], a[href^="#"], a[mailto:], a.js_photo-modal)').click(function () {
      var url = $(this).attr("href");

      if (url != "") {
        pageTransitionOut();
        setTimeout(function () {
          location.href = url;
        }, 1000);
      }
      return false;
    });
  }

  // // barba設定
  // barba.init({
  //   // アニメーション
  //   transitions: [
  //     {
  //       // 次のページを表示する直前
  //       async beforeEnter(data) {
  //         replaceHeadTags(data.next);
  //         gaPush();
  //       },

  //       // 現在のページの離脱
  //       async leave(data) {
  //         const done = this.async();
  //         leaveAnimation();
  //         pageTransition();
  //         await delay(1000);
  //         done();
  //       },

  //       // 次ページに入った時
  //       async enter(data) {
  //         await delay(600);
  //         enterAnimation();
  //         smoothScroll();
  //         moreContent();
  //       },

  //       // すべて完了
  //       async after(data) {
  //         modalPhoto();
  //         accordion();
  //         faqAccordion();
  //         tab();
  //         slide();
  //         sptitText();
  //         scrollAnim();
  //         loadScroll();
  //         graphIrManagementVisionMission();
  //         graphIrManagementVisionMobility();
  //       },
  //     },
  //   ],
  //   // namespaceを使ったページごとに固有の設定
  //   // views: [
  //   //   {
  //   //     namespace: 'about',
  //   //     beforeEnter (data) { // 次ページに入った時
  //   //       document.querySelector('#common-wrapper').classList.add('-about');
  //   //     },
  //   //     afterLeave (data) { // 現在のページの離脱
  //   //       document.querySelector('#common-wrapper').classList.remove('-about');
  //   //     }
  //   //   }
  //   // ]
  // });

  // ----------------------------------------
  // DOM生成後
  $(function () {
    drawr();
    megamenu();
    smoothScroll();
    moreContent();
    modalPhoto();
    accordion();
    faqAccordion();
    sitemapAccordion();
    sptitText();
    tab();
    fixedBanner();
    slide();
    loadAnim();
    // 会社説明会・決算説明会セレクトボックス
    let selectbox = document.getElementById("selectbox");

    function redirectValue(event) {
      let loc = location;
      let value = event.target.value;
      if (loc.search !== "") value += loc.search;
      if (loc.hash !== "") value += loc.hash;

      //URLの場合はこちら
      loc.href = value;
    }

    selectbox.addEventListener("change", redirectValue, false);
    redirectValue();
    animLink();
  });

  // ----------------------------------------
  // ページの全データを読み込み後
  $(window).on("load", function () {
    // Pjaxにて記述
    // loadScroll();
    loadScroll();
    textSize();
    graphIrManagementVisionMission();
    graphIrManagementVisionMobility();
  });

  // ----------------------------------------
  // スクロール後
  $(window).on("scroll", function () {
    fixedScrollW();
  });

  // ----------------------------------------
  // ブラウザの「戻る」ボタンで画面遷移したときに強制的にリロード
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  // ----------------------------------------
  // カスタムHTMLのサイズをクリックで拡大させる
  window.addEventListener("click", () => {
    customHtmlSize();
  });

  function customHtmlSize() {
    const textArea = document.querySelectorAll("textarea.block-editor-plain-text");

    textArea.forEach((el) => {
      const h = parseInt(el.style.height);
      if (Number.isInteger(h)) {
        if (h > 250) {
          el.style.maxHeight = `${h}px`;
        }
      }
    });
  }
})(jQuery);


// --- modal ------------------------------------------------------------
function cmnModal() {
  if (document.querySelector('.js_modal')) {
    const modalElm = document.querySelector('.js_modal');
    const modalPanelElm = document.querySelectorAll('.js_modal_panel');
    const modalOpenBtnElm = document.querySelectorAll('.js_modal_open');
    const modalCloseBtnElm = document.querySelector('.js_modal_close');

    modalOpenBtnElm.forEach((elm) => {
      elm.addEventListener('click', function () {
        let targetPanel = '.' + elm.dataset.panel;
        modalElm.querySelector(targetPanel).style.display = 'block';
        modalElm.classList.add('is-show');
      });
    });

    modalCloseBtnElm.addEventListener('click', function () {
      close();
    });

    modalElm.addEventListener('click', (elm) => {
      if (elm.target.closest('.wrap') === null) {
        close();
      }
    });

    function close() {
      modalElm.classList.remove('is-show');

      setTimeout(function () {
        modalPanelElm.forEach((elm2) => {
          elm2.style.display = 'none';
        });
      }, 300);
    }
  }
}
document.addEventListener('DOMContentLoaded', cmnModal);


