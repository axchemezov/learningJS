// ВОПРОС 1
var answer1, answer2, answer3, answer4, btn;

answer1=document.getElementById('answer1');
answer2=document.getElementById('answer2');
answer3=document.getElementById('answer3');
answer4=document.getElementById('answer4');

btn=document.getElementById('btn');
btn.addEventListener('click', checkresult);

function checkresult() {

    if(answer1.checked && answer2.checked && !answer3.checked && !answer4.checked) {
        alert('Right answer');
    }
    else {
        alert('Wrong answer')
    }
}

// ВОПРОС 2
 var btn2;

btn2=document.getElementById('btn2');
btn2.addEventListener('click', checkresult2);

function checkresult2() {
    var answerRadio=document.getElementsByName('question2');

    for (var i=0; i<answerRadio.length; i++) {
        if(answerRadio[i].checked && i==0) {
            alert('Right answer');
            break;
        }
        else if(answerRadio[i].checked && i!=0) {
            alert('Wrong answer');
            break;
        }
        else {
            continue;
        }
    }
}

