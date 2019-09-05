import React, { useEffect, useState } from 'react';
import Center from '../CenterInfo';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';


export const AllCentersPage = () => {
  const [allCenters, setAllCenters] = useState([]);
  useEffect(() => {
    fetchLocationsCall('https://cohelp-backend.herokuapp.com/api/v1/locations')
      .then(result => setAllCenters(result.locations))
      .catch(err => alert(`Oh no! We ran into a problem: ${err}`));
  }, []);

  const centers = allCenters.map(center => (
    <>
      <h3 className="center-city-heading">
        {center.city}
      </h3>
      <Center
        key={center.city}
        city={center.city}
        phone={center.phone}
        address={center}
        name={center.name}
        website={center.website}
        logo={center.logo}
      />
    </>
  ));
  return (
    <main className="all-centers">
      <h2 className="all-centers-heading">
        Walk-In Crisis Centers
      </h2>
      <p className="center-hours">
        All locations are open 24 hours a day, 7 days a week, 365 days a year.
      </p>
      {centers}
    </main>
  );
};

export default AllCentersPage;
