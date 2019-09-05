import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, Marker, Popup, TileLayer
} from 'react-leaflet';
import L from 'leaflet';
import WalkInIcon from '../../assets/images/icons/walkIn';

const Atlas = (props) => {
  const { userLocation, closestLocation } = props;
  const centerMarker = new L.icon({
    iconUrl: require('../../assets/images/icons/center.svg'),
    iconSize: new L.Point(35, 46)
  });
  return (
    <Map
      id="mapid"
      keyboard="true"
      bounds={[[userLocation], [closestLocation.lat, closestLocation.lng]]}
      center={userLocation}
      zoom={13}
      boundsOptions={{ padding: [50, 50] }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker keyboard="true" title="Your Location" position={userLocation}>
        <Popup>Your Location</Popup>
      </Marker>
      <Marker
        keyboard="true"
        title="Closest Walk-In Center"
        position={[closestLocation.lat, closestLocation.lng]}
        icon={centerMarker}
      >
        <Popup>
          <address className="map-marker-addr">
            <h3 className="map-marker-center-name">{closestLocation.name}</h3>
            {closestLocation.street}
            {' '}
            <br />
            {closestLocation.city}
,
            {'  '}
            {closestLocation.zip}
          </address>
        </Popup>
      </Marker>
    </Map>
  );
};

export default Atlas;

Atlas.propTypes = {
  userLocation: PropTypes.object,
  closestLocation: PropTypes.object
};
