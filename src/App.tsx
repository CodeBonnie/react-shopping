import './App.css';
import Navbar from './components/navbar/NavBar';

import Shop from './pages/shop/Shop';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
