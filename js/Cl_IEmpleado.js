export default class Cl_IEmpleado{

    readNombre(){
        return prompt("Ingrese el nombre del empleado");
    }
    readMontoVentas(){
        return prompt("Ingrese el monto de ventas");
    }

    readPorcentaje(){
        return prompt("Ingrese el porcentaje de bono");
    }

    mostrarEmpleado(n,mv,p,b){
        return`
        <br> Nombre: ${n}
        <br> Monto de ventas: ${mv}
        <br> Porcentaje de bono: ${p}
        <br> Bono de ventas: ${b}
        `
    }
}