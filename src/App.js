import './App.css';
import PageWrapper from './components/PageWrapper';
import { useState } from 'react';
import { UsersData, UsersTasksData } from './api/context';


function App() {

  const [users, setUsers] = useState([]);
  const [usersTaskData, setUsersTaskData] = useState([]);

  return (
    <UsersData.Provider value={[users, setUsers]}>
      <UsersTasksData.Provider value={[usersTaskData, setUsersTaskData]}>
        <div className="App">
          <PageWrapper />
        </div>
      </UsersTasksData.Provider>
    </UsersData.Provider>
  );
}

export default App;
