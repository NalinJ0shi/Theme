var selector ='.menu';   
      
$('.menu').on('click', function() {
    var $self = $(this);
    $self.hasClass('active') ? $self.removeClass('active').addClass('remove') : $self.removeClass('remove').addClass('active');
});

function red(){
    document.body.style.backgroundColor = "#ff2972";
}
function yellow(){
    document.body.style.backgroundColor = "#e2ff29";
}
function purple(){
    document.body.style.backgroundColor = "#6929ff";
}
function blue(){
    document.body.style.backgroundColor = "#29bbff";
}
function green(){
    document.body.style.backgroundColor = "#29ff89";
}
function pink(){
    document.body.style.backgroundColor = "#d129ff";
}
function voilet(){
    document.body.style.backgroundColor = "#7029ff";
}


