/*------------------------------------------------
Trydo Html5 Creative Ahency Template
All Main Js Here  

Index All JS 
-----------------------
        01. Wow Active
        02. Counter Up
        03. Feature Icon Activation
        04. Youtub Popup 
        05. Slick Activation            
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/

(function (window, document, $, undefined) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      imJs.featherAtcivation();
      imJs.wowActive();
      imJs.backToTopInit();
      imJs.mobileMenuActive();
      imJs.awsActivation();
      imJs.stickyHeader();
      imJs.smothScroll();
      imJs.slickSliderActive();
      imJs.masonaryActive();
    },

    smothScroll: function () {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          500
        );
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    awsActivation: function (e) {
      AOS.init();
    },

    featherAtcivation: function () {
      feather.replace();
    },

    wowActive: function () {
      new WOW().init();
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 250) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      }); // scroll END

      //Click event to scroll to top
      $(scrollTop).click(function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      }); // click() scroll top EMD
    },

    mobileMenuActive: function (e) {
      $(".humberger-menu").on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").addClass("menu-open");
        imJs._html.css({
          overflow: "hidden",
        });
      });

      $(
        ".close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a"
      ).on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").removeClass("menu-open");
        $(".has-droupdown > a")
          .removeClass("open")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".popup-mobile-menu").on("click", function (e) {
        e.target === this && $(".popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".has-droupdown > a").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
        $(this).toggleClass("open");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".nav-pills .nav-link").on("click", function (e) {
        $(".rn-popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });
    },

    slickSliderActive: function () {
      $(".testimonial-activation").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 485,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },

    masonaryActive: function () {
      $(".elementor-gallery-item").imagesLoaded(function () {
        var $grid = $(".elementor-mesonry-wrapper").isotope({
          itemSelector: ".masonary-item",
          percentPosition: true,
          transitionDuration: "0.7s",
          masonry: {
            columnWidth: ".masonary-item",
          },
        });
      });
    },
  };
  imJs.m();
})(window, document, jQuery);
