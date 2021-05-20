import React from 'react';
import MyContext from './Context';

function Provider({ children }) {
  const { Provider } = MyContext;
  return(
    <Provider>
      { children }
    </Provider>
  );
}

export default Provider;
