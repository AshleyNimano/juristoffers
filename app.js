const logo = document.querySelector('#logo');

logo.classList.toggle('reverse-animation');

for(let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const hireMeBtn = document.getElementById('hireMe');
const emailDiv = document.querySelector('.email');

hireMeBtn.addEventListener('click', () => {
  emailDiv.classList.toggle('active');
});
