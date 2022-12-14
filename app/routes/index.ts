import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import DS from 'ember-data';
import RentalModel from 'super-rentals/models/rental';

export default class IndexRoute extends Route {
  @service declare store: Store;

   model(): DS.PromiseArray<RentalModel>{
    return this.store.findAll('rental');
  }
}
