window.setTimeout(function() {
    $(".alert").fadeTo(1500, 10).slideUp(1500, function(){
        $(this).remove(); 
    });
}, 4000);