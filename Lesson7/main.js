function myAnimation(){
    var element = document.getElementById("myAnimation");
    var position = 0;
    var left = 0;
    var right = 0;
    var top = 0;
    var bottom = 0;

    var id = setInterval(action, 10);

    function action(){
        calculateCoordinates(left,right,top,bottom);

        if(top == 350 || right == 350 || left == 350 || bottom == 350) {
            clearInterval(id);
        }
        else if(top >= 100 && top <= 200) {
            top++;
            right++;
            element.style.top = top + 'px';
            element.style.right = right + 'px';
        }
        else {
            top++;
            left++;
            element.style.top = top + 'px';
            element.style.left = left + 'px';
        }
    }

    function calculateCoordinates(left,right,top,bottom) {
        left = Number(element.style.top.replace("px",""));
        right = Number(element.style.top.replace("px",""));
        top = Number(element.style.top.replace("px",""));
        bottom = Number(element.style.top.replace("px",""));
    }


}