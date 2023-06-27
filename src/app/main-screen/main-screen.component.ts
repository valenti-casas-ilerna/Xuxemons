import {Component, OnInit} from '@angular/core';
import {MenuCard} from "./models/menu-card";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit{

  menucards: MenuCard[] = [];
  gridColumns: number = 3;

  constructor(
    private responsive: BreakpointObserver
  ) {
    this.menucards.push({title: 'Tienda', img: 'assets/menu/store.png'});
    this.menucards.push({title: 'Colección', img: 'assets/menu/xuxedex.png'});
    this.menucards.push({title: 'Hospital', img: 'assets/menu/hospital.png'});
  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        const breakpoints = result.breakpoints;

        this.gridColumns = 3;

        if (breakpoints[Breakpoints.Medium]) {
          this.gridColumns = 3;
        } else if (breakpoints[Breakpoints.Small]) {
          this.gridColumns = 2;
        } else if (breakpoints[Breakpoints.XSmall]) {
          this.gridColumns = 1;
        }
      });
  }

}
