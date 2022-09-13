import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
 import './index.css'



  const container = document.querySelector("#root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
