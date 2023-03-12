import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChicoComponent, FisherPriceComponent, LolComponent } from './index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // ChildrenToysModule,
    ChicoComponent,
    FisherPriceComponent,
    LolComponent,
  ],
  imports: [
    // BrowserModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'children-toys',
    //     component: ChildrenToysModule,
    //     children: [
    //       { path: 'chico', component: ChicoComponent },
    //       { path: 'fisher-price', component: FisherPriceComponent },
    //       { path: 'lol', component: LolComponent },
    //     ],
    //   },
    // ]),
  ],
})
export class ChildrenToysModule {}
