//menu hamburguer para telas menores
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

// Envio de formulário via emailjs
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("7OgtAzG8UXh-sFZ-R");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Validação básica
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !phone || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Enviar dados via EmailJS
      emailjs
        .send("service_dvf1m3f", "template_6v8x1dc", {
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then(
          function (response) {
            alert("Mensagem enviada com sucesso!");
            // Resetar o formulário
            document.getElementById("contact-form").reset();
          },
          function (error) {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.log("Erro:", error);
          }
        );
    });
});

// seção depoimentos com mensagens geradas por API
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");

const testimonials = [
  {
    name: "Jéssica",
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
    text: '"A melhor academia da região, instrutores dedicados prontos para ajudar."',
  },
  {
    name: "Paulo Silva",
    photo: "https://randomuser.me/api/portraits/men/53.jpg",
    text: '"Quando cheguei aqui na academia já me senti acolhido, excelentes profissionais" ',
  },
  {
    name: "Marcia Soares",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: '"Equipamentos novos, monitoriamento de progresso e a equipe são grandes atrativos que me fizeram decidir treinar aqui"',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);
