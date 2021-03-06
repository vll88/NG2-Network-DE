import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organize-sidebar',
  templateUrl: './organize-sidebar.component.html',
  styleUrls: ['./organize-sidebar.component.css']
})
export class OrganizeSidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '300px';
    document.getElementById('resource').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav(){
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('resource').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }
}

