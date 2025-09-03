const title = document.getElementById('title');
const message = document.getElementById('message');

const phrases = [
  "Non sei solo.",
  "Sta iniziando.",
  "Il tempo non esiste più.",
  "La realtà si piega.",
  "Tocca ancora. Non fermarti.",
  "Ora sei dentro."
];

let index = 0;

document.body.addEventListener('onClick', () => {
  title.style.transform = `scale(${1 + Math.random() * 0.5}) rotate(${Math.random() * 20 - 10}deg)`;
  title.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  message.textContent = phrases[index % phrases.length];
  index++;
});
