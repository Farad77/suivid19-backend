import { Component, OnInit } from '@angular/core';
import { LaboService } from 'src/app/services/labo.service';
import { ActivatedRoute } from '@angular/router';
import { CreateLaboDto } from '../create-labo-dto';

@Component({
  selector: 'app-create-labo',
  templateUrl: './create-labo.component.html',
  styleUrls: ['./create-labo.component.css']
})
export class CreateLaboComponent implements OnInit {
  labo: CreateLaboDto;

  constructor(private laboService: LaboService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.labo = new CreateLaboDto();
  }

  onSignIn() {
    // TODO : test if valid
    this.laboService.create(this.labo);
  }

}
