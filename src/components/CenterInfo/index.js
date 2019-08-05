import React from 'react';
import PropTypes from 'prop-types';

const CenterInfo = (props) => {
  console.log(props);
  const {
    name,
    website,
    logo,
    address,
    phone,
    city
  } = props;

  const queryParams = address && `${address.street.split(' ').join('+')}+${address.zip}`;

  const phoneNum = (num) => {
    const cleaned = (`${num}`).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  };


  return (
    <article className="center-card">
      <header className="card-header">
        <img
          src={logo}
          alt="Center logo"
          className="cover-image"
        />

      </header>
      <main className="card-main">
        <h3 className="center-name">
          {name}
        </h3>
        <address className="center-info">
          <h4 className="phone-heading addr">
          phone:
          </h4>
          <a
            className="address-block"
            href="tel:3034250300"
          >
            {phoneNum(phone)}
          </a>
          <h4 className="address-heading addr">
          address:
          </h4>
          <a href={`https://www.google.com/maps/search/?api=1&query=${queryParams}`} target="_blank" rel="noopener noreferrer">
            {address !== undefined && (
              <ul className="address-ul address-block" aria-label="center address">
                <li>{address.street}</li>
                <li>{`${address.city}, CO ${address.zip}`}</li>
              </ul>
            )
            }
          </a>
        </address>
      </main>
      <a
        className="map-link"
        href={website}
      >
        visit their site
      </a>
    </article>
  );
};
CenterInfo.propTypes = {
  city: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string
};
export default CenterInfo;

// `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=driving`;
// `https://www.google.com/maps/search/?api=1&query=${address.lat},{address.lng}`
