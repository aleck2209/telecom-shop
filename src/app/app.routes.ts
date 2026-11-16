import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [{ path: '', title: 'TelecomShop — Accueil', component: Home },
    {path: 'contact', title: 'TelecomShop — Contact', component: Contact }
];
