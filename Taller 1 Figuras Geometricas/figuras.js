//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado)
{
    return lado * 4;
}

function areaCuadrado (lado)
{
    return lado * lado;
}
console.groupEnd();
//Código del cuadrado

//Código del triangulo
console.group("Triángulos")

function perimetroTriangulo (lados,base)
{
    return lados + lados + base;
}

function areaTriangulo (base, altura)
{
    return (base * altura)/2
}

function alturaTriangulo (base, lado1, lado2)
{
    if (lado1 == lado2 && lado1>base)
        {
            let b = base/2;
            let c = lado1;
            let a = Math.sqrt((c * c) - (b * b));
            return a;
        }
    else
    alert("No es un triangulo Isoseles")
}


console.groupEnd();
//Código del triangulo

//Código del circulo
console.group("Circulos")

function diametroCirculo (radio)
{
    return radio*2;
}
const PI = Math.PI;

function perimetroCirculo (radio)
{ 
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio)
{
    return (radio * radio)*PI;
}
console.groupEnd();
//Código del Círculo

//Aquí interactuamos con HTML

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}
function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}
function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert (area);
}
function calcularPerimetroTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value = input.value;
    const value1 = inputBase.value
    const perimetro = perimetroTriangulo(value, value1);
    alert (perimetro);
}
function calcularAreaTriangulo()
{
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert (area);
}

