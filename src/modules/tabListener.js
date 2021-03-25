import infoMenu from './menu'
import infoHome from './home'
const tabListener =( (document) => {

     const clear = (document) => {
         
         const info = document.getElementById('dividi')
        info.innerHTML =''
       
        
      };

    const fill = (document, id, info) => {
        
         clear (document, id)
        const fillInfo = document.getElementById('dividi')
        fillInfo.appendChild(info)
       
    }
    
        
    const tabListener = (document, content) => {
            
            console.log(document)
            const home = document.getElementById('home')
             const menu = document.getElementById('menu')
             const contact = document.getElementById('contact')
             
             document.addEventListener('click', (e) =>{
                let this_target = e.target;
               
                do {
                    if (this_target === contact) {
                        let info =infoContact(document)
                    fill(document, contact, info)
                    return;
                    }else if (this_target === menu) {
                        let info = infoMenu(document)
                    fill(document, menu, info)
                        return ;
                    } else if (this_target === home) {
                        let info =infoHome(document)
                        fill(document, home, info)
                        return;
                    }
                
                this_target = this_target.parentNode;
               
            } while (this_target);
            clear(document,content)
            
                     
             });
            }

    return {
        tabListener
    }
    
})();




const infoContact = (document) => {
    let contact = document.createElement('div');
    let title = document.createElement('h3')
    let text = document.createElement('p')

    title.innerHTML = 'Contact'
    text.innerHTML = 'sdihasiufhapiusdfhaisudbfipausdbf asdifubasdijf sd fasoid faishd fiahs dfh asdouf asoudf sid fajsh dfhjas dfouh asdof asidf asjid fuad udouas duof asdihf asuodhf uasdgfuasgdfioasdif asd fuasd fioasdbfisbdfouasbdfilas dfa so8dfbasidjf asd fasodfbsdfjbasidjfbaisdjbfiasdf asd9ufasdf asodif asi dfasudf iasudfijsdfu9is dfioausdbfas df8oasdf aisdfbas'

    contact.appendChild(title)
    contact.appendChild(text)
    return contact
}


export default tabListener