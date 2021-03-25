import infoMenu from './menu'
import infoHome from './home'
import infoContact from './contact'
import clefill from './clean_fill'

const tabListener =( (document) => {


    const tabListener = (document, content) => {
        let info =infoHome(document)
         clefill.fill(document, info)
         
         
            const home = document.getElementById('home')
             const menu = document.getElementById('menu')
             const contact = document.getElementById('contact')
             
             document.addEventListener('click', (e) =>{
                let this_target = e.target;
               
                do {
                    if (this_target === contact) {
                         info =infoContact(document)
                         
                    }else if (this_target === menu) {
                         info = infoMenu(document)
                    } else if (this_target === home) {
                         info =infoHome(document)
                        
                    }
                    clefill.fill(document, info)
                    return;
            } while (this_target);
            clefill.clear(document,content)
            
                     
             });
            }

    return {
        tabListener
    }
    
})();



export default tabListener