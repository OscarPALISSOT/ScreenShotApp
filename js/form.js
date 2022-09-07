
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
        //alert('Please, fill all the URLs.');
        //return;
    }
    let formData = $(form).serializeArray();
    $.ajax({
        url: form.getAttribute('action'),
        type: form.getAttribute('method'),
        data : { 'url1' : 'https://stackoverflow.com/'},
        success: function(data, status)
        {
            console.log(data)
            let html = data.content;

        },
        error: function (xhr, ajaxOptions, thrownError)
        {
            $('.container').html('Error: ' + xhr.status);
            console.log(thrownError);
        }
    })
})

