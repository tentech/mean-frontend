export class Persona {
    _id: string;
    nombres: string;
    apellidos: string;
    identificacion: string;
    fechaNacimiento: Date;
    provincia: number;
    ciudad: number;
    tipoVacuna:number;
    lugarVacunacion:string;
    imagen : string;

    constructor(_id = '', nombres = '', apellidos ='', identificacion = '', fechaNacimiento = new Date(),
        provincia = 0, ciudad = 0, tipoVacuna = 0, lugarVacunacion = '', imagen= '')
    {
    
        this._id = _id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.fechaNacimiento = fechaNacimiento;
        this.provincia = provincia;
        this.ciudad = ciudad
        this.tipoVacuna = tipoVacuna;
        this.lugarVacunacion = lugarVacunacion;
        this.imagen = imagen;
    }
    
}
