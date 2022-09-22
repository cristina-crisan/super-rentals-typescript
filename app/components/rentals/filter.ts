import Component from '@glimmer/component';
import RentalModel from 'super-rentals/models/rental';
import { RentalsFilterArgs } from 'super-rentals/interfaces/rentals-filter-args';

export default class RentalsFilterComponent extends Component<RentalsFilterArgs>  {
  get results(): Array<RentalModel> {
    let { query } = this.args;
    let rentals = this.args.rentals.toArray();

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}
