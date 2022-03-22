import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormValidator from "./components/form";

function App() {
  const professions = ['Developer', 'Designer', 'Other'];
  //TODO create formik instance

  return (
    <div className="App">
     <FormValidator />
    </div>
  );
}

export default App;
