export class Vacuna {
    codigo:number;
    valor : string;

    constructor(codigo = 0, valor='')
    {
        this.codigo = codigo;
        this.valor = valor;
    }
}
