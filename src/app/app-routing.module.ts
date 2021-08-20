import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


//  Configuracion de las Rutas
const routes : Routes =[

    {
        //  Path
        path : '',
        //  Componente que se mostrara en ese Path
        component : PorPaisComponent,
        //  Match -> Completamente
        pathMatch : 'full'

    },
    
    {
        path : 'region',
        component : PorRegionComponent,
        pathMatch : 'full'
    },

    {
        path : 'capital',
        component : PorCapitalComponent
    },

    {
        path : 'pais/:id',
        component : VerPaisComponent
    },

    {
        path : '**',
        redirectTo : ''
    }

]

@NgModule({

    imports : [

        RouterModule.forRoot( routes )

    ],

    exports : [
        
        RouterModule
    ]

})
export class AppRoutingModule { }