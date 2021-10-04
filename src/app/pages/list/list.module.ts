import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { TabelaModule } from 'src/app/components/tabela/tabela.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, TabelaModule, HeaderModule],
})
export class ListModule {}
