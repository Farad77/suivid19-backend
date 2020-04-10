import { Component, OnInit } from '@angular/core';
import { Ide } from '../ide';
import { IdeService } from 'src/app/services/ide.service';

@Component({
  selector: 'app-list-ides',
  templateUrl: './list-ides.component.html',
  styleUrls: ['./list-ides.component.css']
})
export class ListIdesComponent implements OnInit {
  ides: Ide[];

  constructor(private ideService: IdeService) { }

  ngOnInit(): void {
    this.ideService.getIdes().then((ides: Ide[]) => {
      this.ides = ides;
      console.log(this.ides);
    });
  }

}
