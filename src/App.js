import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home/Home";
import Features from "./Pages/home/Features/Features";
import Login from "./Pages/home/Login/Login";
import About from "./Pages/home/About/About";
import Demos from "./Pages/home/Demos/Demos";
import SignUp from "./Pages/SignUp/SignUp";
import Contact from "./Pages/home/Contact/Contact";
import DemoDetail from "./Pages/home/DemoDetail/DemoDetail";
import RequireAuth from "./Pages/home/RequireAuth/RequireAuth";
import Proceed from "./Pages/home/Proceed/Proceed";
import AddDemo from "./Pages/home/AddDemo/AddDemo";
import ManageDemos from "./Pages/ManageDemos/ManageDemos";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/demos" element={<Demos></Demos>}></Route>
        <Route
          path="/demos/:demoId"
          element={<DemoDetail></DemoDetail>}
        ></Route>

        <Route
          path="/checkout/:demoId"
          element={
            <RequireAuth>
              <Proceed></Proceed>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/adddemo"
          element={
            <RequireAuth>
              <AddDemo></AddDemo>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageDemos></ManageDemos>
            </RequireAuth>
          }
        ></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
