import { IFoto_descripcion } from './foto_descripcion';

export interface IGaleria {
    localidad: string;
    fotos_descripciones:IFoto_descripcion[];
}