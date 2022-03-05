import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { FormStructureComponent } from './dynamic-form/form-structure/form-structure.component';

@NgModule({
  declarations: [
    FormStructureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    
  ],
  exports :[
    FormStructureComponent,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class SharedModule { }
