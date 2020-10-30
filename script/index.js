
const filterBox = document.querySelectorAll('.box');
const tabContent = document.querySelectorAll('.tab');

document.querySelector('nav').addEventListener('click', (event) => {
        
    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];




    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});




let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
    

};

tab();


let cells = document.querySelectorAll('.no-active');
let pp = document.getElementById('arrow-next');

for(let i=0; i<cells.length;i++){
    cells[i].addEventListener('click', selectDate);
}

function selectDate(){
    pp.classList.add('hide');
}

let cell = document.querySelectorAll('.po');


for(let i=0; i<cells.length;i++){
    cell[i].addEventListener('click', selectDat);
}

function selectDat(){
    pp.classList.remove('hide');
}

