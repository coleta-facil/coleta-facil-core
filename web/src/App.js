import React from "react";
import firebase from "firebase/app";

import Routes from "./routes";
import { firebaseConfig } from "./constants/config";

// Inicializa o app firebase no projeto
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const App = () => {
  return <Routes />;
};

export default App;
