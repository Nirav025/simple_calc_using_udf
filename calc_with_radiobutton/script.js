/*----------------------JS Code by Nirav------------------------------*/


function calc(nirav){

    let value1 = document.getElementById('value1').value
    let value2 = document.getElementById('value2').value
    let output;
    let operation;
   

    switch(nirav){
        case 1:
            output = Number(value1)+ Number(value2);
            operation = "Addition";
            break; //Here break is compalsory otherwise below code will also run.
        case 2:
            output = value1 - value2;
            operation = "Substraction";
            break;  
        case 3:
            output = value1 * value2;
            operation = "Multiplication";
            break; 
        case 4:
            output = (value1/value2).toFixed(2) //Here toFixed is for to show digits after point;
            operation = "Devision";
            break;
        default :
            alert("wrong choice"); 
            break; //Here breake is optional because no code in below  
        
    }

    let result = `${operation} of ${value1} & ${value2} is ${output}`;
    document.getElementById('answer').innerHTML = result;

}

