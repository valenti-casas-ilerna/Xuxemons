import {Component, Input} from '@angular/core';
import {CollectionItem, ElementType} from "../../models/collection-item";

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent {

  @Input() xuxemon: CollectionItem = {
    name: 'Sin nombre',
    img: '',
    type: ElementType.NONE,
    owned: false
  };

  getRouteToImage(imgName: string): string {
    return `assets/collections/${imgName}`;
  }

  getElementName(elementType: ElementType): string {
    switch (elementType) {
      case ElementType.AIR:
        return 'AIRE';
      case ElementType.EARTH:
        return 'TIERRA';
      case ElementType.WATER:
        return 'AGUA';
      default:
        return 'Sin tipo';
    }
  }

}
