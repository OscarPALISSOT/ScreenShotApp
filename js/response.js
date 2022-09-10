
let links = document.getElementsByClassName('driveLinks');

response.querySelector('.responseBtn').addEventListener('click', e => {
    loading.style.display = 'flex';
    response.style.display = 'none';
    for (let i = 0; i < urls.length; i++){
        urls[i].value = '';
    }
    form.style.display = 'flex';
})