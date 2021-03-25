// import restauran from './restaurant.jpg';
import '../reset.css'
import '../style.scss';
import tabs from './tabs'


const print = () => {

    function pageLoad() {

        window.addEventListener('load', () =>{
             let content = document.getElementById('content');
            
            
            tabs(content)
            
        }); 
    };

    
    
    return{
        pageLoad
    }

}

export default print()