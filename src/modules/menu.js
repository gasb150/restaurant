export default function infoMenu(document) {
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu-main');
  const ul = document.createElement('div');
  const li1 = document.createElement('h2');
  const li2 = document.createElement('h2');
  const li3 = document.createElement('h2');


  li1.innerHTML = 'Breakfast';
  li2.innerHTML = 'Lunch';
  li3.innerHTML = 'Dinner';


  ul.setAttribute('class', 'menu');
  const p1 = document.createElement('h3');
  const p2 = document.createElement('h3');
  const p3 = document.createElement('h3');

  p1.innerHTML = 'We have incredibles breakfast';
  p2.innerHTML = 'We have incredibles lunchs';
  p3.innerHTML = 'We have incredibles dinners';

  const menu1 = document.createElement('div');
  menu1.setAttribute('id', 'menu1');
  const b1 = document.createElement('p');
  const b2 = document.createElement('p');
  const b3 = document.createElement('p');

  menu1.appendChild(p1);
  b1.innerHTML = 'Bread and eggs';
  b2.innerHTML = 'Arepa with eggs and cheese';
  b3.innerHTML = 'Ommelet';

  menu1.appendChild(b1);
  menu1.appendChild(b2);
  menu1.appendChild(b3);

  const menu2 = document.createElement('div');
  menu2.setAttribute('id', 'menu2');
  menu2.appendChild(p2);
  const ln1 = document.createElement('p');
  const ln2 = document.createElement('p');
  const ln3 = document.createElement('p');

  ln1.innerHTML = 'Soups';
  ln2.innerHTML = 'Chiken';
  ln3.innerHTML = 'Salad';
  menu2.appendChild(ln1);
  menu2.appendChild(ln2);
  menu2.appendChild(ln3);


  const menu3 = document.createElement('div');
  menu3.setAttribute('id', 'menu3');
  const d1 = document.createElement('p');
  const d2 = document.createElement('p');
  const d3 = document.createElement('p');

  menu3.appendChild(p3);
  d1.innerHTML = 'Spaguetti';
  d2.innerHTML = 'Pizza';
  d3.innerHTML = 'Chiken';

  menu3.appendChild(d1);
  menu3.appendChild(d2);
  menu3.appendChild(d3);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);


  ul.appendChild(menu1);
  ul.appendChild(menu2);
  ul.appendChild(menu3);

  menuContainer.appendChild(ul);
  return menuContainer;
}
