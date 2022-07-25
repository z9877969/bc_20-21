const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

document.querySelectorAll('.section').forEach(el => {
  el.style.backgroundColor = `#${randomColor()}`;
});

const targetSecEl = document.querySelector('.target-section');

const options = {
  root: null,
  // rootMargin: '0px 0px 200px 0px',
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log('Hello!');
    observer.unobserve(targetSecEl);
  });
}, options);

observer.observe(targetSecEl);
