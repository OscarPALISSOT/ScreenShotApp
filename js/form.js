
const urls = document.getElementsByClassName('urlInput');
const form = document.querySelector('form');

document.getElementsByClassName('submitUrls');


form.addEventListener( 'submit', e => {
    e.preventDefault();
    let missingUrl = false;
    for (let i = 0; i < urls.length; i++){
        if ( urls[i].value === ''){
            missingUrl = true;
        }
    }
    if (missingUrl){
        alert('Please, fill all the URLs.');
        return;
    }
    alert('submit')
})
