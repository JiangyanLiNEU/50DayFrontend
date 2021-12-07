// all we need to do is to change the elements' classes;

const panels = document.querySelectorAll('.panel'); // => return a NodeList

const removeActive = () => {
    panels.forEach(p => {
        p.classList.remove('active');
    });
};

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add('active');
    });
})