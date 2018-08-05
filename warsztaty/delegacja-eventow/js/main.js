document.addEventListener('click', function(event){
    if (event.target.tagName != 'BUTTON') {
        return;
        //jesli cos nie jest BUTTONem, zatrzymaj funkcje returnem
    }
    console.log(event.target.innerHTML);
    
})
                          