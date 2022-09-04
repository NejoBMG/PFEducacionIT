function ajax(url,metodo){
    let httpMethod = metodo || "GET";
    let xhr = new XMLHttpRequest;
    xhr.open(httpMethod,url);
    xhr.send()
    return xhr
}
let links = document.querySelectorAll('.module-selector');
let article = document.getElementById('articleBlog');

links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        let id = e.target.id;
        let archivo = id + '.html';
        let xhr = ajax(archivo);
        xhr.addEventListener('load',()=>{
            if (xhr.status === 200){
                article.innerHTML=xhr.response;
            }
        })
    })
})
let homePage = ajax('home.html');
homePage.addEventListener('load',()=>{
    if (homePage.status === 200){
        article.innerHTML=homePage.response;
    }
})

function openMainMenu(){
    let btn = document.querySelectorAll(".btn_open");
    const mainMenu = document.getElementById('mainMenu');
    const asideMenu = document.getElementById('asideMenu');
    let asideBtn = document.querySelectorAll('.category-aside-icon');
    const asideIconOpen = document.querySelectorAll('.iconOption');
    const userIcon = document.getElementById('headerMenuUser');
    const userLog = document.getElementById('userLog')
    const iconOptionHeader = document.querySelectorAll('.icon-option-header')

    btn.forEach(element => {
        element.addEventListener('click',()=>{
            mainMenu.removeAttribute('style')
            mainMenu.classList.toggle('menu-closed');
            mainMenu.classList.toggle('menu-open');
            iconOptionHeader.forEach((element)=>{
                element.classList.toggle('headerIconMenuOn');
            })
        })
    });
    asideBtn.forEach(element => {
        element.addEventListener('click',()=>{
            asideMenu.removeAttribute('style');
            asideMenu.classList.toggle('aside-closed');
            asideMenu.classList.toggle('aside-open');
            asideIconOpen.forEach((element)=>{
                element.classList.toggle('asideIconOption');
            })
        })
    });
        userIcon.addEventListener('click',()=>{
            userLog.removeAttribute('style');
            userLog.classList.toggle('user-closed');
            userLog.classList.toggle('user-open');
        });

    if (window.innerWidth <= 840){
        mainMenu.setAttribute('style','right:1000px !important');
        mainMenu.classList.toggle('menu-closed');
        asideMenu.setAttribute('style','top:-1000px !important');
        asideMenu.classList.toggle('aside-closed');
        userLog.setAttribute('style','left: 1000px !important;');
        userLog.classList.toggle('user-closed');
    }
}
openMainMenu()
