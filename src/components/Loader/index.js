import React from 'react';
import { fredRogersQuotes } from '../../utils/text';

export const Loader = () => {
  const fredRogersQuote = fredRogersQuotes[Math.floor(Math.random() * fredRogersQuotes.length)];
  return (
    <article className="loader">
      <h2 className="loader-text">Loading...</h2>
      <p className="quote-text">
        {fredRogersQuote}
        {' '}
        <strong> -Fred Rogers</strong>
      </p>
      <div className="icon-spinner" />
    </article>
  );
};

export default Loader;
