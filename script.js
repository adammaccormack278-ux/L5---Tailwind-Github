"use strict";
const yearElement = document.querySelector('#year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
}
fetch('r6data.json')
    .then((response) => response.json())
    .then((data) => {
    const list = document.querySelector('#r6-list');
    if (!list) {
        return;
    }
    data.forEach((operator) => {
        const card = document.createElement('div');
        card.className = 'rounded-lg border border-red-500 bg-slate-800 p-4';
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-red-300';
        title.textContent = operator.name;
        const role = document.createElement('p');
        role.className = 'mt-2 text-yellow-300';
        role.textContent = 'Role: ' + operator.role;
        const motto = document.createElement('p');
        motto.className = 'mt-2 text-slate-200';
        motto.textContent = 'Motto: ' + operator.motto;
        card.appendChild(title);
        card.appendChild(role);
        card.appendChild(motto);
        list.appendChild(card);
    });
})
    .catch((error) => {
    const list = document.querySelector('#r6-list');
    if (!list) {
        return;
    }
    list.innerHTML = '<p class="text-red-400">Could not load operator data.</p>';
    console.error(error);
});
