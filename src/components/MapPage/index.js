/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Atlas from '../Atlas';
import Modal from '../Modal';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';

const MapPage = () => {
  const [userLocation, setUserLocation] = useState([]);
  const [closestLocation, setClosestLocation] = useState({});

  useEffect(() => {
    if (userLocation.length) {
      fetchLocations();
    }
  }, [userLocation]);

  const fetchLocations = async () => {
    try {
      const url = `https://cohelp-backend.herokuapp.com/api/v1/locations/sort?lat=${
        userLocation[0]
      }&lng=${userLocation[1]}`;
      const response = await fetchLocationsCall(url);
      setClosestLocation(response.locations[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const url = mode => {
    `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${
      userLocation[1]
    }&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=${mode}`;
  };

  const drivingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${
    userLocation[1]
  }&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=driving`;
  const walkingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${
    userLocation[1]
  }&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=walking`;
  const transitUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${
    userLocation[1]
  }&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=transit`;
  const bikingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${
    userLocation[1]
  }&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=bicycling`;

  return (
    <main className="map-page">
      {!closestLocation.lat && (
        <Modal userLocation={{ userLocation: [userLocation, setUserLocation] }} />
      )}
      {closestLocation.lat && (
        <article className="map-area">
          <p className="center-distance-text">
            The closest walk-in crisis center is {closestLocation.name}, and is{' '}
            {closestLocation.miles} miles away.
          </p>
          <map className="map-wrapper">
            <Atlas userLocation={userLocation} closestLocation={closestLocation} />
          </map>
          <h4 className="get-directions-heading">GET DIRECTIONS:</h4>
          <div className="directions-wrapper">
            <a
              className="map-icon-link"
              href={url('driving')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="svg-icon directions-icon car-icon"
                src={require('../../assets/images/icons/car.svg')}
                alt="car directions link"
                aria-label="Driving Directions"
              />
              <p role="description" className="map-btn-text">
                DRIVE
              </p>
            </a>
            <a
              className="map-icon-link"
              href={walkingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Walking Directions"
            >
              <img
                className="svg-icon directions-icon walk-icon"
                src={require('../../assets/images/icons/walk.svg')}
                alt="walking directions link"
              />
              <p role="description" className="map-btn-text">
                WALK
              </p>
            </a>
            <a
              className="map-icon-link"
              href={bikingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Biking Directions"
            >
              <img
                className="svg-icon directions-icon bike-icon"
                src={require('../../assets/images/icons/bike.svg')}
                alt="biking directions link"
              />
              <p role="description" className="map-btn-text">
                BIKE
              </p>
            </a>
            <a
              className="map-icon-link"
              href={transitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Public Transit Directions"
            >
              <img
                className="svg-icon directions-icon bus-icon"
                src={require('../../assets/images/icons/bus.svg')}
                alt="public transit directions link"
              />
              <p role="description" className="map-btn-text">
                TRANSIT
              </p>
            </a>
          </div>
        </article>
      )}
    </main>
  );
};

export default MapPage;
