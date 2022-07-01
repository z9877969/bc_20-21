import heroes from '../json/heroes.json';
import heroesTmp from '../templates/heroes.hbs';

// const dates = [
//   {
//     date: '1-07-22',
//     days: ['Mn', 'Tu', 'Wd'],
//   },
//   {
//     date: '2-07-22',
//     days: ['Mn', 'Tu', 'Wd'],
//   },
//   {
//     date: '3-07-22',
//     days: ['Mn', 'Tu', 'Wd'],
//   },
// ];

const heroesListEl = document.querySelector('.js-heroes-list');

heroesListEl.innerHTML = heroesTmp(heroes);
// heroesListEl.innerHTML = heroesTmp(dates);

/*
<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
</li>
*/
