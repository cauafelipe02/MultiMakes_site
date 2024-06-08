window.addEventListener("scroll", function(e) {
    let header = document.querySelector('#header');
    header.classList.toggle('diminui', window.scrollY > 150);
})