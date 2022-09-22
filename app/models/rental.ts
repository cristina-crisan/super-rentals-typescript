import Model, { attr } from '@ember-data/model';
import { MapLocation } from 'super-rentals/interfaces/MapLocation';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  //use declare property modifier . Ts doesn't know that @attr decorator makes the properties exist 
  @attr declare title: string;
  @attr declare owner: string;
  @attr declare city: string;
  @attr declare location: MapLocation;
  @attr declare category: string;
  @attr declare image: string;
  @attr declare bedrooms: number;
  @attr declare description:string;

  //Missing return type

  get type(): 'Community' | 'Standalone' {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    rental: RentalModel;
  }
}