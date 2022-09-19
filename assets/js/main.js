$(document).ready(function(){
    $.fancybox.open({
        src: '.auth-form__wrapper',
        type: 'inline'
    });

    setTimeout(() => {
        showNextForm();
    }, 1000);
});

let $target = $('[data-stage-hidden]'),
$btn = $('[data-disabled-stage]');

$('[data-first-stage]').on('change', function(){
        hideNextForm();
});

function showNextForm(){
    $btn.addClass('_disabled');
    $target.fadeIn(300);
}
function hideNextForm(){
    $btn.removeClass('_disabled');
    $target.fadeOut(300);
}