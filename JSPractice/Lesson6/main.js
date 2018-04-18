var modal = document.getElementById("myModalWindow");
var btn = document.getElementById("myBtn");
var eksClose = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

eksClose.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}