import { Component, OnInit } from '@angular/core';
import { CursesService } from '../shared/curses.service';

@Component({
  selector: 'app-curses',
  templateUrl: './curses.component.html',
  styleUrls: ['./curses.component.scss']
})
export class CursesComponent implements OnInit {

  curses: string[] = [];
  cursesService: CursesService;

  constructor(private _cursesService: CursesService) { 
    this.cursesService = _cursesService;
  }

  ngOnInit(): void {
    this.curses = this.cursesService.getCurses();
  }

}
