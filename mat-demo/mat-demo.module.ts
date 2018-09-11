import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxHighlightModule } from '@petkit/ngx-highlight';

// material deps
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { MatDemoComponent } from './mat-demo.component';
import { MatDemoService } from './mat-demo.service';
import { IMatDemoConfig } from './mat-demo.interface';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxHighlightModule,

    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
  ],
  declarations: [
    MatDemoComponent,
  ],
  exports: [
    MatDemoComponent,
  ]
})
export class MatDemoModule {
  static forRoot(config: IMatDemoConfig): ModuleWithProviders {
    return {
      ngModule: MatDemoModule,
      providers: [MatDemoService, {
        provide: 'config',
        useValue: config,
      }]
    };
  }
}

