import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
   const countries=use(countriesPromise);
   console.log(countries);
    return (
        <div>
             <h2>Traveling Countries: {countries.length}</h2>
             {
                countries.map((countries)=><Countries> </Countries>)
             }
        </div>
    );
};

export default Countries;