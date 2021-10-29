import { CursesService } from './../curses.service';
import { Component, OnInit } from '@angular/core';
import { Curse } from '../curse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curses-list',
  templateUrl: './curses-list.component.html',
  styleUrls: ['./curses-list.component.scss'],
  preserveWhitespaces: true
})
export class CursesListComponent implements OnInit {

  //curses!: Curse[];

  curses$!: Observable<Curse[]>
;
  constructor(private service: CursesService) { }

  ngOnInit(): void {
    /*this.service.list()
    .subscribe(datas => this.curses = datas);*/

    this.curses$ = this.service.list();
  }

}
