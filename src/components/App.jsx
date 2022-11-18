import { AppBar } from './AppBar/AppBar';
import { Phonebook } from './PhoneBook/Phonebook';
import { HomePage } from './HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/phonebook" element={<Phonebook />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
