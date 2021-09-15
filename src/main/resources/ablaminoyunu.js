var score = 0;
var clickedButtons = [];
function createMatrix() {
    return Array(10)
        .fill(0)
        .map(() => Array(10).fill(0));
}

var matrix = createMatrix();

function createTable() {
    let body = document.getElementById("body");
    for (var i = 0; i < matrix.length; i++) {
        let div = document.createElement("div");
        for (var j = 0; j < matrix.length; j++) {
            let button = document.createElement("button");
            button.className = "buttons";
            button.textContent = matrix[i][j];
            button.value = i.toString() + j.toString();
            button.disabled = false;
            button.addEventListener("click", () => incrementValue(button));
            button.addEventListener("click", () => disableButtons(button));

            div.appendChild(button);
        }
        body.appendChild(div);
    }
}

function incrementValue(button) {
    if (score == 0 || !button.disabled) {
        score++;
        button.textContent = score;
        console.log(button.value);
		clickedButtons.push(button.value);
    }


}
function getValues(button) {
    let x_int = parseInt(button.value[0]);
    let y_int = parseInt(button.value[1]);
    let values = [(x_int - 3).toString() + y_int.toString()];
    values.push(x_int.toString() + (y_int - 3).toString());
    values.push((x_int - 2).toString() + (y_int - 2).toString());
    values.push((x_int + 2).toString() + (y_int - 2).toString());
    values.push((x_int + 3).toString() + y_int.toString());
    values.push(x_int.toString() + (y_int + 3).toString());
    values.push((x_int + 2).toString() + (y_int + 2).toString());
    values.push((x_int - 2).toString() + (y_int + 2).toString());

    return values;
}

function disableButtons(button) {
   
    let buttons = document.getElementsByClassName("buttons");

    for (item of buttons) {
		
        if (!getValues(button).includes(item.value)) {
            item.disabled = true;
        } else if(!clickedButtons.includes(item.value))  {
            item.disabled = false;
			
        }

    }
}

function bestScore(button){

}



let myArray = createTable();
console.log(myArray);
