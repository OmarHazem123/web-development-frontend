// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});
