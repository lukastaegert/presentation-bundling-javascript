Reveal.addEventListener('fragmentshown', function(event) {
    var index = +/data-fragment-index="(\d+)"/.exec(event.fragment.outerHTML)[1],
        present = document.querySelectorAll('section.present');
    present[present.length - 1].classList.add('fragment-' + index);
});
Reveal.addEventListener('fragmenthidden', function(event) {
    var index = +/data-fragment-index="(\d+)"/.exec(event.fragment.outerHTML)[1],
        present = document.querySelectorAll('section.present');
    present[present.length - 1].classList.remove('fragment-' + index);
});
