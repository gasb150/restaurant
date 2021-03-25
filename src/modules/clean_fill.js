const clefill = ( () => {
    const clear = (document) => {
        
        const info = document.getElementById('dividi');
        
        info.innerHTML ='';
        
    }

    const fill = (document, info) => { 
    clear (document);
    const fillInfo = document.getElementById('dividi');
    fillInfo.appendChild(info);
    }
    return{
    clear,
    fill
}
})();
export default clefill