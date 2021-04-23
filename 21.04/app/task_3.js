function Vasya(){
    let arr = new Array;
    let l = prompt("How many people are in quequ? ");
    let max = 0;
    let sum = 0;
    for (let i = 0; i < l; i++) {
		arr[i] = Number(prompt("Enter arr["+(i+1)+"]"));
        sum +=arr[i];
        max = max < arr[i] ? max = arr[i] :  null;  
	}
    let ans = max - sum + max;
    ans == 0 ? console.log("YES") :  console.log("NO");
} 