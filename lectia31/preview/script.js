const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     alert('Holla');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// btn.addEventListener('mouseenter', (e) => {   ///console.log(e); pt a veadea functiile ca exemplu e target
//     e.target.remove();
// });

const deleteElement = (e) => {
    e.target.remove();
}

addEventListener('click', deleteElement);
removeEventListener('click', deleteElement);