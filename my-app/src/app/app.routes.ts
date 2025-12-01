import { Routes } from '@angular/router';
import { Usuarios } from './pages/usuarios/usuarios';
import { Canciones } from './pages/canciones/canciones';
import { Tareas } from './pages/tareas/tareas';
import { NotFound } from './pages/not-found/not-found';
import { Contacto } from './pages/contacto/contacto';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
    {path: "", redirectTo: "usuarios", pathMatch: "full"},
    {path: "usuarios", component: Usuarios},
    {path: "usuarios/:id", component: UserDetails},
    {path: "canciones", component: Canciones},
    {path: "tareas", component: Tareas},
    {path: "contacto", component: Contacto},
    {path: "**", component: NotFound}    
];
