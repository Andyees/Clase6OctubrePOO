// //tipo de datos
// var no_tipada=[1,"hola",true,"hola"]
// var cosa:boolean =false;
// var cosa2:number;
// var cosa3:string;
// var array=[1,2,4]
// var array2:any[]=[1,true,"hola"]
// var array3:Array<string>
// var array4:boolean[]
// var array5:[string,number];
// no_tipada=[1,"hola",true,"hola"]

// var persona:{
//     nombre:String;
//     edad:number
//     Hijos:string[]
// }




// //Enum
// enum Colores {Red,Green,Blue}
// var verde:Colores=Colores.Green
// enum Rol { empleado,gerente, administrador}
// var role:Rol=Rol.empleado
// enum permisos{Root=4, Invited}
// var jesus=permisos.Root // 4
// var julio=permisos[5] //invited

// function suma(number1:number, number2:number):string{
//     let number=number1+number2
//     var cadena:string=""+number
//     return cadena

// }
//declarando
var decirhola:(name:string )=>string;

//implementar

decirhola=(name:string)=>{
    return "hola "+name
}

console.log(decirhola("andres"))



function sumarMuchosParametros(arg1:number, ...args:number[]):number{
    var total=arg1
    for (let index = 0; index < args.length; index++) {
        total+=args[index];
        
    }
    return total
}


sumarMuchosParametros(1,2,43,54,54,56,7)

