import Cl_Empleado from "./Cl_Empleado.js";
import Cl_IEmpleado from "./Cl_IEmpleado.js";

var nombre, mont_ventas,porcentaje, salida;

let iEmpleado = new Cl_IEmpleado();

nombre = iEmpleado.readNombre();
mont_ventas = iEmpleado.readMontoVentas();
porcentaje = iEmpleado.readPorcentaje();

let empleado = new Cl_Empleado(nombre, mont_ventas, porcentaje);

salida = document.getElementById("salida");

salida.innerHTML = iEmpleado.mostrarEmpleado(
    nombre,
    mont_ventas,
    porcentaje,
    empleado.CalcularBonoVentas());