import { BackendConnectService } from './../backend-connect.service';
import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class detailsComponent {
  id: string;
  book: any;

  constructor(
    public nav: NavbarService,
    private route: ActivatedRoute,
    private backend: BackendConnectService) { }

  ngOnInit() {
    this.nav.show();
    this.id = this.route.snapshot.paramMap.get('id')

    this.backend.getDetails(this.id).subscribe(data => {
      this.book = data.data;
    })
  }
}
