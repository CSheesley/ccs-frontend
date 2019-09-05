/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Phone from '../../assets/images/icons/phone';
import Text from '../../assets/images/icons/text';
import WalkIn from '../../assets/images/icons/walkIn';

export class Button extends Component {
  render() {
    const { kind, size } = this.props;
    return (
      <>
        {size === 'small' && kind === 'call' && (
          <a
            className={`call-btn ${size} btn`}
            href="tel: +1-844-493-8255"
            aria-label="Call 1-844-493-TALK (8255)"
            title="Call 1-844-493-TALK (8255)"
          >
            <Phone />
          </a>
        )}
        {kind === 'call' && size === 'large' && (
          <a className={`call-btn ${size} btn`} href="tel: +1-844-493-8255">
            CALL
            <Phone />
          </a>
        )}
        {kind === 'text' && (
          <a className={`text-btn ${size} btn`} href="sms:38255&body=TALK%0A">
            TEXT
            <Text />
          </a>
        )}
        {kind === 'walk-in' && (
          <NavLink className={`walk-in-btn ${size} btn`} to="/walk-in">
            WALK-IN
            <WalkIn />
          </NavLink>
        )}
      </>
    );
  }
}

export default Button;

Button.propTypes = {
  kind: PropTypes.string,
  size: PropTypes.string
};
