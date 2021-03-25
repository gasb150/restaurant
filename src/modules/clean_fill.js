const clefill = ( () => {
    const clear = (document) => {
        
        const info = document.getElementById('dividi');
        
        info.innerHTML ='';
        
    }

    const fill = (document, info) => { 
    clear (document);
    const content = document.getElementById('content')
    const fillInfo = document.getElementById('dividi');
    
    
   
        fillInfo.appendChild(info);
        content.appendChild(fillInfo);
    
}
    return{
    clear,
    fill
}
})();
export default clefill