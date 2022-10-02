import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ListUser, CreateUser, EditUser, Spinner, Overlay, Header } from './components'

function App() {
  
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path='/' element={<CreateUser/>} />
        <Route path='user/list' element={<ListUser/>} />
        <Route path='user/:id/edit' element={<EditUser/>} />
      </Routes>
      <Spinner />
      <Overlay />
    </div>
  );
}

export default App;
