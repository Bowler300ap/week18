
import type { Club } from '../types';
import { useEffect, useState } from 'react';
import { getAllClubs } from '../Services/ClubServices';


export default function GolfTable() {
    const [ clubs, setClubs ] = useState<Club[] | null>([]);
    useEffect(() => {
        (async () => { 
            let clubs = await getAllClubs();
    setClubs(clubs);
        })();
    }, []);

    let rows = clubs?.map((club, index) => (
        <tr key ={club?.club || index}>
            <td>{club?.club}</td>
            <td>${club?.price.toFixed(2)}</td>
            <td>{club?.inStock ? 'Yes' : 'No'}</td>
        </tr>
    ));


    return(
    <table className="table table-striped">
        <caption>Golf Clubs</caption>
        <thead>
            <tr>
                <td>Club</td>
                <td>Price</td>
                <td>In Stock</td>
            </tr>
        </thead>
            <tbody>
            {rows}
            </tbody>
    </table>
    );
}