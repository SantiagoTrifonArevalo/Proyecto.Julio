
let habilidades = {
    health: 3,
    boost: 2,
    leech: 50,
    fireBall: 24,
    ironBody: 8
}

const compañeros = ["Javier", "Otniel", "Morales", "Oscar", "Santiago"]
const profesores = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"]

// ----------------------------------------------

function game() {

    let hpPersonaje = 100//prompt("hp: value");
    let strPersonaje = 20//prompt("str: value");
    let defPersonaje = 8//prompt("def: value");
    let saludProfe = 100//prompt("hp: value");
    let fuerzaProfe = 10//prompt("str: value");
    let defensaProfe = 15//prompt("def: value");
    let ObjetoPersonaje = {};
    let ObjetoProfesor = {};

    function personaje() {
        const randomIndex = Math.floor(Math.random() * compañeros.length);
        const selectedCharacter = compañeros[randomIndex];
               
        ObjetoPersonaje = {
            name: selectedCharacter,
            hpPerson: hpPersonaje,
            strPerson: strPersonaje,
            defPerson: defPersonaje
        }
        return ObjetoPersonaje
        
    }
    personaje()
    console.log(ObjetoPersonaje);

    function profes() {
        const randomIndex = Math.floor(Math.random() * profesores.length);
        const selectedCharacter = profesores[randomIndex];
    
        ObjetoProfesor = {
            name: selectedCharacter,
            hpProfesores1: saludProfe,
            strProfesores1: fuerzaProfe,
            defProfesores1: defensaProfe
        }
    return ObjetoProfesor
    }
    profes()
    console.log(ObjetoProfesor);
    //------------------------------------------//
function enemyAtack(profesor,personaje) {
   (ObjetoPersonaje.hpPerson) - (ObjetoProfesor.strProfesores1) - (ObjetoPersonaje.defPerson)

myAtack(personaje,profesor)
}

function myAtack(personaje,profesor) {
     
    ObjetoProfesor.hpProfesores1 = (ObjetoProfesor.hpProfesores1) - (ObjetoPersonaje.strPerson) + (ObjetoProfesor.defProfesores1)
   if (ObjetoProfesor.hpProfesores1>0) {
    enemyAtack(profesor,personaje)
   }else{

   }
   //--------------------------------------------//
   
 
   
   
   
   
}}
game()
