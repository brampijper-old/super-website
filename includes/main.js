$ ("document").ready(function () {
    $('.sidenav').sidenav();
        $('.scrollspy').scrollSpy();

    $(document).on('scroll', function() {
        if($(this).scrollTop()>=$('.skill-panel').innerHeight()){
            jQuery('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },4500);
            });
        }
    })
}); 

//Shows the animation in the about me section for extra information. 
var $mainButton = $(".main-button"),
    $closeButton = $(".close-button"),
    $buttonWrapper = $(".button-wrapper"),
    $layer = $(".layered-content");

    $layer.hide()

    $mainButton.on("click", function(){
        $buttonWrapper.addClass("clicked")
         setTimeout(function() {$layer.addClass("active"); }, 1500)
         setTimeout(function() {$layer.show()}, 1500)
    });

    $closeButton.on("click", function(){
        $buttonWrapper.removeClass("clicked");;
        $layer.hide(); 
    });

//initializing google maps with a custom design
function initMap() {

    var styledMapType = new google.maps.StyledMapType(

    [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
    {name: 'Styled Map'});
    
    var home = {lat: 53.2194, lng: 6.5665};
    var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        zoom: 6,
        scrollwheel:  false,
        center: home
    });
    var marker = new google.maps.Marker({
        position: home,
        map: map
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map'); 
}

