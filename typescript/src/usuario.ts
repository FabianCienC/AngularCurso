export interface IUsuario {
    nombre: string;
    password: string;
    email: string;
}

export function createUser(): IUsuario {
    return {
        nombre: "",
        password: "",
        email: ""
    }
}

const yo: IUsuario = {
    nombre: "asd",
    email: "asd",
    password: "asasd"
}