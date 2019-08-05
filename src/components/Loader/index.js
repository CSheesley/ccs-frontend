import React from 'react';
import { fredRogersQuotes } from '../../utils/text';

export const Loader = () => {
  const fredRogersQuote = fredRogersQuotes[Math.floor(Math.random() * fredRogersQuotes.length)];
  return (
    <article className="loader">
      <h1 className="loader-text">
        Loading...
      </h1>
      <p>
        Mr. Rodgers:
        {' '}
        {fredRogersQuote}
      </p>
      <div className="icon-spinner" />
    </article>
  );
};

export default Loader;
