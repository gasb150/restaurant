const tabListener =( (document) => {

     const clear = (document,id) => {
         
        const info = document.getElementById('dividi')
       info.innerHTML =''
        id.appendChild(info)
        
     };

    const fill = (document, id, info) => {
        clear (document, id)
        const fillInfo = document.getElementById('dividi')
        fillInfo.setAttribute('class', "active")
        fillInfo.appendChild(info)
        
        id.appendChild(fillInfo)
    }
    
        
    const tabListener = (document) => {
            
            console.log(document)
            const home = document.getElementById('home')
             const menu = document.getElementById('menu')
             const contact = document.getElementById('contact')
             
             document.addEventListener('click', (e) =>{
                let target = e.target;
               
                do {
                    if (target === contact) {
                        let info =infoContact(document)
                    fill(document, contact, info)
                    return;
                    }else if (target === menu) {
                        let info = infoMenu(document)
                    fill(document, menu, info)
                        return ;
                    } else if (target === home) {
                        let info ="jasjas"
                        fill(document, home, info)
                        return;
                    }
                
                target = target.parentNode;
                
            } while (target);
            clear(document,contact)
            
                     
             });
            }

    return {
        tabListener
    }
    
})();


const infoMenu = (document) => {

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

const infoContact = (document) => {
    let divContact = document.createElement('div')
    let title = document.createElement('h3')
    let text = document.createElement('p')

    title.innerHTML = 'Contact'
    text.innerHTML = 'sdihasiufhapiusdfhaisudbfipausdbf asdifubasdijf sd fasoid faishd fiahs dfh asdouf asoudf sid fajsh dfhjas dfouh asdof asidf asjid fuad udouas duof asdihf asuodhf uasdgfuasgdfioasdif asd fuasd fioasdbfisbdfouasbdfilas dfa so8dfbasidjf asd fasodfbsdfjbasidjfbaisdjbfiasdf asd9ufasdf asodif asi dfasudf iasudfijsdfu9is dfioausdbfas df8oasdf aisdfbas'

    divContact.appendChild(title)
    divContact.appendChild(text)
    return divContact
}
export default tabListener