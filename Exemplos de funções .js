//exemplo 01 simples

function soma01(a,b){
  return soma01 = a + b

}

console.log(soma01(1,5))



//exemplo 02 corrindo para 1 termo

function soma02(a=0,b=0){
  return soma02 = a + b

}

console.log(soma02(1))


//exemplo 03 fatorial

function fatorial(n){
  var fat = 1
  for (let c = n; c>1; c--){
    fat * c
   }
 return fat
}

console.log(fatorial(5))

// exemplo 04 recursivo 

function fatorial(n){
 if(n==1){
   return 1
   } else{
    return n*fatorial(n-1)
    }
}

console.log(fatorial(5))



//exemplo 05 par ou ímpar 

function parImpar(a){
 if (a%2==0){
  return "Par!"
 }else{
  return "Impar!"
 }
}

console.log(parImpar(4))
console.log(parImpar(11))

// exemplo 06 função dentro de variavel 


let  func = function(x){
 return x*2
}

console.log(func(5))




