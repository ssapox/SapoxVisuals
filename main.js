function dark_theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

changeImage = function() {
    var image = document.getElementById('toggleImage');
    var url1 = './images/oui.jpg';
    var url2 = './images/non.jpg';
    
    if (image.getAttribute('src')==url1) {
       image.setAttribute('src', url2);
    } else {
       image.setAttribute('src', url1);
    }
 }
