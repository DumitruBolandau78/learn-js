'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    heart = wrapper.querySelector('.heart');


box.style.backgroundColor = 'gray';
box.style.cssText = 'border-radius: 50%;';
btns[1].style.border = '2px solid red';
circles[2].style.backgroundColor = 'green';
hearts[1].style.backgroundColor = 'green';
heart.style.backgroundColor = 'pink';

// for (let i = 0; i <h1 hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
}); 

const div = document.createElement('div');
// const text = document.createTextNode('There was me');

div.classList.add('black');

document.body.append(div);

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[2]);

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello'; //doar text

div.insertAdjacentHTML('beforebegin', '<h2>Buna</h2>');
