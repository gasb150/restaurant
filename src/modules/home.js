export default function infoHome(document) {
  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'home-main');
  const divSubContent = document.createElement('div');
  divSubContent.setAttribute('class', 'home-container');
  const title = document.createElement('h1');

  title.innerHTML = 'RESTAURANT';
  divSubContent.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Enjoy our food';
  divSubContent.appendChild(paragraph);

  divContent.appendChild(divSubContent);

  return divContent;
}