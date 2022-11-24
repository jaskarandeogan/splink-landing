console.log('Hello World2');

const button = document.getElementById('hamburger_button');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    console.log('clicked');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // menu.velocity('transition.slideDownIn', { duration: 300 }); 
    } else {
        menu.classList.add('hidden');
        // menu.velocity('transition.slideDownIn', { duration: 300, easing: 'ease-in-out' });
    }
});