window.onload = function () {
    "use strict";

    // Local Storage For Color
    let mainColors = localStorage.getItem("color_option");

    if (mainColors !== null) { document.documentElement.style.setProperty("--sec-color", mainColors) }

    // Switch Color
    const colorLi = document.querySelectorAll(".option-box .color-list li");

    colorLi.forEach(li => {
        li.addEventListener("click", (ev) => {
            // Get Color To Set In Root
            let mainColor = ev.currentTarget.dataset.color;

            // Set Color In Root
            document.documentElement.style.setProperty("--sec-color", mainColor);

            // Set Property In Local Storage
            localStorage.setItem("color_option", mainColor);

            // Remove Class Active From All Li
            ev.currentTarget.parentElement.querySelectorAll(".active").forEach(ele => {
               ele.classList.remove("active");
            });

            ev.currentTarget.classList.add("active");
        });
    });

    // Local Storage For Fonts
    let mainFont = localStorage.getItem("font_option");

    if (mainFont !== null) {
        // set Fonts For Local Storage
        document.body.style.setProperty("font-family", mainFont);
    }

    // Switch Fonts
    let fontLi = document.querySelectorAll(".option-box .font-list li");

    fontLi.forEach(li => {
        li.addEventListener("click", (ev) => {
            let fonts = ev.currentTarget.dataset.font;

            console.log(fonts);
            // Set Font In Body
            document.body.style.setProperty("font-family", fonts);

            // Set Local Storage
            localStorage.setItem("font_option", fonts);

            ev.currentTarget.parentElement.querySelectorAll(".active").forEach(ele => {
                ele.classList.remove("active");
            });

            ev.currentTarget.classList.add("active");
        });
    });


    // Switch Language
    let langs = localStorage.getItem('lang_option');


    let langLi = document.querySelectorAll(".option-box .lang-list li");

    langLi.forEach(lang => {
        lang.addEventListener("click", (ev) => {
            window.location.href = "../../project_three/" + ev.currentTarget.dataset.lang
        });
    });


    /* Sitting Box */
    let gearIcon = document.querySelector(".toggle-setting .fa-gear"),
        settingBox = document.querySelector(".setting-box");

    gearIcon.addEventListener("click", () => {
        // Add Class fa-Spin For Rotation
        gearIcon.classList.toggle("fa-spin");

        // Add Clas Open To Toggle
        settingBox.classList.toggle("open");
    });

   let loadingPage = document.querySelector(".loading-page");

    document.querySelector("body").style.overflow = "auto"
    loadingPage.style.display = "none";

    // Trigger Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#08526d",
        cursorwidth: "8px",
        cursorborder: "0",
        background: "#F9F9F9",
        cursorheight: "60px"
    });

    // Fit Text Jquery
    jQuery("#myHeader").fitText(1, {
        maxFontSize: "32px"
    });

    /* Add Class Active When Clicked */
    let myNav = document.querySelectorAll(".nav-item .nav-link");
    myNav.forEach((link) => {
        link.addEventListener("click", (ev) => {
            ev.preventDefault();
            for (let i = 0; i < myNav.length; i++) {
                if (link !== myNav[i]) {
                    myNav[i].parentElement.classList.remove("active");
                } else {
                    link.parentElement.classList.add("active");
                }
            }

            // Smooth To Section
            let currentID   = ev.currentTarget.attributes.href.value,
                section     = document.querySelector(currentID);
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });
    });

    // Trigger Carousel Slider
    $('.carousel').carousel();



// Word Section Class Active
    let links = document.querySelectorAll(".work .list-unstyled li");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            for(let i = 0; i < links.length; i++) {
                if (links[i] !== link) {
                    links[i].classList.remove("active");
                } else {
                    link.classList.add("active");
                }
            }
        });
    })

     // Trigger Mixitup
    let mixer = mixitup('.ourCon');

    // Testimonials
    let next = document.querySelector(".testi .carousel-control-next"),
        prev = document.querySelector(".testi .carousel-control-prev"),
        img = document.querySelector(".testi .img img");

    next.onclick = function () {
        let ourList = document.querySelector(".testi .row .carousel-inner .active");

        img.src = "images/testi/" + ourList.dataset.image
    }

    prev.onclick = function () {
        let ourList = document.querySelector(".testi .row .carousel-inner .active");

        img.src = "images/testi/" + ourList.dataset.image
    }


    // Go To Featured Work
    let myBtnWork = document.querySelector(".myBtnWork"),
        workPos = document.querySelector("#work");

    myBtnWork.addEventListener("click", () => {
        workPos.scrollIntoView({
            behavior: "smooth"
        });
    });


    // Trigger Go To Top And Status
    window.onscroll = () => {
        goTop();
        status();
    };

    // Status
    let nums = document.querySelectorAll(".status .media .media-body .num"),
        statusSection = document.querySelector(".status"),
        started = false;

    function status() {
        if (window.scrollY >= statusSection.offsetTop - 450) {
            if (!started) {
                nums.forEach((num) => { startCount(num) });
            }
            started = true;
        }
    }
    function startCount(ele) {
        let goal = ele.dataset.goal,
            count = setInterval(() => {
                ele.textContent++;
                if (ele.textContent === goal) {
                    clearInterval(count);
                }
            }, 3000 / goal);
    }

    // Go To Top
    let goToTop = document.querySelector(".go-top");
    (window.scrollY >= 250) ? goToTop.style.display = "block" : goToTop.style.display = "none"
    function goTop() {
        (window.scrollY >= 250) ? goToTop.style.display = "block" : goToTop.style.display = "none"
    }

    goToTop.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};
