import { createUser } from "./usuario"

interface IPersona {
    nombre: string;
    edad: number;
    email?: string;
    saludar: () => void;
}

class Ente {
    nombre: string = ""
}

class Persona implements IPersona{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        setTimeout(() => {
            console.log("Holaaa: " + this.nombre);
        }, 1000);
    }
}

const yo: IPersona = new Persona("Juan",23);

yo.saludar();