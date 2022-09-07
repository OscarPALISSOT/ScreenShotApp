
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
    $('.container').html('test');
    let formData = new FormData(form)
    console.log(formData);
    $.ajax({
        url: form.getAttribute('action'),
        type: form.getAttribute('method'),
        processData: false,
        contentType: false,
        data: formData,
        success: function(data, status)
        {
            console.log(data)
            let html = data.content;

            $('.container').html('fini');
        },
        error: function (xhr, ajaxOptions, thrownError)
        {
            $('.loading').html(null);
            $('#ajax-modal').html('Error: ' + xhr.status);
            console.log(thrownError);
        }
    })
})
