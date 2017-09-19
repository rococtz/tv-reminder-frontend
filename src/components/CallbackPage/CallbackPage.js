import React from 'react';

const CallbackPage = ({ history }) => {
  setTimeout(() => {
    history.push({ pathname: '/schedule' });
  }, 0);
  return (
    <div>
      <h2> Redirecting....</h2>
    </div>
  );
};

export default CallbackPage;