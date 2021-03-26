import infoMenu from './menu';
import infoHome from './home';
import infoContact from './contact';
import clefill from './clean_fill';

const tabListener = (() => {
  const tabListener = (document) => {
    let info = infoHome(document);
    clefill.fill(document, info);


    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    document.addEventListener('click', (e) => {
      const thisTarget = e.target;


      do {
        if (thisTarget === contact) {
          info = infoContact(document);
        } else if (thisTarget === menu) {
          info = infoMenu(document);
        } else if (thisTarget === home) {
          info = infoHome(document);
        }
        clefill.fill(document, info);


        return;
      } while (thisTarget);
    });
  };

  return {
    tabListener,
  };
})();


export default tabListener;