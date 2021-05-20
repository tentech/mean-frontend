export class Ciudad {

    codigo:number;
    valor : string;
    provincia: number;
    constructor(codigo = 0, valor='', provincia=0)
    {
        this.codigo = codigo;
        this.valor = valor;
        this.provincia =provincia;
    }
}
