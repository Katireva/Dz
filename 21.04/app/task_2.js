
//Максимальный продукт может быть получен путем многократного разбивания частей на 3,
//если размер больше 4, сохраняя размер последней части как 2, или 3, или 4. 

function maxProd(n)
{
   //разбитие базовых частей
   if (n == 2 || n == 3) return (n-1);
   
   // разбитие n если больше 4
   let res = 1;
   while (n > 4)
   {
       n -= 3;
       res *= 3; 
   }
   return (n * res); // перемножаю полученные части
}

function main()
{
    let a = Number(prompt("Enter number: "));
    console.log("Maximum Product is ", maxProd(a));
    return 0;
}