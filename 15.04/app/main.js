function Matrix() {//создание и заполнение матрицы (Задача 1)
	let rows = prompt("Enter count of rows: "); 
    let columns = prompt("Enter count of columns: "); ;
    let min = [];

    let arr = new Array();
	for (let i = 0; i < rows; i++) {
		arr[i] = new Array();

		for (let j = 0; j < columns; j++) {
			arr[i][j] = Number(prompt("Enter arr["+(i+1)+"]["+(j+1)+"]"));
            min[i]=arr[i][j];//заполняю массив для сравнения и поиска минимума
		}
	}
    /*function sortLikeNums(a, b) Почему-то не сработало
    {
        return b-a;
    } 
    for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			arr.sort(sortLikeNums);
		}
        alert(arr[i][j]);
	}
    */
    for (let i = 0; i < rows; i++) {//поиск минимума
		for (let j = 0; j < columns; j++) {
			if(min[i]>arr[i][j])    min[i]=arr[i][j];
		}
	}
    alert(min);//вывод минимальных
    return arr;
}