import { IRequisitoPerfil } from './requisitoPerfil';
import { IRequisitoExpediente } from './requisitoExpediente';

export interface IProyecto {
    nombreProyecto:string;
    empresaResponsable:string;
    departamento:string;
    provincia:string;
    distrito:string;
    localidad:string;
    requisitosPerfiles?:IRequisitoPerfil[];
    requisitosExpedientes?:IRequisitoExpediente[];

}