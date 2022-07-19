var possible = ['scissor', 'stone', 'paper']
var temp

function my_fun2() {

    temp = 'scissor'
}

function my_fun3() {
    temp = 'stone'
}

function my_fun4() {
    temp = 'paper'
}

function my_fun() {
    var random_opt = possible[Math.floor(Math.random() * possible.length)]
    console.log(random_opt)
    if (temp == 'scissor') {
        if (random_opt == "paper") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Scissor vs Paper <br> You win";
            window.alert('You won');
        } else if (random_opt == "stone") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Scissor vs Stone <br> Computer win";
            window.alert('Computer won');
        } else {
            document.getElementById('print').innerHTML = "You vs Computer <br> Scissor vs Scissor <br> Match Tie";
            window.alert('Match Tie');
        }
    } else if (temp == 'stone') {
        if (random_opt == "paper") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Stone vs Paper <br> Computer win";
            window.alert('Computer won');
        } else if (random_opt == "stone") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Stone vs Stone <br> Match tie";
            window.alert('Match tie');
        } else {
            document.getElementById('print').innerHTML = "You vs Computer <br> Stone vs Scissor <br> You won";
            window.alert('You won');
        }
    } else {
        if (random_opt == "paper") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Paper vs Paper <br> Match tie";
            window.alert('Match tie');
        } else if (random_opt == "stone") {
            document.getElementById('print').innerHTML = "You vs Computer <br> Paper vs Stone <br> You won";
            window.alert('You won');
        } else {
            document.getElementById('print').innerHTML = "You vs Computer <br> Paper vs Scissor <br> Computer won";
            window.alert('Computer won');
        }
    }

}

function myfun_1() {
    location.reload();
    document.getElementById("print").value = '';
}
