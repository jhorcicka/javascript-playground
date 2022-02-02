import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormComponent} from './reactive-form/reactive-form.component';
import { TemplateFormComponent} from './template-form/template-form.component';

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
