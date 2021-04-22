function Task_1(){//IPv4
 //ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
 //ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
 //ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
 let mas_1 = prompt("Enter first IPv4: ");
 let mas_2 = prompt("Enter second IPv4: ");
 mas_1 = mas_1.split(".");
 mas_2 = mas_2.split(".");
 //let ans=new Array;
    let diff = 0;
     for (let i = 0; i < 4; i++) {
     diff += (mas_2[i] - mas_1[i]) << (8 * (3-i));//сдвинула двоичное представление на (8 * (3-i)) разрядов влево заполняя освободившиеся справа разряды нулями
 }
    alert(diff);
}
