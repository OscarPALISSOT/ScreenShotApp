

response.addEventListener('click', e => {
    response.style.display = 'none';
    for (let i = 0; i < urls.length; i++){
        urls[i].value = '';
    }
    form.style.display = 'flex';
})