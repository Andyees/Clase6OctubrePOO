class Carro{
public model:string
  public año:number;
  public color:string;
  private gasolina:number;


  constructor(año:number,color:string,gasolina:number,model:string){
      this.año=año
      this.color=color
      this.gasolina=gasolina
      this.model=model
      
  }

   Encender():void  {

   }
   Acelerar():void  {
    this.gasolina--
    }
    Parar():void  {

    }
    Getgasolina():number{
        return this.gasolina
    }

    
   
 



  presentacarro(): void{
      console.log("Este carro es de color "+this.color+ "y es del año "+this.año)
  }

}

class Mazda extends Carro{


    abrirTecho():void{

   }



}

class Ferarri extends Carro{
 
    
    ActivarNitro():void{

    }

}

let mazda2 =new Mazda(2018,"verde",11,"Mazda FX")
let ferrari2=new Ferarri(1998,"negro",12,"Ferrari Black")



function getModel(car:Carro){
    
    if(car.año<1999)
    console.log(car.model+" Carro antiguo")
    else{
        console.log(car.model)
    }

}

getModel(ferrari2)
getModel(mazda2)


