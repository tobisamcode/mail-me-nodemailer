const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  async function postData() {
    let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    };

    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${reponse.status}`);
    }
    alert("Email sent successfully");
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";

    console.log(formData);
  }
  postData();
});
