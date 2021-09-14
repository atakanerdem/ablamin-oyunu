function createMatrix() {
	return Array(10).fill(0).map(()=>Array(10).fill(0))
}

	var matrix = createMatrix();	

function createTable(){

	let div = document.getElementById("div");
	for(i=0;i<matrix.length;i++){
		let tr = document.createElement("span");
		for(j=0;j<matrix.length;j++){
			let td = document.createElement("td");
			td.textContent = matrix[i][j];
			td.addEventListener("click", function() {
				matrix[i][j]++;
				td.textContent++;
			})
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}




let myArray = createTable();
console.log(myArray);