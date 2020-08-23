import React, { useState } from "react";
import "./sidebar.css";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import FolderIcon from "@material-ui/icons/Folder";
import $ from "jquery";

const Folders = ({ folderArr }) => {
  return folderArr.map((folder) => <Folder folder={folder} />);
};

const Folder = ({ folder }) => {
  const [editable, setEditable] = useState(false);

  function setEditableFalse(value) {
    folder.name = value;
    setEditable(false);
  }
  function keyPress(e) {
    if (e.keyCode === 13 || e.key === "Escape") {
      setEditableFalse(e.target.value);
    }
  }
  let displayName;
  if (folder.name.length > 10) {
    displayName = folder.name.slice(0, 10) + "...";
  } else {
    displayName = folder.name;
  }
  console.log(displayName)
  if (!editable) {
    return (
      <div className="folder">
        <FolderIcon className='foldericon'/>
        <h3 className="text">{displayName}</h3>
        <EditIcon className='editicon' onClick={() => setEditable(true)} />
      </div>
    );
  } else {
    return (
      <div className="folder">
        <FolderIcon className='foldericon'/>
        <TextField
          autoFocus
          defaultValue={folder.name}
          onBlur={(e) => setEditableFalse(e.target.value)}
          onKeyDown={keyPress}
        />
        <EditIcon className="editicon" onClick={() => setEditable(false)} />
      </div>
    );
  }
};

export const Sidebar = () => {
  let folderArr = [
    { name: "folder1" },
    { name: "folder2" },
    { name: "folder3" },
    { name: "folder4" },
    { name: "folder5" },
  ];
  return (
    <div className="sidebar">
      <div className="box">
        <Folders folderArr={folderArr} />
      </div>
    </div>
  );
};
