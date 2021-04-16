function maxLen(a){
    if(a > 5 || a < 0) a = 5;
    return a;  
}

function Matrix() {//создание и заполнение матрицы (Задача 1)
	let rows = Math.abs(prompt("Enter count of rows: ")); 
    let columns = Math.abs(prompt("Enter count of columns: "));
    let min = [];
    //проверка
    rows=maxLen(rows);
    columns=maxLen(columns);

    let arr = new Array();
	for (let i = 0; i < rows; i++) {
		arr[i] = new Array();

	for (let j = 0; j < columns; j++) {
		arr[i][j] = Number(prompt("Enter arr["+(i+1)+"]["+(j+1)+"]"));
        min[i]=arr[i][j];//заполняю массив для сравнения и поиска минимума
	}
	}
 
    let sum=0;
    for (let i = 0; i < rows; i++) {//поиск минимума
		for (let j = 0; j < columns; j++) {
			if(min[i]>arr[i][j])    min[i]=arr[i][j];
		}
        sum+=min[i];
	}

    alert(min);//вывод минимальных
    alert(sum);
    return arr;
}

function Oldest(){
    let mas=[];
    let k = prompt("Enter numbers of numbers: ");
    if(k < 2) k = 2;
    
    for(let i = 0; i < k ;i++){
        mas[i]=prompt("Enter A["+(i+1)+"]: ");
    }
     //сортировка по убыванию
    mas.sort(function(a, b){return b - a});//alert(mas);
    let result = [mas[0], mas[1]];
    alert(result);
}

function shortest()
{
    let sentence;
    do{
        sentence = prompt("Введите предложение.");
    }while(sentence == "")
    let array = sentence.replace(/[,.""''()?!-]/g, '');   
    sentence = array.split(" ");
    let shortest = sentence[0].length;
    for(let i = 0; i < sentence.length; i++)
    {
        if(sentence[i].length < shortest)
        {
            shortest = sentence[i].length;
        }
    }
    alert(shortest);
}