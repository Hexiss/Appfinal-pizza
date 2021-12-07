import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CartePageModule } from '../carte/carte.module';
import { CartePage } from '../carte/carte.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IonicModule.forRoot(), CartePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}