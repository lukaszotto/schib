import React from 'react';
import { fetchAll } from '../api/fetch';

const HomeComponent = () => {
    fetchAll('yellow+snow').then((resArr) => {
        console.log(resArr);
    })
    return (
        <section>
            <h3>Search</h3>
        </section>
    )
};
export default HomeComponent;