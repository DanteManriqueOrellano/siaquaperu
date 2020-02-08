import { IRequisitoPerfil } from './requisitoPerfil';
import { IRequisitoExpediente } from './requisitoExpediente';

export interface IProyecto {
    nombreProyecto:string;
    empresaResponsable:string;
    departamento:string;
    provincia:string;
    distrito:string;
    localidad:string;
    cliente?:string;
    alias?:string
    estado?:string;
    requisitosPerfiles?:IRequisitoPerfil[];
    requisitosExpedientes?:IRequisitoExpediente[];

}