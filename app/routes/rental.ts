import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import DS from 'ember-data';
import { RentalRouteParams } from 'super-rentals/interfaces/rental-route-params';
import RentalModel from 'super-rentals/models/rental';

export default class RentalRoute extends Route {
  @service declare store: Store;

  model(
    params: RentalRouteParams
  ): DS.PromiseObject<RentalModel> {
    return this.store.findRecord('rental', params.rental_id);
  }
}
