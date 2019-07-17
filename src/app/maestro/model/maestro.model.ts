export class MaestroClass {
    public codigo: number;
    public nombre: string;
    public estado: boolean;

    constructor(
        nombre: string
    ){
        this.codigo = Math.random();
        this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        this.estado = true;
    }
    
}