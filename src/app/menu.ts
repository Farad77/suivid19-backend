export class Menu {
  title: string;
  path: string;
  icon: string;
  roles: string[];
  isLink: boolean;
  subs: Menu[];

  constructor(title: string, path: string, icon: string = '', roles: string[] = [], isLink: boolean = true, subs: Menu[] = []) {
    this.title = title;
    this.path = path;
    this.icon = icon;
    this.roles = roles;
    this.isLink = isLink;
    this.subs = subs;
  }
}
