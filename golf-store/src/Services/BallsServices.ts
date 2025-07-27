import config from '../config';
import type { Balls } from '../types';

/**
 * Converts a JSON object to a Ball type.
 * @param json - The JSON object to convert.
 * @returns A Club object or null if the input is invalid.
 */

function toBall(json: any): Balls | null {
    if (json) {
    return {
        name: json.name,
        price: json.price,
        inStock: json.inStock
    };
    }
    return null;
}

export async function getAllBalls(): Promise<Balls[] | null> {
const url = `${config.baseUrl}/ball`;
const response = await fetch(url);
const json = await response.json();


return json.map((j: any) => toBall(j));
}