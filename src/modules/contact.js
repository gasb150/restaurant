export default function infoContact(document) {
  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('class', 'contact-main');
  const contact = document.createElement('div');
  contact.setAttribute('class', 'contact');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const chard = document.createElement('div');
  chard.setAttribute('class', 'chard');

  title.innerHTML = 'Contact';
  text.innerHTML = 'If you want to talk us try with:';

  const info1 = document.createElement('h3');
  const text1 = document.createElement('p');
  text1.innerHTML = '+57 8223 234 123';
  info1.innerHTML = 'Phone';


  const info2 = document.createElement('h3');
  const text2 = document.createElement('p');
  text2.innerHTML = 'Cll 12 K232 Av 123';
  info2.innerHTML = 'Address';


  chard.appendChild(info1);
  chard.appendChild(text1);
  chard.appendChild(info2);
  chard.appendChild(text2);

  const info3 = document.createElement('h3');
  const text3 = document.createElement('p');
  text3.innerHTML = 'contact@email.com';
  info3.innerHTML = 'Email';
  chard.appendChild(info3);
  chard.appendChild(text3);


  contact.appendChild(title);
  contact.appendChild(text);
  contact.appendChild(chard);
  contactContainer.appendChild(contact);
  return contactContainer;
}