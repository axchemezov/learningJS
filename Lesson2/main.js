
window.onload = function() {
    selectedFruits();
};

function selectedFruits(){
    var fruitIndex = document.getElementById('fruitList').selectedIndex;
    var fruitList = document.getElementById('fruitList').options;
    var selectedFruitName = fruitList[fruitIndex].text;

    // Разблокируем элемент выбранный, остальные блокируем
    for (i=0;i<fruitList.length;i++) {
        var currentFruitName = fruitList[i].text;
        var fruitImage = document.getElementById(currentFruitName);
        if(currentFruitName == selectedFruitName) {
            fruitImage.style = "display: block;";
        }
        else {
            fruitImage.style = "display: none;";
        }

    }
}

function changeImgScale() {
    var rangeScale = document.getElementById('scale');
    var divImg = document.getElementById('picture');
    divImg.style.width = 300 * (rangeScale.value/100) + 'px';
    divImg.style.height = 300 * (rangeScale.value/100) + 'px';
}