import restauran from './restaurant.jpg'
import style from './style.css'
const print = () => {

    function pageLoad() {

        window.addEventListener('load', () =>{
            //alert('hashashas')
            let content = document.getElementById('content')
            let title = document.createElement('h1')
            let paragraph = document.createElement('p')
            title.innerHTML = "RESTAURANT :D"
            content.appendChild(title)
            paragraph.innerHTML = 'lorem26'
            content.appendChild(paragraph)
            // alert(content)
            // content.innerHTML = 'asasas'
        }); 
    };
    return{
        pageLoad
    }

}

export default print()