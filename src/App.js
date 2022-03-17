import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    console.log("Reachedalert");
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        abouttext="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        heading="Try TextUtils - Charchter counter, Word counter, Uppercase to Lowercase, Lowercase to Uppercase"
        mode={mode}
        showAlert={showAlert}
      />
    </>

    //  <Router>
    //     <Navbar
    //       title="Text Utils"
    //       abouttext="About"
    //       mode={mode}
    //       toggleMode={toggleMode}
    //     />
    //     <Alert alert={alert} />

    //       <Routes>
    //         <Route exact path="/about" element={<About mode={mode} />}></Route>
    //         <Route
    //           exact
    //           path="/"
    //           element={
    //             <TextForm
    //               heading="Try TextUtils - Charchter counter, Word counter, Uppercase to Lowercase, Lowercase to Uppercase"
    //               mode={mode}
    //               showAlert={showAlert}
    //             />
    //           }
    //         ></Route>
    //       </Routes>

    //   </Router>
  );
}

export default App;
