
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
tads = $$('.header__sort-item');

const tabActive = $('.header__sort-item.active')

const line = $('.line')

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tads.forEach(tab => 
{
    tab.onclick = function () 
    {
        $(".header__sort-item.active").classList.remove('active')

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active') 

    }
});


