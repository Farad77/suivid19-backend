import { Component, OnInit, Inject, Input } from '@angular/core';
import { Menu } from '../menu';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  user: User;
  @Input()
  menus: Array<Menu>;

  constructor() {}

  ngOnInit(): void {}

}
