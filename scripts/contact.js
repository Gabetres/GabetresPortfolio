/* EmailJS */

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "55crvCQ2I0_nPLvBO";
const serviceID = "service_632yjdl";
const templateID = "template_00q9aj7";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    submitBtn.innerText = "Just a moment...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.innerText = "Mensage sent sucessfully";

            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {
            submitBtn.innerText = "Something went wrong";
        });
});

  