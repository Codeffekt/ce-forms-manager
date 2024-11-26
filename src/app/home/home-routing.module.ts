import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',      
        redirectTo: 'forms',
        pathMatch: 'full'
    },
    {
        path: 'root',
        loadChildren: () => import('../root/root.module').then(m => m.RootModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('../forms/form.module').then(m => m.FormsModule),        
    },
    {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'spaces', 
        loadChildren: () => import('../spaces/spaces.module').then(m => m.SpacesModule),       
    },    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
