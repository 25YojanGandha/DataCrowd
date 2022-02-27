import './App.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, createContext } from 'react';
export let GlobalData = createContext();
function App() {
  let [isTableComponent, setIsTableComponent] = useState(false);
  let [row, setRow] = useState(0);
  let [column, setColumn] = useState(0);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  !isLoading && !isAuthenticated && loginWithRedirect();
  if (isLoading || !isAuthenticated)
    return (
      <div className='loading'>
        <div class='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <>
      <GlobalData.Provider
        value={{
          isTableComponent,
          setIsTableComponent,
          row,
          setRow,
          column,
          setColumn,
        }}
      >
        {isAuthenticated && <Dashboard />}
      </GlobalData.Provider>
    </>
  );
}

export default App;
