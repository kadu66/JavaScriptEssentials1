// 1. Tipos primitivos
let primitivos = ["string", "number", "boolean", "null", "undefined", "symbol", "bigint"];
console.log(primitivos);

// 2. Variáveis de cada tipo
let tipoString = "texto";
let tipoNumber = 100;
let tipoBoolean = false;
let tipoNull = null;
let tipoUndefined;
let tipoSymbol = Symbol("id");
let tipoBigInt2 = 9999999999999n;

console.log(tipoString, tipoNumber, tipoBoolean, tipoNull, tipoUndefined, tipoSymbol, tipoBigInt2);

// 3. Verificar se é Symbol
console.log(typeof tipoSymbol === "symbol"); 
