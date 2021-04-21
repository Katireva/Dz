/*Task_1*/
function SortByNum(){
    let sentence;// = "is2 Thi1s T4est 3a";
    let arr1 = new Array;
    let k;
    do{
        sentence = prompt("Введите предложение: ");
    }while(sentence == "")
    let array = sentence.replace(/[,.""''()?!-]/g, '');   
    sentence = array.split(" ");
    for(let i=0; i< sentence.length; i++)
    {
        k = parseInt(sentence[i].match(/\d+/));
        arr1[k-1]=sentence[i];
    }
    console.log(arr1);
}
/*Task 2*/
function TicTacToeChecker()
{
    let rows = 3; 
    let columns = 3;
    let mas=[];
    let arr = new Array();
	for (let i = 0; i < rows; i++) {
		arr[i] = new Array();
        	for (let j = 0; j < columns; j++) {
                arr[i][j] = Number(prompt("Enter arr["+(i+1)+"]["+(j+1)+"]"));
            	}	
    }
    let ans;
    
    for (let i = 0; i < rows; i++) {
        mas[i]=arr[i][i];//главная диагональ
    }  ans=foo(mas);    chek(ans,mas);
    
    for (let i = 0; i < rows; i++) {
		 mas[i]=arr[i][rows-1-i];//побочная диагональ
	}  ans=foo(mas);    chek(ans,mas); 

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[i][0];//первый столбец
    }  ans=foo(mas);    chek(ans,mas);

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[i][1];//второй столбец
    }  ans=foo(mas);    chek(ans,mas);

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[i][2];//третий столбец
    }  ans=foo(mas);    chek(ans,mas);

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[0][i];//первая строка
    }  ans=foo(mas);    chek(ans,mas);

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[1][i];//вторая строка
    }  ans=foo(mas);    chek(ans,mas);

    for (let i = 0; i < rows; i++) {
        mas[i]=arr[2][i];//третья строка
    }  ans=foo(mas);    chek(ans,mas);

    //console.log(mas);
    return mas;
}

function foo(a) {//проверка равности элементов массива
    for (var b = 0; b < a.length; b++)
      if (a[b] !== a[0]) 
      { 
        return a.length=0;//не равны - очищаю массив, чтобы использовать повторно
      }
    return true;//равны
};

function chek(ans, mas){
    if(ans==true) {
        //Вывод результата
        let a = mas[0];
        switch (a)
        { 
            case 0:{
                console.log(-1); break;
            }
            case 1:{console.log('Win X!'); break;}
            case 2:{console.log('Win O!'); break;}
            case 1 && 2: {console.log("Cat's game"); break;}
        }   
       return 0; 
    } else console.log("Cat's game");
}

function meeting_room()
{
    let have = 0; //сколько взяли
    let LeftToGo = 0; // Сколько осталось взять
    let array = new Array;//Массив ответов 
    let xChair = 0; //Занятых стульев
    let ExistingChair = 0; // Сколько стульев в комнате вообще
    let need = prompt("Введите сколько стульев нужно (не больше 8)","")
    let meetingRooms = prompt("Введите строку","");
    let meetingRooms2 = meetingRooms.replace(/[,.""''()?!-]/g, '');
    meetingRooms = meetingRooms2.split(" ");
    let length = meetingRooms.length;
    for(let i = 0; i < length; i++){
        if( i % 2 == 0){
            xChair = meetingRooms[i].length;
        }
        else{
            ExistingChair = Number(meetingRooms[i]);
        }
        if(xChair != 0 && ExistingChair != 0){
            if(ExistingChair - xChair >= 0 && need - have >= 0){
                LeftToGo = need - have;
                console.log("Сколько осталось взять " + LeftToGo);
                if(LeftToGo > (ExistingChair - xChair)){
                    have += ExistingChair - xChair;
                    array.push(ExistingChair - xChair);
                    if(have != need){
                        console.log('Not enough!');
                    }
                }
                else{
                    have += ExistingChair - xChair;
                    array.push((ExistingChair - xChair)-((ExistingChair - xChair) - LeftToGo));
                    console.log('Game On');
                }
                console.log(array);
            }
            xChair = 0;
            ExistingChair = 0;
        }
    }
    //console.log(meetingRooms);   
}
