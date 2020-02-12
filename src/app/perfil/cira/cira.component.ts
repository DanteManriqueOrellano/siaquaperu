import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';


import { relacionado } from '../relacionado/relacionado.component';
import { PdfMakeWrapper, Txt, Columns,Canvas,Line, Table, Cell, Ul } from 'pdfmake-wrapper';

interface IPersona {
  vertice: string;
  lado: string;
  este: string;
  norte: string
  distancia: number;

}
interface relacion {
  propiedad:String;
  larelacion:relacionado
}
@Component({
  selector: 'app-cira',
  templateUrl: './cira.component.html',
  styleUrls: ['./cira.component.css'],
  providers:subformComponentProviders(CiraComponent)
})
export class CiraComponent extends NgxSubFormComponent<relacion>  {
  distanciaTotalDesague:number = 0;
  itemNombreProyecto:string = '1. Nombre del Proyecto';
  nombreProyectoData: string ='“CREACION DEL SISTEMA DE SANEAMIENTO BASICO Y SISTEMA DE AGUA POTABLE DE HULLMAY Y CASCO URBANO DEL C.P DE VICOS, DEL DISTRITO DE MARCARA, PROVINCIA DE CARHUAZ- DEPARTAMENTO DE ANCASH”'
  itemAntecedentes:string = '2.- Antecedentes';
  antecedentesData:string = 'El proyecto contempla las poblaciones de Hullmay y casco Urbano del CP de Vicos donde el agua y desagüe lo construyo FONODES, tiene más de 25 años de antigüedad. Los poblados, poseen un sistema de abastecimiento de agua potable deteriorado con fugas que lo hace insuficiente y no cubre la demanda hídrica para consumo humano de la población, es donde la Municipalidad Distrital de Marcará tiene programado la ejecución del proyecto “CREACION DEL SISTEMA DE SANEAMIENTO BASICO Y SISTEMA DE AGUA POTABLE DE HULLMAY Y CASCO URBANO DEL C.P DE VICOS, DEL DISTRITO DE MARCARA, PROVINCIA DE CARHUAZ- DEPARTAMENTO DE ANCASH”, como parte de la fase de inversión. Es importante señalar que las zonas periféricas del Casco Urbano de CP Vicos no cuentan con sistema de desagüe por lo que se plantea construir la red de desagüe y en la población de Hullmay se van a construir UBS del tipo biodigestores, con respecto al agua existe pérdidas derivadas del inadecuado manejo del mismo y la deficiencia de la red del sistema de agua y desagüe existente que no permite el adecuado uso y las autoridades del distrito desean con este proyecto  brindar el servicio de agua y desagüe al 100% de la población, con el nuevo expediente técnico que se plantea.' 
  itemDescripcionProyecto:string='3.- Descripción del Proyecto';
  descripcionProyectoData = 'Al ser un proyecto que contempla cubrir al 100% de desagüe a las poblaciones beneficiarias por lo que se plantea la construcción de estos sistemas en el proyecto denominado “CREACION DEL SISTEMA DE SANEAMIENTO BASICO Y SISTEMA DE AGUA POTABLE DE HULLMAY Y CASCO URBANO DEL C.P DE VICOS, DEL DISTRITO DE MARCARA, PROVINCIA DE CARHUAZ- DEPARTAMENTO DE ANCASH”, el cual genera una mejor calidad de vida de las poblaciones de Hullmay y del Casco Urbano de CP de Vicos, siendo este proyecto de mucha importancia se considera mejorar su sistema existente y construir bodigestores en la periferia que no poseen y/o no existe sistema de desagüe.'
  itemObjetivos:string ='Objetivos';
  objetivosData = [
    'Ampliar y Mejorar los servicios de agua para consumo humano.',
    'construir su sistema de tratamiento de aguas residuales (PTAR)',
    'Mejorar prácticas y hábitos de higiene.',
    'Capacitar a la población en educación sanitaria.',
    'Organizar la JAAS y capacitar, así como a la población en general.',
    'Implementar sistemas de disposición de excretas (servicios higiénicos domiciliarios) y residuos.',
    'Mejorar el nivel de vida de la población.',
  ];
  itemComponentesProyectados='Componentes Proyectados'
  subItemComponente='Los componentes proyectados para el sistema de desagüe propuesto son:'
  itemsComponentesProyectados=[
    'Instalación de emisores y colectores: Tubería de 160mm tipo PVC – UF, hasta Tubería de 250mm PVC – UF.',
    'Construcción de buzones',
    'Conexiones domiciliarias',
    'Biodigestores.',
    'PTAR',
    'Disposición final de vertimiento de agua residual.'];
  itemPruebasCalidad= 'Pruebas de calidad'
  pruebasCalidadData:string = 'Son las pruebas y ensayos sometidos en obra, para garantizar la mejor calidad de la construcción.'
  itemCapacitacion:string = 'Capacitación:'
  capacitacionData:string ='Capacitación en operación y mantenimiento del sistema'
  itemMitigacionImpactoAmbiental:string ='Mitigación de Impacto Ambiental:' 
  mitigacionImpactoAmbientalData:string = 'Prevención y mitigación del impacto ambiental.'
  
  itemUbigeo='4. Ubigeo'
  ubigeoSubItem1 = '4.1 Ubicacion Politica'
  ubigeoSubItemData=[
    {Region:'Ancash'},
    {Provincia:'Huaylas'},
    {Distrito:'Marcara'},
    {Poblacion:'Hullmay y Casco Urbano CP Vicos'},
    ]
  ubigeoSubItem2 = '4.2 Ubicación Geográfica'
  ubigeoSubItem2Data = 'El distrito de Marcara donde se encuentran los poblados de Hullmay y Casco Urbano del CP vicos se encuentra ubicada en la zona Este del Callejón de Huaylas, en la serranía de la Región Ancash, a una altitud de 3300 msnm, se encuentra acentuada sobre una topografía inclinada de pendiente promedio de 10%, rodeado de zonas agrícolas, con un paisaje hacia el sur-este con vista del Huascaran, con un terreno de zonas de sedimento hídrico por la existencia del rio Santa y por el oeste con grandes colinas propias de zonas volcánicas.'
  coordenadasData =[
    {Este:'0219525'}, 
    {Norte:'8967812'},
    {Altura:'3020.00'},
  ]
  ubigeoAdicional ='La ciudad está conformada por terrenos constituidos de un proceso a través de los años de erosión por escorrentía superficial.'
  subItemDescripcionTecnica ='5. Descripción Técnica del  Proyecto';
  
  itemLongitudRedesFranjaServidumbre:string= '5.1 Longitud de redes y franja de servidumbre';
  
  longDesagueData:string = 'Longitud de Desagüe NUEVO: 1064.85 ml'
  franjaServidumbreData:string = 'Franja de servidumbre : 2 m (1m a cada lado de eje)'
  itemUTM:string= '5.2 coordenadas UTM de referencia'
  itemUTMData =
[
{datum:'Datum WGS - 84'},
{proyeccion:'Universal Transversal Mercator (UTM)'},
{sis_coordenadas:'Planas'},
{Zona_UTM:'18 South'},
{Cuadricula:'L'},
{Hoja_Carta_Nacional:'19-H (Carhuaz)'},
{Carta_Nacional_IGN:'Escala 1/100,000'}]
 
 
itemDatosTecnicos:string = '5.3 cuadro de datos técnicos del sistema de saneamiento'
itemAcceso:string = '6. Acceso';
itemAccesoData:string ='El acceso a la ubicación del proyecto es mediante vía carrozable, modo terrestre desde la ciudad de Huaraz, ciudad referente a nivel nacional al ser la capital del departamento, siendo la ruta la siguiente.'
accesoDataDetalle:string ='Huaraz – Marcara, distancia 30km con un tiempo de viaje de 1.00 hora, aproximadamente. Marcara – CP Vicos 10km con un tiempo de 15 minutos'
itemColindancias:string = '7. Colindancias'
itemColindanciasData = [
  {Norte : 'Zona Agricola'},
  {Sur : 'Zona Agricola'},
  {Este : 'Zona Agricola'},
  {Oeste : 'Zona Agricola'}
]

  
  
  protected getFormControls():Controls<relacion>{
    return {
      propiedad:new FormControl(),
      larelacion: new FormControl()
    }
  }
  creaObjetivos(){
    
    const pdf = new PdfMakeWrapper();
    //izquierda,arriba,derecha,abajo
    pdf.pageMargins([80,120,40,60])
    pdf.header(new Table([
      [ new Txt(this.nombreProyectoData).alignment('center').relativePosition(1,1).margin([40,40,40,40]).fontSize(9).end, new Txt('2019').alignment('left').relativePosition(1,1).margin([40,40,40,40]).end],
      [new Cell(new Txt('').end).colSpan(2).end]
  ]).widths(['80%','20%']).layout('lightHorizontalLines').end)
    
    pdf.add(this.itemNombreProyecto);
    pdf.add(new Txt(this.nombreProyectoData).alignment('center').margin(10).end);
    pdf.add(new Txt(this.itemAntecedentes).end);
    pdf.add(new Txt(this.antecedentesData).alignment('justify').margin(10).end);
    pdf.add(new Txt(this.itemDescripcionProyecto).end);
    pdf.add(new Txt(this.descripcionProyectoData).alignment('justify').margin(10).end  );
    pdf.add(new Txt(this.itemObjetivos).margin(10).end);
    pdf.add(new Ul(this.objetivosData).margin(10).end );
    pdf.add(new Txt(this.itemComponentesProyectados).margin(10).end);
    pdf.add(new Txt(this.subItemComponente).margin(10).end);
    pdf.add(new Ul(this.itemsComponentesProyectados).margin(20).end);
    pdf.add(new Txt(this.itemPruebasCalidad).margin(10).end);
    pdf.add(new Txt(this.pruebasCalidadData).margin(10).end);
    pdf.add(new Txt(this.itemCapacitacion).margin(10).end);
    pdf.add(new Txt(this.capacitacionData).margin(10).end);
    pdf.add(new Txt(this.itemMitigacionImpactoAmbiental).margin(10).end);
    pdf.add(new Txt(this.mitigacionImpactoAmbientalData).margin(10).end);
    pdf.add(this.itemUbigeo);
    pdf.add(new Txt(this.ubigeoSubItem1).margin(10).end);

    let ubigeoData = ()=>{
      let dataSource = [
        ]
      //ordenamiento para tablas
      dataSource.push(['Departamento:',this.ubigeoSubItemData[0].Region])
      dataSource.push(['Provincia:',this.ubigeoSubItemData[1].Provincia])
      dataSource.push(['Distrito:',this.ubigeoSubItemData[2].Distrito])
      dataSource.push(['Poblacion:',this.ubigeoSubItemData[3].Poblacion])
      //ordenamiento para columnas
      //dataSource.push(['Departamento:','Provincia:','Distrito:','Poblacion:'])
      //dataSource.push([this.ubigeoSubItemData[0].Region,this.ubigeoSubItemData[1].Provincia,this.ubigeoSubItemData[2].Distrito,this.ubigeoSubItemData[3].Poblacion]) 
      return dataSource
    }
    pdf.add(new Table(ubigeoData()).margin(20).layout('noBorders').end);
    pdf.add(new Txt(this.ubigeoSubItem2).margin(10).end);
    
    let coordenadas = ()=>{
      let dataSource =[]
        dataSource.push(['Este (E):',this.coordenadasData[0].Este])
        dataSource.push(['Norte (N):',this.coordenadasData[1].Norte])
        dataSource.push(['Altura:',this.coordenadasData[2].Altura])
        return dataSource
    }
    pdf.add(new Table(coordenadas()).margin(20).layout('noBorders').end)
    pdf.add(new Txt(this.ubigeoSubItem2Data).alignment('justify').margin([20,0,40,10]).end);
    pdf.add(this.subItemDescripcionTecnica);
    pdf.add(new Txt(this.itemLongitudRedesFranjaServidumbre).margin(10).end)
    pdf.add(new Txt(this.longDesagueData).margin(20).end);
    pdf.add(new Txt(this.franjaServidumbreData).margin(20).end);
    pdf.add(new Txt(this.itemUTM).margin(10).end);

    let utm = ()=>{
      let dataSource = [
        ]
      dataSource.push(['Datum:',this.itemUTMData[0].datum])
      dataSource.push(['Proyección:',this.itemUTMData[1].proyeccion])
      dataSource.push(['Sistema de coordenadas:',this.itemUTMData[2].sis_coordenadas])
      dataSource.push(['Zona UTM:',this.itemUTMData[3].Zona_UTM])
      dataSource.push(['Cuadrícula:',this.itemUTMData[4].Cuadricula])
      dataSource.push(['Hoja de Carta Nacional:',this.itemUTMData[5].Hoja_Carta_Nacional])
      dataSource.push(['Carta Nacional de IGN:',this.itemUTMData[6].Carta_Nacional_IGN])
      return dataSource
    }
    pdf.add(new Table(utm()).margin(20).layout('noBorders').end)
    pdf.add(new Txt(this.itemDatosTecnicos).margin(10).end)
    
    const personas:IPersona[] = [
      {vertice:'1',lado:'01-02',este:'180292',norte:'9018873',distancia:44.75},
      {vertice:'2',lado:'02-03',este:'180331',norte:'9018879',distancia:15.60},
      {vertice:'3',lado:'03-04',este:'180342',norte:'9018890',distancia:31.65},
      {vertice:'4',lado:'04-05',este:'180371',norte:'9018899',distancia:60.15},
      {vertice:'5',lado:'05-06',este:'180428',norte:'9018915',distancia:49.50},
      {vertice:'6',lado:'06-07',este:'180473',norte:'9018910',distancia:39.70},
      {vertice:'7',lado:'07-08',este:'180493',norte:'9018876',distancia:49.90},
      {vertice:'8',lado:'08-09',este:'180537',norte:'9018858',distancia:72.80},
      {vertice:'9',lado:'09-10',este:'180608',norte:'9018901',distancia:76.10},
      {vertice:'10',lado:'10-11',este:'180680',norte:'9018919',distancia:46.10},
      {vertice:'11',lado:'11-12',este:'180724',norte:'9018926',distancia:45.20},
      {vertice:'12',lado:'12-13',este:'180746',norte:'9018886',distancia:29.10},
      {vertice:'13',lado:'13-14',este:'180773',norte:'9018877',distancia:35.95},
      {vertice:'14',lado:'14-15',este:'180804',norte:'901889.8',distancia:47.40},
      {vertice:'15',lado:'15-16',este:'180839',norte:'9018858',distancia:25.80},
      {vertice:'16',lado:'16-17',este:'180863',norte:'9018867',distancia:60.90},
      {vertice:'17',lado:'17-18',este:'180923',norte:'9018862',distancia:35.40},
      {vertice:'18',lado:'18-19',este:'180933',norte:'9018894',distancia:42.20},
      {vertice:'19',lado:'19-20',este:'180975',norte:'9018896',distancia:25.05},
      {vertice:'20',lado:'20-21',este:'180994',norte:'9018912',distancia:60.65},
      {vertice:'21',lado:'21-22',este:'181052',norte:'9018924',distancia:51.40},
      {vertice:'22',lado:'22-23',este:'181101',norte:'9018928',distancia:43.30},
      {vertice:'23',lado:'23-24',este:'181128',norte:'9018964',distancia:65.05},
      {vertice:'24',lado:'24-25',este:'181192',norte:'9018969',distancia:39.90},
      {vertice:'25',lado:'25-26',este:'181229',norte:'9018984',distancia:70.20},
      {vertice:'26',lado:'26-27',este:'181299',norte:'9018981',distancia:34.10},
      {vertice:'27',lado:'27-28',este:'181402',norte:'9019008',distancia:83.40},



    ]
    let personasData = ()=>
    {
      let dataSource =[]
      dataSource.push([new Txt('Vértice').color('red').end,new Txt('Lado').color('red').end,new Txt('Este (x)').color('red').end,new Txt('Norte (Y)').color('red').end,new Txt('Distancia').color('red').end])
      personas.map((val)=>{
        this.distanciaTotalDesague = this.distanciaTotalDesague + val.distancia
        
        dataSource.push([val.vertice,val.lado,val.este,val.norte,val.distancia ]) 

      })
      
      return dataSource
    }
    
      pdf.add(new Table(
        personasData()
      ).alignment('center').margin([90,0]).end);
       
      pdf.add(new Txt(`Distancia Total: ${this.distanciaTotalDesague}`).margin(10).end);
      pdf.add(new Txt("Franja de servidumbre (1m de cada lado del eje) :    	2.00 m").margin(10).end)
      pdf.add(this.itemAcceso);
      pdf.add(new Txt(this.itemAccesoData).alignment('justify').margin([10,10,200,0]).end);
      pdf.add(new Txt(this.accesoDataDetalle).alignment('justify').margin([10,10,200,10]).end);
      
      pdf.add(this.itemColindancias)

      let colindancias = ()=>{
        let dataSource = [
          ]
        dataSource.push(['Norte:',this.itemColindanciasData[0].Norte])
        dataSource.push(['Sur:',this.itemColindanciasData[1].Sur])
        dataSource.push(['Este:',this.itemColindanciasData[2].Este])
        dataSource.push(['Oeste:',this.itemColindanciasData[3].Oeste])
         return dataSource
      }
      pdf.add(new Table(colindancias()).margin(20).layout('noBorders').end)

  
    pdf.create().open()
    
  }
  ver(){
    this.creaObjetivos()
    
    
    
  }
  



}
