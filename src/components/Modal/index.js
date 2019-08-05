import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';
import { Loader } from '../Loader';

const Modal = (props) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const {
    userLocation: [userLocation, setUserLocation]
  } = {
    ...(props.userLocation)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchUsingAddress = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${streetAddress.split(' ').join('+')},+${city.split(' ').join('+')},+CO&key=${apiKey}`;
      const response = await fetchLocationsCall(url);
      const { lat, lng } = response.results[0].geometry.location;
      setUserLocation([lat, lng]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLocation = () => {
    setIsLoading(true);
    window.navigator.geolocation.getCurrentPosition(position => setUserLocation([position.coords.latitude, position.coords.longitude]));
  };

  return (
    <article className="modal">
      {
        isLoading
        && <Loader />
      }
      {
        !isLoading
        && (
        <>
          <button
            className="modal-btn use-loc-btn btn"
            type="button"
            onClick={getUserLocation}
          >
            Use Current Location
            <img
              alt="current location icon"
              aria-hidden="true"
              className="btn-icon icon-current-location svg-icon"
              src={require('../../assets/images/icons/get-location.svg')}
            />
          </button>
          <button
            className="modal-btn enter-address-btn btn"
            type="button"
            onClick={() => setCanEnterAddress(!canEnterAddress)}
          >
              Enter Address
            <img
              aria-hidden="true"
              alt="enter address svg-icon"
              className="btn-icon svg-icon"
              src={require('../../assets/images/icons/location.svg')}
            />
          </button>
          {
            canEnterAddress
            && (
            <form className="address-form" onSubmit={fetchUsingAddress}>

              <label htmlFor="street-address">Street Address</label>
              <input
                name="street-address"
                className="modal-input street-input"
                type="text"
                placeholder="Street Address"
                autoComplete="shipping street-address"
                onChange={e => setStreetAddress(e.target.value)}
              />
              <label htmlFor="zip-code">ZIP Code</label>
              <input
                name="zip-code"
                className="modal-input zip-input"
                type="number"
                placeholder="ZIP"
                autoComplete="shipping postal-code"
                onChange={e => setZipCode(e.target.value)}
              />
              <label htmlFor="city">City</label>
              <input
                name="city"
                className="modal-input city-input"
                type="text"
                placeholder="City"
                autoComplete="shipping locality"
                onChange={e => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="modal-btn submit-btn btn"
              >
                Submit
              </button>
            </form>
            )
          }
          <NavLink
            className="back-btn btn modal-btn"
            to="/"
          >
            Go Back
          </NavLink>
        </>
        )
      }
    </article>
  );
};

export default Modal;

Modal.propTypes = {
  userLocation: PropTypes.object
};
