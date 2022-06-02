// Подія кліку - прокрутка вгору
const btnToUp = document.querySelector('.to-top');
btnToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Подія скролу
const btnScroll = document.querySelector('.to-top');
window.onscroll = () => {
  //Якщо прокручено більше 700, кнопка з'являється
  if(window.scrollY > 700){
    btnScroll.classList.remove('to-top--hide');
    //Якщо прокручено менше 700, кнопка зникає
  } else if(window.scrollY < 700){
    btnScroll.classList.add('to-top--hide');
  }
}

const formList = document.querySelectorAll('.form__contact, .registration-form');
const popUp = document.querySelector('.pop-up');
// Сворюємо подію кліку для кожної форми
formList.forEach(formItem => {
  formItem.addEventListener('submit', (event) => {
    // Відміняємо сабміт форми
    event.preventDefault();

    checkInputEmpty(formItem);
    
    // Через 2 секунди ховаємо pop-up
    setTimeout(
      () => {
        popUp.classList.add('pop-up--hide')
        popUp.classList.remove('pop-up--error')
      }, 2000
    );
  });
});

// Функція перевірки відправленої форми і первірки інпутів на пустоту
function checkInputEmpty(formItem){
  let text = '';
  let notEmptyInputCounter = 0;
  // Тут ми визначаємо яка форма була відправлена
  formItem.querySelectorAll('input').forEach(input => {
    notEmptyInputCounter += (input.value != '') ? 1 : 0;
    input.value = '';
  });

  if(formItem.classList[0] === 'form__contact' && notEmptyInputCounter == 2){
    text = 'Your question has been sent!';
  } else if(formItem.classList[0] === 'registration-form' && notEmptyInputCounter == 3) {
    text = formItem.querySelector('input[type="text"]').value + ', you are registered!';
  } else {
    text = 'Please fill out all fields!';
    popUp.classList.add('pop-up--error');
  }

  // Показуємо pop-up в залежності від відправленої форми
  popUp.innerHTML = text;
  popUp.classList.remove('pop-up--hide');
}
