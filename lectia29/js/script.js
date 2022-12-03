'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    heart = document.querySelector('.heart');

box.style.backgroundColor = 'gray';
box.style.cssText = 'border-radius: 50%;';
btns[1].style.border = '2px solid red';
circles[2].style.backgroundColor = 'green';
hearts[1].style.backgroundColor = 'green';
heart.style.backgroundColor = 'pink';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
}); 

const div = document.createElement('div');
// const text = document.createTextNode('There was me');

div.classList.add('black');

document.body.append(div);