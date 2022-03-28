import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { login, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      }
    });
  }, [dispatch]);

  console.log(user);

  return <div>{user ? <Home /> : <Login />}</div>;
}

export default App;
