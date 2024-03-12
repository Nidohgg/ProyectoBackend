const Contador = require("./contador");

const contador1 = new Contador(`Emanuel Torres`);

//
//console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());
contador1.contar();
console.log(contador1.getCuentaIndividual());