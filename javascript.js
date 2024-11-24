// وظيفة العودة إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // الانتقال بسلاسة
    });
}

// إظهار الزر عند التمرير
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 200) { // يظهر عند النزول 200 بكسل
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
