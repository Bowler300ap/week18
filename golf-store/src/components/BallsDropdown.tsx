import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAllBalls} from '../Services/BallsServices';
import type { Balls } from '../types';

export default function BallsDropdown() {
    const [balls, setBalls] = useState<Balls[] | null>([]);
    useEffect(() => {
    
    (async () => {
        let balls = await getAllBalls();
        setBalls(balls);
    }
)();
    }, []);

    let options = balls?.map((ball, index) => (
        <option key={ball.name || index} value={ball.name}>
            {ball.name} - ${ball.price.toFixed(2)} - {ball.inStock ? 'In Stock' : 'Out of Stock'}
        </option>
    ));
    return(
    <select className="form-select">
        { options }
        </select>
    );
}
