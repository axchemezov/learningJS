document.getElementById('navigation').onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className == 'menu-item') {
        var submenu = target.getElementsByClassName('submenu');
        closeMenu();
        submenu[0].style.display = 'block';
    }
}

document.onmouseover = function (event) {
    var target = event.target;
    console.log('Target: '+ event.target);
    console.log('className: '+ target.type);
    if (target.className != 'menu-item'
        && target.className != 'submenu'
        && target.className != 'submenu-link') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('navigation');
    var submenu = document.getElementsByClassName('submenu');

    for (var i = 0; i < submenu.length; i++) {
        var OpenSubmenu = submenu[i];
        OpenSubmenu.style.display = 'none';
    }
}

