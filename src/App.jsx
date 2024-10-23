import "./App.css";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/offcanvas'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
