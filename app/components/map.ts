import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';
import { MapArgs } from 'super-rentals/interfaces/map-args';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component<MapArgs> {
  get lng(): number | undefined {
    return this.args.lng;
  }

  get lat(): number | undefined{
    return this.args.lat;
  }

  get src(): string {
    let { width, height, zoom } = this.args;
    let { lng, lat } = this;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token(): string {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
