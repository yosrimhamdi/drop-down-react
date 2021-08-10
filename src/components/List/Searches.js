import React from 'react';

const Searches = ({ searches }) => {
  console.log('will render Searches');

  const renderedSearches = searches.map(({ pageid, title, snippet }) => (
    <div key={pageid}>
      <h1>{title}</h1>
      <p>{snippet}</p>
    </div>
  ));

  return <div>{renderedSearches}</div>;
};

export default Searches;
