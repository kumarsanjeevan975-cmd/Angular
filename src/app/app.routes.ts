import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Profile } from './profile/profile';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'profile',component:Profile,data:{name:'sanjeevan kumar'}},
    {path:'**',component:Pagenotfound}
];
