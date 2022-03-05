import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from 'src/app/core/field-base';

@Component({
  selector: 'app-form-structure',
  templateUrl: './form-structure.component.html',
  styleUrls: ['./form-structure.component.scss']
})
export class FormStructureComponent implements OnInit {

  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  filteredOptions: any[];
  errorMassage: any
  autoCompleteFieldName: any
  get isValid() { return this.form.controls[this.field.key].valid; }
  showPass : boolean=false

  constructor() {
  }

  ngOnInit() {
    this.autoCompleteFieldName = []
    this.setAutocompleteFieldName()
    this.filteredOptions = this.autocompleteData('')
    this.form.valueChanges.subscribe(x => {
      this.filteredOptions = this.autocompleteData(x[this.autoCompleteFieldName])
    })
  }

  checkValidOrNot(e: any) {
    if (!e.controls.password.value) return
    else {
      if (e.controls.password_confirmation.value.length >= e.controls.password.value.length) {
        if (e.controls.password_confirmation.value != e.controls.password.value) this.errorMassage = "Password does not match"
        else this.errorMassage = undefined
      }
      else this.errorMassage = undefined
    }
  }

  setAutocompleteFieldName() {
    for (let obj in this.form.controls) {
      if (this.field.key == obj && this.field.controlType == "autocomplete") this.autoCompleteFieldName = obj
    }
  }

  private autocompleteData(value: string): any[] {
    let arr: any[] = []
    if (this.field.controlType == "autocomplete") {
      if (!value) return this.field.options
      else {
        const filterValue = value.toLowerCase();
        this.field.options.map((aOption) => {
          if (aOption.value.toLowerCase().includes(filterValue)) arr.push(aOption)
        })
        return arr
      }
    }
    else return arr
  }

}
