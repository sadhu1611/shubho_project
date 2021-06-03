import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from '../backend-connect.service'
import { Router } from '@angular/router'


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashBoardComponent implements OnInit {

  books: any
  update_modal = false
  delete_modal = false
  search = ''
  searchPage = false
  searchedBooks: any
  deleteBook
  Name = ''
  Title = ''
  Author = ''
  id
  constructor(
    private backend: BackendConnectService,
    private route: Router,
    public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.backend.fetch().subscribe(data => {
      this.books = data.data
      console.log(this.books)
    })
  }

  onUpdate(book) {
    this.update_modal = true

    this.Name = book.name
    this.Author = book.author
    this.Title = book.title
    this.id = book.id
    console.log(book)
  }

  onDelete(book) {
    this.delete_modal = true
    this.deleteBook = book
  }

  onCancel() {
    this.update_modal = false
    this.delete_modal = false
  }

  onConfirm() {
    console.log(this.deleteBook.id)
    this.backend.delete(this.deleteBook.id).subscribe(res => this.ngOnInit())
    this.delete_modal = false
  }

  goBack() {
    this.searchPage = false
    this.search = ''
  }

  onSearch() {

    const book = this.books.filter(
      i => i.name == this.search
    )
    if (book.length) {
      this.searchPage = true
      console.log("books is ", book)
      this.searchedBooks = book
      console.log(this.searchedBooks)
    }
    else
      alert("book does not exist")
  }

  onEdit() {
    this.backend.post({
      "id": this.id,
      "name": this.Name,
      "title": this.Title,
      "author": this.Author

    }).subscribe(res => {
      //if(res.success)
      this.ngOnInit()

    })
    this.update_modal = false
  }
}