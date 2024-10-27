import { Routes } from '@angular/router';
import { AttributeDemoComponent } from './components/attribute-demo/attribute-demo.component';
import { StructuralDemoComponent } from './components/structural-demo/structural-demo.component';
import { CustomComponentDemoComponent } from './components/custom-component-demo/custom-component-demo.component';

export const routes: Routes = [
    {
        path: 'attribute-demo',
        component: AttributeDemoComponent
    },
    {
        path: 'structural-demo',
        component: StructuralDemoComponent
    },
    {
        path: 'custom-component-demo',
        component: CustomComponentDemoComponent
    },
    {
        path: '**',
        redirectTo: 'attribute-demo'
    },
];
