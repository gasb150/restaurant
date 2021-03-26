
import tabListener from './tabListener';

export default function tabbing(element) {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'nav-bar');
  const tabs = document.createElement('div');
  tabs.setAttribute('class', 'tabbler');

  element.appendChild(tabs);

  const homeButton = document.createElement('button');
  homeButton.setAttribute('class', 'tabs');
  homeButton.setAttribute('id', 'home');
  homeButton.innerHTML = 'Home';

  tabs.appendChild(homeButton);


  const menuButton = document.createElement('button');
  menuButton.setAttribute('class', 'tabs');
  menuButton.setAttribute('id', 'menu');
  menuButton.innerHTML = 'Menu';

  tabs.appendChild(menuButton);

  const contactButton = document.createElement('button');
  contactButton.setAttribute('class', 'tabs');
  contactButton.setAttribute('id', 'contact');
  contactButton.innerHTML = 'Contact';

  tabs.appendChild(contactButton);

  const info = document.createElement('div');
  info.setAttribute('id', 'dividi');
  tabs.appendChild(info);

  nav.appendChild(tabs);
  element.appendChild(nav);

  tabListener.tabListener(document, element);
}
