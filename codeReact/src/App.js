import "./App.scss";
import Header from "./Components/Header/Header";
import AppRoutes from "./AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostsArrayAC, getUsersArrayAC } from "./store/actionCreators";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersArrayAC());
    dispatch(getPostsArrayAC());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
