const menuBtn = document.querySelector('.menu-btn'); /*vou no html e mapeo a class mencionada*/
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener('click', () => {
navBar.classList.toggle('active'); /*quando clicar, ele vai adicionar a classe active, e se clicar novamente, ele vai remover a classe active*/
}) /*adiciono um evento de click, e quando clicar, ele vai executar a função*/

navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active'); /*quando clicar em um link, ele vai remover a classe active, para fechar o menu*/
    })
})