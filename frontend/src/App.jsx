import MainLayout from "./containers/MainLayout";
import { Navigate } from "react-router-dom";

const App = () => {

  return localStorage.getItem("token") ? <MainLayout/> : <Navigate to="/login" replace={true} />

};
export default App;
