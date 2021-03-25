
 import tabListener from './tabListener'
export default function tabbing(element){
    

         let tabs = document.createElement('div');
         tabs.setAttribute('class','tabbler');
         
         element.appendChild(tabs);

         let homeButton = document.createElement('button');
         homeButton.setAttribute('class', 'tabs')
          homeButton.setAttribute('id', 'home')
         homeButton.innerHTML = "Tab One"

         tabs.appendChild(homeButton)

        
        let contactButton = document.createElement('button');
        contactButton.setAttribute('class', 'tabs')
         contactButton.setAttribute('id', 'contact')
        contactButton.innerHTML = "Tab two"

        tabs.appendChild(contactButton);

        let menuButton = document.createElement('button');
        menuButton.setAttribute('class', 'tabs')
         menuButton.setAttribute('id', 'menu')
        menuButton.innerHTML = "Tab three"

        tabs.appendChild(menuButton);    
        
        const info = document.createElement('div')
        info.setAttribute('id', 'dividi')
        tabs.appendChild(info)
        
        tabListener.tabListener(document, content)
        
       
}



