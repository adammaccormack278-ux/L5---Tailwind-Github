type Operator = {
  name: string;
  role: string;
  motto: string;
};

fetch('r6data.json')
  .then((response) => response.json())
  .then((data: Operator[]) => {
    const list = document.querySelector('#r6-list');

    if (!list) {
      return;
    }

    data.forEach((operator) => {
      const card = document.createElement('div');
      card.className = 'card';

      const name = document.createElement('h2');
      name.className = 'name';
      name.textContent = operator.name;

      const role = document.createElement('p');
      role.className = 'role';
      role.textContent = 'Role: ' + operator.role;

      const motto = document.createElement('p');
      motto.className = 'motto';
      motto.textContent = 'Motto: ' + operator.motto;

      card.appendChild(name);
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

    list.innerHTML = '<p class="error">Could not load operator data.</p>';
    console.error(error);
  });
