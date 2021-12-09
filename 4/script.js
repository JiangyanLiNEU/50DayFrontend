const btn = document.querySelector('.btn')

const ele = document.querySelector('.search');

btn.addEventListener('click', () => {
    if (ele.classList.contains('active')) {
        ele.classList.remove('active')
    } else {
        ele.classList.add('active')
    }
})