import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { CartePageRoutingModule } from './carte-routing.module';
import { CartePage } from './carte.page';
import { CartService, Product } from '../services/carte.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartePageRoutingModule
  ],
  declarations: [CartePage]
})
export class CartePageModule {}