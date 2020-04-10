import { Component, OnInit } from '@angular/core';
import { LaboService } from 'src/app/services/labo.service';
import { Labo } from '../labo';

@Component({
  selector: 'app-list-labos',
  templateUrl: './list-labos.component.html',
  styleUrls: ['./list-labos.component.css']
})
export class ListLabosComponent implements OnInit {
  labos: Labo[];

  constructor(private laboService: LaboService) { }

  ngOnInit(): void {
    this.laboService.getLabos().then((labos: Labo[]) => {
      this.labos = labos;
      console.log(this.labos);
    });
  }

}
