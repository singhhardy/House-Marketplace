import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pagez/Explore";
import Offers from "./pagez/Offers";
import Profile from './pagez/Profile';
import SignIn from './pagez/SignIn';
import SignUp from './pagez/SignUp';
import Category from "./pagez/Category";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from './pagez/ForgotPassword'
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
