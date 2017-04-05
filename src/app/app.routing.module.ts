import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {ItemInterfaceComponent} from './components/item-interface/item-interface.component';
import {VersusTableComponent} from './components/versus-table/versus-table.component';
import {BattleStatistic} from './components/battle-statistic/battle-statistic.component';

const routes: Routes = [
    {path: '', redirectTo: 'createUser', pathMatch: 'full'},
    {path: 'createUser', component: UserCreateComponent},
    {path: 'itemInterface/:id', component: ItemInterfaceComponent},
    {path: 'versus-table', component: VersusTableComponent},
    {path: 'battle-statistic', component: BattleStatistic}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}