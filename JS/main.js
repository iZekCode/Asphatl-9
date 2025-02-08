window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var limit = document.getElementById('limit');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= limit.offsetTop - 220) {
        navbar.classList.add('black-bg');
    } else {
        navbar.classList.remove('black-bg');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscription-form");
    const popup = document.getElementById("submission-popup");

    if (localStorage.getItem("subscriptionSubmitted") === "true") {
        popup.classList.remove("hidden");
        setTimeout(function() {
            popup.classList.add("hidden");
            localStorage.removeItem("subscriptionSubmitted");
        }, 3000);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const dob = document.getElementById("dob");
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const dobError = document.getElementById("dob-error");
        const genderError = document.getElementById("gender-error");
        const termsError = document.getElementById("terms-error");

        nameError.textContent = "";
        emailError.textContent = "";
        dobError.textContent = "";
        genderError.textContent = "";
        termsError.textContent = "";

        let valid = true;

        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!isValidEmail(email.value.trim())) {
            emailError.textContent = "Email must ends with \'@gmail.com\'.";
            valid = false;
        }

        if (dob.value.trim() === "") {
            dobError.textContent = "Date of Birth is required.";
            valid = false;
        }

        if (!gender) {
            genderError.textContent = "Please select a gender.";
            valid = false;
        }

        if (!terms.checked) {
            termsError.textContent = "You must agree to the terms and conditions.";
            valid = false;
        }

        if (!valid) {
            return;
        }

        localStorage.setItem("subscriptionSubmitted", "true");

        popup.classList.remove("hidden");

        name.value = "";
        email.value = "";
        dob.value = "";
        gender.checked = false;
        terms.checked = false;

        setTimeout(function() {
            popup.classList.add("hidden");
            localStorage.removeItem("subscriptionSubmitted");
        }, 3000);

    });

    function isValidEmail(email) {
        return email.endsWith("@gmail.com");
    }
});

function openNav() {
    document.getElementById("links").style.width = "250px";
}
        
function closeNav() {
    document.getElementById("links").style.width = "0";
}