import restauran from './restaurant.jpg';
import './style.css';
const print = () => {

    function pageLoad() {

        window.addEventListener('load', () =>{
            //alert('hashashas')
            let content = document.getElementById('content')
            let title = document.createElement('h1')
            
            title.innerHTML = "RESTAURANT :D"
            content.appendChild(title)

            let paragraph = document.createElement('p')
            paragraph.innerHTML = 'lorem26'
            content.appendChild(paragraph)
            
            const images = new Image();
            images.src = restauran
            
            content.appendChild(images);
            // content.innerHTML = 'asasas'
        }); 
    };
    return{
        pageLoad
    }

}

export default print()