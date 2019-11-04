import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
