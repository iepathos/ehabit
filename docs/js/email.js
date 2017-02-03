
$('#contact_form').on('submit', function(e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    var subject = $('#subject').val();
    var body = $('#message').val();
    window.open('mailto:glen@ehab.it?subject='+subject+'&body='+body);
    $('#reset').click();
    $('#contact div.close').click();
});
