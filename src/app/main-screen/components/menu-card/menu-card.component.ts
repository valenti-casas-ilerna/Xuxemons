import {Component, Input} from '@angular/core';
import {MenuCard} from "../../models/menu-card";

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {

  @Input() menuCard: MenuCard = {
    title: 'No-Title',
    img: ''
  };

}
