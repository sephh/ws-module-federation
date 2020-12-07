import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Authenticated = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="authenticated">
      <div className="authenticated__content">
        <h2>Você está logado, na aplicação Auth.</h2>

        <div>
          <label>Name</label>: {currentUser?.name}
        </div>

        <div>
          <label>Email</label>: {currentUser?.email}
        </div>
      </div>
    </div>
  );
};

export default Authenticated;
