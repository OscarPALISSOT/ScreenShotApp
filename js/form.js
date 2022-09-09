
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
        alert('Please, fill all the URLs.');
        return;
    }
    let formData = $(form).serializeArray();
    $.ajax({
        url: form.getAttribute('action'),
        type: form.getAttribute('method'),
        data : formData,
        dataType : 'json',
        success: function(data, status)
        {
            let html = '<a href="' + data[0] + '">' + data[0] +'</a><a href="' + data[1] + '">' + data[1] +'</a><a href="' + data[2] + '">' + data[2] +'</a><a href="' + data[3] + '">' + data[3] +'</a><a href="' + data[4] + '">' + data[4] +'</a>';

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

