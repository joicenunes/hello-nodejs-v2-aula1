//declarando variáveis
let a = 10;
let b = 20;
let m = 10;
let i = 10;
let k = 10;

//if & switch
//dois modos de comparação
if(a > b){
  // se a comparação estiver certa, tem como saída o código desse bloco
}

switch(m){
  case 5:
    // a cada 'case' verifica se o parâmetro de switch corresponde ao valor mencionado
  break;
  case 10:
    // se for igual a dez, tem como saída o código desse bloco
  break;
  case 15:
    // se for igual a quinze, tem como saída o código desse bloco
  break;
  default:
    // se não for igual a nenhuma das opções anteriores, tem como saída o código desse bloco
  break;
}

//loops
//realizará o código do bloco enquanto as condições forem verdadeiras
for(let j = 0 ; j < 10 ; j++ ){
  // ...
}

while(i-->0){
  console.log(i);
}

do{
  // ...
  k = k -1;
}while(k);
