import React from 'react';
// import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, createContext } from 'react';
export let GlobalData = createContext();
function App() {
  let [isTableComponent, setIsTableComponent] = useState(false);
  let [row, setRow] = useState(0);
  let [column, setColumn] = useState(0);

  const { isLoading, loginWithRedirect, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  !isAuthenticated && loginWithRedirect();
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
