function task_2(){
    
    let A=[];
    let B=[];

    for(let i=0;i<3;i++){
        A[i]=prompt("Enter A["+(i+1)+"]: ");
    }

    for(let i=0;i<3;i++){
        B[i]=prompt("Enter B["+(i+1)+"]: ");
    }

    for(let i=0;i<3;i++)//проверка
    {
    if(A[i]<=0 || A[i]>100|| B[i]<=0 || B[i]>100)
    {
        alert('Wrong parameter(s)!');  
        return;
    }
    }

    let v=[];   
    for(let i=0;i<3;i++)
    {
        v[i] = A[i]*B[i];   
    }
    let k=v[0]+v[1]+v[2];
    alert(k);
   
    /* for(let i=0;i<3;i++){
    switch(i){
        case 0: {
            v1 = A[i]*B[i];
            alert(v1);
            break;
        }
        case 1: {
            v2 = A[i]*B[i];
            alert(v2);
            break;
        }
        case 2: {
            v3 = A[i]*B[i];
            alert(v3);
            break;
        } 
    }
    }*/    
}

function task_3(){
    let num = String(prompt("Enter namber: "));
    if(num.length < 6 || num.length > 6) 
    {
        alert('Wrong namber!');
        return;
    }
    let v1=Number(num[0])+Number(num[1])+Number(num[2]);
    let v2=Number(num[3])+Number(num[4])+Number(num[5]);
    let answer = v1==v2 ? 'YES' : 'NO'
    alert(answer);
    //alert(v1);
    //alert(v2);   
}