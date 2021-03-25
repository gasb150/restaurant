export default function infoHome(document) {
    let divContent = document.createElement('conteiner');
    let title = document.createElement('h1');
    
    title.innerHTML = "RESTAURANT :D"
    divContent.appendChild(title)

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'lorem26'
    divContent.appendChild(paragraph)

    return divContent
   
}