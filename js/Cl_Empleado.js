export default class Cl_Empleado{
    constructor(nombre, mont_ventas, porcentaje){
        this.nombre = nombre;
        this.mont_ventas = mont_ventas;
        this.porcentaje = porcentaje;
    }


    set nombre(n){
        this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set mont_ventas(s){
        this._mont_ventas = s;
    }

    get mont_ventas(){
        return this._mont_ventas;
    }

    set porcentaje(p){
        this._porcentaje = p;
    }

    get porcentaje(){
        return this._porcentaje;
    }

    CalcularBonoVentas(){
        return this._mont_ventas * (this._porcentaje / 100);
    }



}
