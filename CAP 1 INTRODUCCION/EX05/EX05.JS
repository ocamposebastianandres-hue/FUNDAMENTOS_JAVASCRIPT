let a, b;
let c, d;
let suma, resta, mult, div, residuo, potencia;

a = parseInt(prompt("ingrese el primer numero: "));
b = parseFloat(prompt("ingrese el segundo numero: "));

// resultados de operaciones
suma = a + b;
resta = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

// imprimir resultados;
document.writeln("la suma es: ", suma, "<br>");
document.writeln("la resta es: ", resta, "<br>");
document.writeln("la ultiplicacion es: ", mult, "<br>");
document.writeln("la división es: ", div, "<br>");
document.writeln("la residuo es: ", residuo, "<br>");
document.writeln("la potencia es: ", potencia, "<br>");