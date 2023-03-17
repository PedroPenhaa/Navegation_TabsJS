const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabPane = document.querySelectorAll('.js-tab-pane');

//Transition Btns
navTabs.forEach((nav, index) => {
    nav.addEventListener('click', (event) =>{
        event.preventDefault();

//Percorre e remove a classe ativa de todos 
        navTabs.forEach(itemNav => {
            itemNav.classList.remove('active')
        })
        tabPane.forEach(tab => {
            tab.classList.remove('active')
        })

//Aciona a classe ativa no elemento selecionado        
        nav.classList.add('active');
        tabPane[index].classList.add('active');
    })
})
