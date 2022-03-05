import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FieldBase } from 'src/app/core/field-base';
import { FieldControlService } from 'src/app/shared/dynamic-form/service/field-control.service';
import { JsonDataService } from 'src/app/shared/dynamic-form/service/json-data.service';
import { FieldService } from 'src/app/shared/dynamic-form/service/field.service';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.scss']
})
export class UserCategoryComponent implements OnInit {

  
  title : string ='User Category Add'

  arr: any = []
  fields$: Observable<FieldBase<any>[]>;
  form!: FormGroup;
  dis: boolean = false

  public fields: any

  constructor(private service: FieldService,
              private jsonDataService: JsonDataService,
              private fcs: FieldControlService,) { }

  ngOnInit(): void {
    this.jsonDataService.getAddCategoryFormData().subscribe(res => {
      this.arr = res
     this.service.getFields(res).subscribe(res1 => {
       this.fields  = res1
        this.form = this.fcs.toFormGroup(res1 as FieldBase<string>[]);
        this.dis = true
      });
    });
  }

  onSubmit(){
    console.log(this.form.getRawValue())
  }


}
