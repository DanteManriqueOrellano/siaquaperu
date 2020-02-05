import { IRequisitoPerfil } from './requisitoPerfil';
import { IRequisitoExpediente } from './requisitoExpediente';

export interface IProyecto {
    nombreProyecto:string;
    empresaResponsable:string;
    requisitosPerfiles:IRequisitoPerfil[];
    requisitosExpedientes:IRequisitoExpediente[];

}