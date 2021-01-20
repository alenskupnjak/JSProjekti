// Pitanja 1 using selectors inside the element
const btn = document.querySelectorAll('.faq-toggle');

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // nekoliko opcija 
    console.log(e.target.parentElement.parentElement);
    console.log(e.target.parentNode.parentNode);
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.parentElement);

    // parentNode je bolja opcija
    console.log(btn.parentNode);
    btn.parentNode.classList.toggle('active');
  });
});

// *************************************************
// Pitanja 2 using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});
