export interface CollectionItem {
  img: string;
  name: string;
  type: ElementType;
  owned: boolean;
}

export enum ElementType {
  NONE,
  EARTH,
  WATER,
  AIR
}
