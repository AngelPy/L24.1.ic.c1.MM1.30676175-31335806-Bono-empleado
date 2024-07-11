export default class Cl_IEmpleado{

    readNombre(){
        prompt("Ingrese el nombre del empleado");
    }
    readMontoVentas(){
        prompt("Ingrese el monto de ventas");
    }


    mostrarEmpleado(n,mv,b){
        return`
        <br> Nombre: ${n}
        <br> Monto de ventas: ${mv}
        <br> Bono de ventas: ${b}
        `
    }
}