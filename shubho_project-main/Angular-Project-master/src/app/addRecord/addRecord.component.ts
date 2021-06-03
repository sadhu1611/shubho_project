import { NavbarService } from './../navbar/navbar.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { BackendConnectService } from '../backend-connect.service'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: '',
  templateUrl: './addRecord.component.html',
  //styleUrls: ['./app.component.scss']
})
export class addRecordComponent {
  validator = false
  constructor(
    private route: Router,
    private backend: BackendConnectService,
    private http: HttpClient,
    public nav: NavbarService) { }
  
  ngOnInit(){
    this.nav.show();
  }
  
  onClick() {
    this.route.navigate(['dashboard']);
  }

  onCancel(bookForm) {
    bookForm.reset()
    this.route.navigate(['/dashboard']);
  }

  onSubmit(bookForm) {
    this.validator = false
    if (bookForm.value.name == '' || bookForm.value.author == '' || bookForm.value.title == '') {
      this.validator = true
    }
    else {
      //console.log(book)
      this.http.put("http://localhost:3000/add-new-record", bookForm.value).subscribe
        ((result) => console.log(result))

      bookForm.reset()
      this.nav.bookCount++;
    }
  }
}
