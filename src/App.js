import React, { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal";
import { Sidebar } from "./components/sidebar";
import AspectRatioOutlinedIcon from "@material-ui/icons/AspectRatioOutlined";

const Logo = ({ ModalToggle, modal }) => {
  return (
    <React.Fragment>
      <img
        onClick={ModalToggle}
        className="logo"
        src={require("./testImage.png")}
        alt="logo"
      />
     {modal ? <React.Fragment/> : <AspectRatioOutlinedIcon className='icon'/>} 
    </React.Fragment>
  );
};

function Image({modalOn, setModalOn}) {
  const ModalToggle = () => {
    setModalOn(!modalOn);
  };
  if (!modalOn) {
    return (
      <div className="modal-container">
        <Logo modal={false} ModalToggle={ModalToggle} />{" "}
      </div>
    );
  } else {
    return (
      <Modal>
        <Logo modal={true} ModalToggle={ModalToggle} />
      </Modal>
    );
  }
}

function App() {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div className="container" onClick={()=>{if (modalOn) setModalOn(false)}}>
      <Sidebar />
      <Image modalOn={modalOn} setModalOn={setModalOn}/>
    </div>
  );
}
export default App;
