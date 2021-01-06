var correct = Math.floor(Math.random() * 100) + 1;
console.log(correct);
var guess_try_number = 10;
var pre_guess = document.getElementById("guesses");

function guesses_fun() {
    var guess = document.getElementById("g_val").value;
    document.getElementById("g_val").value = "";
    if (guess == correct) {
        alert("you won");
        location.reload();
    }

    else {
        guess_try_number--;
        document.getElementById("remaining").innerHTML = guess_try_number;
        pre_guess.textContent += guess + ", ";

        if (guess_try_number == 0) {
            alert("you lost");
            location.reload();
        }
    }
}