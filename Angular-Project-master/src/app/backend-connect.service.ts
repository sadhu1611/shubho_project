import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendConnectService {
  hide = true

  constructor(private http: HttpClient) { }

  onLogin() {
    this.hide = true
  }

  fetch(): any {
    return this.http.get('http://localhost:3000/get-all-records')
  }

  delete(id) {
    return  this.http.delete(`http://localhost:3000/delete-one-record/${id}`)
  }

  post(data) {
    return this.http.post("http://localhost:3000/update-existing-record",data)
  }

  getDetails(id): any {
    return this.http.get(`http://localhost:3000/get-one-record/${id}`)
  }

  login(username, password) {
    return this.http.post('http://localhost:3000/login-user',
     { userName: username, password: password });
  }

  // delete(){
  //   this.http.delete('delete-one-record/:recId')
  // }

  // update(id){

  // }
}
