import { AppBar } from './AppBar/AppBar';
import { Phonebook } from './PhoneBook/Phonebook';
import { HomePage } from './HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { useEffect } from 'react';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/phonebook"
            element=<PrivateRoute
              redirectTo="/login"
              component={<Phonebook />}
            />
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/phonebook" component={<Register />} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/phonebook" component={<Login />} />
            }
          ></Route>
        </Routes>
      </>
    )
  );
};
