import React, {useState} from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.scss';

export const UserContext = React.createContext(null);

function App() {
  let [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        {routes}
      </UserContext.Provider>
    </div>
  );
}

export default App;
