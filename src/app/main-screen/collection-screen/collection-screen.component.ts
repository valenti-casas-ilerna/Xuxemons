import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {CollectionItem, ElementType} from "../models/collection-item";

@Component({
  selector: 'app-collection-screen',
  templateUrl: './collection-screen.component.html',
  styleUrls: ['./collection-screen.component.scss']
})
export class CollectionScreenComponent implements OnInit{
  collection: CollectionItem[] = [];
  gridColumns: number = 8;
  headers: string[] = [];
  data: any[] = [];

  constructor(
    private responsive: BreakpointObserver
  ) {}

  ngOnInit() {
    this.responsive.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        const breakpoints = result.breakpoints;

        this.gridColumns = 8;

        if (breakpoints[Breakpoints.Medium]) {
          this.gridColumns = 8;
        } else if (breakpoints[Breakpoints.Small]) {
          this.gridColumns = 6;
        } else if (breakpoints[Breakpoints.XSmall]) {
          this.gridColumns = 4;
        }
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const contents: string = e.target.result;
      this.parseCsv(contents);
      this.createCollectionItems();
    };

    reader.readAsText(file);
  }

  parseCsv(csvContent: string): void {
    const lines: string[] = csvContent.split('\n');
    this.headers = lines[0].split(',');

    this.data = [];

    for (let i = 1; i < lines.length; i++) {
      const cells: string[] = lines[i].split(',');
      if (cells.length === this.headers.length) {
        this.data.push(cells);
      }
    }
  }

  createCollectionItems(): void {
    this.collection = [];

    for (let i = 0; i < this.data.length; i++) {

      let collection_item: CollectionItem = {
        name: this.data[i][1],
        type: this.getElementType(this.data[i][2]),
        img: this.data[i][3],
        owned: ((Math.round(Math.random() * 100) % 2) == 0)
      };

      this.collection.push(collection_item);
    }
  }

  getElementType(element: string): ElementType {
    switch (element) {
      case ('Agua'):
        return ElementType.WATER;
      case ('Aire'):
        return ElementType.AIR;
      case ('Tierra'):
        return ElementType.EARTH;
      default:
        return ElementType.NONE;
    }
  }

}
