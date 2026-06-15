/* ==========================================
   SOUMIE CONSTRUCTION COMPANY
   MAIN JAVASCRIPT FILE
========================================== */

/* =========================
   PAGE LOADER
========================= */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});


/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* =========================
   CLOSE MENU ON CLICK
========================= */
document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* =========================
   STICKY NAVBAR
========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/* =========================
   BACK TO TOP BUTTON
========================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   ANIMATED COUNTERS
========================= */
const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};


let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight &&
        !counterStarted
    ) {

        counterStarted = true;
        startCounter();

    }

});


/* =========================
   SCROLL ANIMATION
========================= */
const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .team-card, .testimonial-card, .why-card"
);

animatedElements.forEach(element => {
    element.classList.add("fade-in");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);

animatedElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }

            alert(
                "Thank you for contacting Soumie Construction Company. We will get back to you shortly."
            );

            contactForm.reset();

        }
    );

}


/* =========================
   ACTIVE NAV LINK
========================= */
const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =========================
   HERO PARALLAX EFFECT
========================= */
window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    let offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.5 + "px";

});


/* =========================
   CONSOLE MESSAGE
========================= */
console.log(
    "Soumie Construction Company Website Loaded Successfully."
);
