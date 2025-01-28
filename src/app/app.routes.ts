import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributedirectivComponent } from './attributedirectiv/attributedirectiv.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForSwitchLoopComponent } from './for-switch-loop/for-switch-loop.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReativeFormComponent } from './forms/reative-form/reative-form.component';


export const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'add-emp',
    component:AddEmployeeComponent
  },
  {
    path:'emp-list',
    component:ListEmployeeComponent
  },
  {
    path:'data-binding',
    component:DataBindingComponent
  },
  {
    path:'structure-directive',
    component:StructuralDirectiveComponent
  },
  {
    path:'attribute-directive',
    component:AttributedirectivComponent
  },
  {
  path:'control-flow',
  component:IfElseComponent
  },
  {
    path:'for-switch',
    component:ForSwitchLoopComponent
    },
    {
      path:'pipe',
      component:PipeComponent
      },
      {
        path:'template',
        component:TemplateComponent
        },
        {
          path:'reactive_form',
          component:ReativeFormComponent
          },
];
