import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SubmitComponent } from './submit/submit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'submit', component: SubmitComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
