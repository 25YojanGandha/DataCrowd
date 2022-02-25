import './App.css';
import * as React from 'react';
import { createContext, useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

export let GlobalData = createContext();

function App() {

  let [userInfo,setUserInfo] = useState({});
  let [row, setRow] = useState(0);
  let [column, setColumn] = useState(0);
  let [columnInfo, setColumnInfo] = useState({});

  return (
    <GlobalData.Provider
      value={{
        userInfo,
        setUserInfo,

        row,
        setRow,

        column,
        setColumn,

        columnInfo,
        setColumnInfo
      }}
    >
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
      {/* {console.log(userInfo)} */}
    </GlobalData.Provider>
  );
}

export default App;
