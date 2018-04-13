var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabContent(1);
}

function hideTabContent(tabNumber){
    for (var i=tabNumber;i<tabContent.length;i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i=0; i<tab.length; i++) {
            if(target == tab[i]) {
                showTabContent(i);
                break;
            }
        }
    }
}

function showTabContent(tabNumber) {
    if (tabContent[tabNumber].classList.contains('hide')) {
        hideTabContent(0);
        tab[tabNumber].classList.add('whiteborder');
        tabContent[tabNumber].classList.remove('hide');
        tabContent[tabNumber].classList.add('show');
    }
}