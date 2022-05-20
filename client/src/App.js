import React, { useReducer } from 'react';
import Routes from './components';
import { LayoutContext, layoutState, layoutReducer } from './components/shop';

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </>
  );
}

export default App;
