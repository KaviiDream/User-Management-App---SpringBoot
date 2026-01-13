import logo from './logo.svg';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
