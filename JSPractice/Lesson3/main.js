function changeBlock() {
    var rangeUpLeft = document.getElementById('rangeUpLeft').value;
    var rangeUpRight = document.getElementById('rangeUpRight').value;
    var rangeDownLeft = document.getElementById('rangeDownLeft').value;
    var rangeDownRight = document.getElementById('rangeDownRight').value;

    var cssText = document.getElementById('cssText');

    var blockResult = document.getElementById('blockResult');

    cssText.value = '#blockResult {' +
        'border-radius:' + rangeUpLeft + 'px '
        + rangeUpRight + 'px ' + rangeDownRight + 'px ' + rangeDownLeft + 'px;' +
        '}';

    blockResult.style.borderRadius = rangeUpLeft + 'px '
        + rangeUpRight + 'px ' + rangeDownRight + 'px ' + rangeDownLeft + 'px';


}