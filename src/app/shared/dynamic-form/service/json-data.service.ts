import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private api : ApiService){
  }

  getAddUserFormData() {
    //return new Observable()
    return this.api.get('/assets/form-master/addUser.json');
  }

  getAddCategoryFormData() {
   // return new Observable()
    return this.api.get('/assets/form-master/addCategory.json');
  }
}
