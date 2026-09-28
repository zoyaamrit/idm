(function () {

    
    const works = document.querySelectorAll('.work');
    if (works.length) {
        // floating work label 
        const label = document.createElement('div');
        label.className = 'cursor-label';
        document.body.appendChild(label);

        works.forEach(function (link) {
            //event handler for click 
            link.addEventListener('mouseenter', function () {
                label.textContent = link.dataset.title || '';
                label.classList.add('visible');
        });

        link.addEventListener('mousemove', function (e) {
            // move label
            label.style.left = e.clientX + 14 + 'px';
            label.style.top = e.clientY + 14 + 'px';
        });
        
        link.addEventListener('mouseleave', function () {
            label.classList.remove('visible');
        });
        });
    }

    // get previous and next pages
    const prev = document.querySelector('[data-nav="prev"]');
    const next = document.querySelector('[data-nav="next"]');

    // move back/forward depending on click 
    if (prev || next) {
        document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' && prev) window.location.href = prev.href;
        if (e.key === 'ArrowRight' && next) window.location.href = next.href;
        if (e.key === 'Escape') window.location.href = 'index.html';
        });
    }
})();
