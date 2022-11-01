import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import AddWOrd from "./components/AddWord";
import VerifyWord from "./components/VerifyWord";
import DisplayMessage from "./components/DisplayMessage";


const App = () => {

  const [inputToAdd, addInput] = useState("");
  const [list, setList] = useState([]);
  const [inputToVerify, verifyInput] = useState("");
  const [searchMessage, setSearchMessage] = useState([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <AddWOrd 
          inputToAdd={inputToAdd}
          addInput={addInput}
          list={list}
          setList={setList}
          setSearchMessage={setSearchMessage}
          />
        </div>
        <div>
          <VerifyWord 
          inputToVerify={inputToVerify}
          verifyInput={verifyInput}
          list={list}
          setSearchMessage={setSearchMessage}
          />
        </div>
        <div>
          <DisplayMessage
          searchMessage={searchMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;