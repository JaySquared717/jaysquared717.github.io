const enterButton = document.getElementById('enter-btn');
const smokeEffect = document.getElementById('smoke-effect');

enterButton.addEventListener('click', () => {
  smokeEffect.style.pointerEvents = 'auto';
  smokeEffect.style.animation = 'smokeAnimation 5s ease-in-out forwards';

  setTimeout(() => {
    window.location.href = 'port-home.html';
  }, 5000); // Adjust the delay time (in milliseconds) based on your animation duration
});
