import './App.css';
import PageWrapper from './components/PageWrapper';
import { useState } from 'react';
import { UsersData, UsersTasksData } from './api/context';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [users, setUsers] = useState([]);
  const [usersTaskData, setUsersTaskData] = useState([]);

  return (
    <BrowserRouter>
      <UsersData.Provider value={[users, setUsers]}>
        <UsersTasksData.Provider value={[usersTaskData, setUsersTaskData]}>
          <div className="App">
            <PageWrapper />
          </div>
        </UsersTasksData.Provider>
      </UsersData.Provider>
    </BrowserRouter>
    
  );
}

export default App;
