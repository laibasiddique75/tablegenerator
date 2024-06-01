
function tableGenerator(){

let input1 = document.getElementById("input1");

let input2 = document.getElementById("input2");

let table = document.getElementById("table");


for (let i=1;i<=input2.value;i++){

    table.innerText += `${input1.value} x ${i} = ${input1.value*i}\n`
}



input1.value = "";
input2.value = "";

}

