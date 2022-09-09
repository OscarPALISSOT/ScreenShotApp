
const urls = document.getElementsByClassName('urlInput');
const form = document.querySelector('form');
const response = document.querySelector('.response');
const responseContainer = document.querySelector('.responseContainer');

document.getElementsByClassName('submitUrls');

form.addEventListener( 'submit', e => {
    form.style.display = 'none';
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
        data : formData,
        dataType : 'json',
        success: function(data, status)
        {
            console.log(data.content)
            let html = data.content;
            responseContainer.innerHTML = html;
            response.style.display = 'block';

        },
        error: function (xhr, ajaxOptions, thrownError)
        {
            $('.container').html('Error: ' + xhr.status);
            console.log(thrownError);
        }
    })
})

