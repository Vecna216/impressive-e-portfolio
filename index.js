// template_akkqgob

// service_q5iaj4s

// 9-3Qg7pNV4Ta0w_98

function contact(event) {
  event.preventDefault();
  // emailjs
  //   .sendForm(
  //     'service_q5iaj4s',
  //     'template_akkqgob',
  //     event.target,
  //     '9-3Qg7pNV4Ta0w_98'
  // ).then(() => {
  //   console.log('this worked')
  // })
  const loading = document.querySelector('modal__overlay--loading');
  const success = document.querySelector('modal__overlay--success');
  loading.classList += " modal__overlay--visible"
  setTimeout(() => {
    console.log('it worked 1')
  },500);
}