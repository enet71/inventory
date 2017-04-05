import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InventoryComponent} from './components/item-interface/inventory/inventory.component';
import {ItemService} from './shared/services/item.service';
import {ItemComponent} from './components/item-interface/inventory/item/item.component';
import {CharacterComponent} from './components/item-interface/character-list/character/character.component';
import {CharacterService} from './shared/services/character.service';
import {InventoryService} from './shared/services/inventory.service';
import {CharacterListComponent} from './components/item-interface/character-list/character-list.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {ItemInterfaceComponent} from './components/item-interface/item-interface.component';
import {AppRoutingModule} from './app.routing.module';
import {UserService} from './shared/services/user.service';
import {VersusTableComponent} from './components/versus-table/versus-table.component';
import {MenuComponent} from './components/menu/menu.component';
import {BattleHero} from './components/versus-table/battle-hero/battle-hero.component';
import {BattleStatistic} from './components/battle-statistic/battle-statistic.component';
import {BattleStatisticService} from './shared/services/battle-statistic.service';
import {StoreComponent} from './components/item-interface/store/store.component';
import {StoreService} from './shared/services/store.service';
import {BattleLogComponent} from './components/versus-table/battle-log/battle-log.component';
import {FireBaseService} from './shared/services/firebase.service';
import {AngularFireModule} from 'angularfire2';
import {TooltipDirective} from './directives/tooltip/tooltip.directive';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyDY6WiyZa-gTvRGFtd40jFvs4OOwIsyR9w',
    authDomain: 'inventory-b15a8.firebaseapp.com',
    databaseURL: 'https://inventory-b15a8.firebaseio.com',
    storageBucket: 'inventory-b15a8.appspot.com',
    messagingSenderId: '167220229623'
};

@NgModule({
    declarations: [
        AppComponent,
        InventoryComponent,
        ItemComponent,
        CharacterComponent,
        CharacterListComponent,
        UserCreateComponent,
        ItemInterfaceComponent,
        VersusTableComponent,
        MenuComponent,
        BattleHero,
        BattleStatistic,
        StoreComponent,
        BattleLogComponent,
        TooltipDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    providers: [
        ItemService,
        CharacterService,
        InventoryService,
        UserService,
        BattleStatisticService,
        StoreService,
        FireBaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
