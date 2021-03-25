export default function infoMenu (document) {
    
    let  ul = document.createElement('ul')
    let  li1 = document.createElement('li')
    let  li2 = document.createElement('li')
    let  li3 = document.createElement('li')
    let li4 = document.createElement('li')

    li1.innerHTML = "Home"
    li2.innerHTML = "Contact"
    li3.innerHTML = "Where we are"
    li4.innerHTML = "Work with us"
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   ul.appendChild(li4)
   
return ul
}

