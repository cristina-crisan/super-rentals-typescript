import IndexRoute from "../routes";
import { ModelFrom } from "utils";
import RentalsComponent from '../components/rentals';

export interface RentalsFilterArgs {
    //use the ModelFrom utility type https://docs.ember-cli-typescript.com/cookbook/working-with-route-models 
    //after the creation of utils file
    rentals: ModelFrom<IndexRoute>;
     query: RentalsComponent['query'];
}