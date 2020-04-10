import { Component, OnInit } from '@angular/core';
import { CreateIdeDto } from '../create-ide-dto';
import { IdeService } from 'src/app/services/ide.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-ide',
  templateUrl: './create-ide.component.html',
  styleUrls: ['./create-ide.component.css']
})
export class CreateIdeComponent implements OnInit {
  ide: CreateIdeDto;

  constructor(private ideService: IdeService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ide = new CreateIdeDto();
  }

  onSignIn() {
    // TODO : test if valid
    this.ideService.create(this.ide);
  }
}
