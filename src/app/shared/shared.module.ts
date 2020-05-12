import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from './services/backend.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BackendService,
    StoreService,
  ]
})
export class SharedModule { }
