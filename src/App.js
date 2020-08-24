import React, { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Image } from "./components/image";

function App() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div
      className="container"
      onClick={() => {
        if (modalOn) setModalOn(false);
      }}
    >
      <Sidebar />
      <Image modalOn={modalOn} setModalOn={setModalOn} />
    </div>
  );
}
export default App;
