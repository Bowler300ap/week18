import config from '../config';
import type { Club } from '../types';

/**
 * Converts a JSON object to a Club type.
 * @param json - The JSON object to convert.
 * @returns A Club object or null if the input is invalid.
 */

function toClub(json: any): Club | null {
    if (json) {
    return {
        club: json.name,
        price: json.price,
        inStock: json.inStock
    };
    }
    return null;
}

export async function getAllClubs(): Promise<Club[] | null> {
const url = `${config.baseUrl}/clubs`;
const response = await fetch(url);
const json = await response.json();

//let clubs = []
//for (let j of json) {
//   clubs.push(toClub(j));
//}
//return clubs; 
return json.map((j: any) => toClub(j));
}