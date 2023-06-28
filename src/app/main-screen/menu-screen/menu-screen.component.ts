import {Component, OnInit} from '@angular/core';
import {MenuCard} from "../models/menu-card";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.scss']
})
export class MenuScreenComponent implements OnInit {

  menucards: MenuCard[] = [];
  gridColumns: number = 3;

  constructor(
    private responsive: BreakpointObserver
  ) {
    this.menucards.push({title: 'Tienda', img: 'assets/menu/store.png', url:'../'});
    this.menucards.push({title: 'Colección', img: 'assets/menu/xuxedex.png', url:'../collection'});
    this.menucards.push({title: 'Hospital', img: 'assets/menu/hospital.png', url:'../'});
    this.menucards.push({title: 'Inventario', img: 'assets/menu/bag.png', url:'../'});
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
