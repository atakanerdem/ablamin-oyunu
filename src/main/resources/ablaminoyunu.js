function createMatrix() {
	return Array(10).fill(0).map(()=>Array(10).fill(0))
}

	var matrix = createMatrix();	

function createTable(){
	let body = document.getElementById("body");
	for(var i=0;i<matrix.length;i++){
		let div = document.createElement("div");
		for(var j=0;j<matrix.length;j++){
			let button = document.createElement("button");
			button.textContent = matrix[i][j];
			button.value = i.toString() + j.toString();
			button.addEventListener("click", () => incrementValue(button));
			div.appendChild(button);
		}
		body.appendChild(div);
	}
}

function incrementValue(button){
	let x = button.value[0];
	let y = button.value[1];

	matrix[x][y]++;
	
	button.textContent = matrix[x][y];

console.log(matrix[x][y]);	
				
				}


let myArray = createTable();
console.log(myArray);