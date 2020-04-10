import { Component, OnInit, Inject, Input } from '@angular/core';
import { Menu } from '../menu';
import { UserSession } from '../user-session';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  user: UserSession;
  @Input()
  menus: Array<Menu>;

  constructor() {}

  ngOnInit(): void {}

}
