export default function infoHome(document) {
    let divContent = document.createElement('div');
    divContent.setAttribute('class', 'home-main')
    let divSubContent = document.createElement('div')
    divSubContent.setAttribute('class', 'home-container')
    let title = document.createElement('h1');
    
    title.innerHTML = "RESTAURANT"
    divSubContent.appendChild(title)

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Enjoy our food'
    divSubContent.appendChild(paragraph)

    divContent.appendChild(divSubContent)

    return divContent
   
}