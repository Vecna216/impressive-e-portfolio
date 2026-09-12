// template_akkqgob

// service_q5iaj4s

// 9-3Qg7pNV4Ta0w_98
let isModalOpen = false;
let contrastToggle = false


function toggleContract() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme") 
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";


  emailjs
    .sendForm(
      'service_q5iaj4s',
      'template_akkqgob',
      event.target,
      '9-3Qg7pNV4Ta0w_98'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly at vecna0216@gmail.com"
    )
  })
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}
