import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private api:HttpClient) {}

  getEmployee(){
    return this.api.get('http://localhost:3000/posts/')
  }
  postEmployee(data:any){
    return this.api.post('http://localhost:3000/posts/',data)
  }

  putEmployee(id:number,data:any){
    return this.api.put('http://localhost:3000/posts/'+id,data)
  }
  deleteEmployee(id:number){
    return this.api.delete('http://localhost:3000/posts/'+id)
  }
}




