import { Injectable } from '@angular/core';
import * as data from './data/blob';

@Injectable()
export class BelgiumZipcodeService {

  constructor() { }
  toCity(zip: number, keepOriginalFormat: boolean) {
  //  if (!zip) { throw 'Need a zip code'; };
    if (isNaN(zip)) { throw 'The zip code cannot be NaN.'; };
    if (keepOriginalFormat) {
      return data.default.zips[zip];
    } else {
      if (data.default.zips[zip] !== undefined) {
        return data.default.zips[zip].map(function (city) {
          return city.toLowerCase().replace(/\b\w/g, function (m) {
            return m.toUpperCase();
          });
        });
      }
    }
  };


	/**
	 * Takes a city name as a parameter, and returns valid zip codes for that
	 * particlar city.
	 */

  toZip(city) {
    if (!city) { throw 'Need a city name'; };

    // If we have a direct hit:
    if (data.default.cities[city]) {
      return data.default.cities[city];
    }
    // If we don't...
    let knownCity = '';
    let buff = '';

    for (knownCity in data.default.cities) {
      if (data.default.cities.hasOwnProperty(knownCity)) {
        if (knownCity.indexOf("'") !== -1) {
          buff = knownCity.replace("\\\'", "'");
          if (buff.toLowerCase().trim() === city.toLowerCase().trim()) {
            return data.default.cities[knownCity];
          }
        } else if (knownCity.toLowerCase().trim() === city.toLowerCase().trim()) {
          return data.default.cities[knownCity];
        }
      }
    }
  };


	/**
	 * Takes a city name and a zip code as parameters.
	 * Returns a simple boolean.
	 */

  isValid(zip, city) {

    if (!city || !zip) { throw 'Need both a zip and a city name'; };
    if (isNaN(zip)) { throw 'The zip code cannot be NaN.'; };

    let cities = this.toCity(zip, false);
    let knownCity: string;
    let i = 0,
      len = cities.length;

    for (; i < len; i++) {
      knownCity = cities[i];
      if (knownCity.indexOf("'") !== -1) {
        let buff = knownCity.replace("\\\'", "'");
        if (buff.toLowerCase().trim() === city.toLowerCase().trim()) {
          return true;
        }
      } else if (knownCity.toLowerCase().trim() === city.toLowerCase().trim()) {
        return true;
      }
    }

    return false;
  };
}
