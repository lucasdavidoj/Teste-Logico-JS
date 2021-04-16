function teste1(a,b){
  let lista = [];
  for (let i = 0; i < a; i++) {
    lista.push(b);  
  };
  console.log(lista);
};

function teste2(lista){
  let inverte = [];
  for (let i = lista.length; i >= 0; i--) {
    inverte.push(lista[i]); 
  };
  console.log(inverte);
};

function teste3(lista){
  let limpa = [];
  for (let i in lista) {
    j = lista[i];  
    if ((j != false) && (j != undefined) && (j != '') && (j != 0)  && (j != null)) {
      limpa.push(lista[i]);
    };
  }
  console.log(limpa);
};

function teste4(lista){
  let objeto= new Object();
  for (let i = 0; i < lista.length; i++) {
    objeto[lista[i][0]] = lista[i][1]; 
  };
  console.log(objeto);
};

function teste5(lista, a, b){
  let limpa = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] != a && lista[i] != b) {
      limpa.push(lista[i]);
    }; 
  };
  console.log(limpa);
};

function teste6(lista){
  limpa = [];
  for (let i = 0; i < lista.length; i++) {
    if (limpa.indexOf(lista[i]) < 0) {
      limpa.push(lista[i]);
    };
  };
  console.log(limpa);
};

function teste7 (lista1, lista2){
  count = 0;
  for (let i = 0; i < lista1.length; i++) {
    if (lista2.indexOf(lista1[i]) > -1) {
      count++;
    }
  }
  console.log((count == lista1.length) && (count == lista2.length));
}

function teste8(lista){
  let limpa = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].length == undefined) {
      limpa.push(lista[i])
    } else {
      for (let j = 0; j < lista[i].length; j++) {
        limpa.push(lista[i][j])
      }  
    }
  }
  console.log(limpa)
};

function teste9(lista, max){
  let divide = [];
  let aux = [];
  for (let i = 0; i < lista.length; i += max) {
    for (let j = 0; j < max; j++) {
      if (lista[i+j] != undefined) {
        aux.push(lista[i+j]); 
      }
    };
    divide.push(aux);
    aux = [];
  };
  console.log(divide);
};

function teste10 (lista1, lista2) {
  let comum = [];
  for (let i = 0; i < lista1.length; i++) {
    if (lista2.indexOf(lista1[i]) > - 1) {
      comum.push(lista1[i]) ;  
    }
  };
  console.log(comum);
};