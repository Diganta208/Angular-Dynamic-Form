import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FieldBase } from 'src/app/core/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private data: any = []
  constructor() { }


  getFields(arr: any) {
    arr.forEach((element: {
      value?: unknown; key?: string | undefined; label?: string | undefined; required?: boolean | undefined;
      order?: number | undefined

      controlType?: string | undefined; row?: number | undefined; cols?: number | undefined; type?: string | undefined; name?: string | undefined // console.log(arr)
      ; minLength?: number | undefined; options?: { key: string; value: string; }[] | undefined;
    } | undefined) => {
      this.data.push(new FieldBase(element))
    });

    const fields: FieldBase<string>[] = arr
    return of(fields.sort((a, b) => a.order - b.order));
  }

  getFormData() {

  }
}
