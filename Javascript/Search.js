let search=document.querySelector('#searchInput');
let btn=document.querySelector('#submit');

btn.onclick=function()
{
    let url='https://www.google.com/search?q=' + search.value;
    window.open(url,'_self');
}