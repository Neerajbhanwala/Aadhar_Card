import React from "react";
import "./App.css";
import adhar from "./Images/adhar.svg";
import satyamev from "./Images/satyamev.svg";
import upper from "./Images/upper.png";
import lower from "./Images/lower.png";
import english from "./Images/english.png";
import contact from "./Images/contact.png";
import QR from "./Images/QR.png";
import dp from "./Images/dp.png";
import { BsFillGridFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [village, setVillage] = useState("");
  const [villageH, setVillageH] = useState("");
  const [tehsil, setTehsil] = useState("");
  const [tehsilH, setTehsilH] = useState("");
  const [distt, setDistt] = useState("");
  const [disttH, setDisttH] = useState("");
  const [state, setState] = useState("");
  const [stateH, setStateH] = useState("");
  const [bo, setBo] = useState("");
  const [boH, setBoH] = useState("");
  const [postOffice, setPostoffice] = useState("");
  const [postOfficeH, setPostofficeH] = useState("");
  const [pin, setPin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {show ? (
        <div className="popUp">
          <div className="frame">
            <div className="head">
              <img src={upper} alt="" width="100%" height="100%" />
            </div>
            <div className="content">
              <div className="photo-content">
                <div className="photo">
                  <img src={dp} alt="Neeraj-pic" width="100%" height="100%" />
                </div>
                <div className="name">
                  नीरज
                  <br />
                  <div>Neeraj</div>
                  <div className="dob">जन्म तिथि/DOB:&nbsp; 28/10/1997</div>
                  <div className="gender">पुरुष/ MALE</div>
                </div>
              </div>
              <div className="adhar-number">9892 4324 8529</div>
            </div>
            <div className="foot">
              <img
                src={lower}
                alt="mera addhar meri pahchan"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <br />

          <div className="frame">
            <div className="head-2">
              <img src={english} alt="" width="100%" height="100%" />
            </div>
            <div className="content-2">
              <div className="data">
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>पता:</div>
                S/O: दशरथ, 445, गाँव {villageH}, {tehsilH}, {postOfficeH}, ({boH}
                ), {disttH},
                <br />
                {stateH}- {pin}
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  Address:
                </div>
                S/O: Dashrath, 445, vill-{village}, {tehsil}, {postOffice} ({bo}
                ), {distt},
                <br />
                {state}- {pin}
              </div>

              <div className="bar-code">
                <img src={QR} alt="" width="100%" height="100%" />
              </div>
            </div>
            <div className="adhar-number-2">9892 4324 8529</div>
            <div className="foot">
              <img
                src={contact}
                alt="mera addhar meri pahchan"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <br />

 <div>
 <button className="close" onClick={() => setShow(false)}>
            Change
          </button>
          <button className="close" onClick={() => window.print(false)}>
            Print
          </button>
 </div>
        </div>
      ) : null}

      <div className="heading">
        <img src={satyamev} alt="satyamev logo" />
        <> Unique Identification Authority of India</>
        <img src={adhar} alt="adhar logo" />
      </div>

      <div className="header">
        <h3>
          <BsFillGridFill /> myAadhar
        </h3>
        <h3>
          <FaLanguage />{" "}
        </h3>
      </div>

      <center>
        <div className="dataField">
          <h2>Fill the form</h2>

          <form onClick={onSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your village Name here..."
                required
                value={village}
                onChange={(e) => setVillage(e.target.value)}
              />
              <span>
                Village <sup> (English)</sup>{" "}
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your village Name here..."
                required
                value={villageH}
                onChange={(e) => setVillageH(e.target.value)}
              />
              <span>
                Village <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your tehsil Name here..."
                required
                value={tehsil}
                onChange={(e) => setTehsil(e.target.value)}
              />
              <span>
                Tehsil <sup>(English)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your tehsil Name here..."
                required
                value={tehsilH}
                onChange={(e) => setTehsilH(e.target.value)}
              />
              <span>
                Tehsil <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your district Name here..."
                required
                value={distt}
                onChange={(e) => setDistt(e.target.value)}
              />
              <span>
                District <sup>(English)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your district Name here..."
                required
                value={disttH}
                onChange={(e) => setDisttH(e.target.value)}
              />
              <span>
                District <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your state Name here..."
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <span>
                State <sup>(English)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your state Name here..."
                required
                value={stateH}
                onChange={(e) => setStateH(e.target.value)}
              />
              <span>
                State <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your BO Number here..."
                required
                value={bo}
                onChange={(e) => setBo(e.target.value)}
              />
              <span>
                BO Number <sup>(English)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your BO Number here..."
                required
                value={boH}
                onChange={(e) => setBoH(e.target.value)}
              />
              <span>
                BO Number <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your post office name here..."
                required
                value={postOffice}
                onChange={(e) => setPostoffice(e.target.value)}
              />
              <span>
                Post office <sup>(English)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your post office name here..."
                required
                value={postOfficeH}
                onChange={(e) => setPostofficeH(e.target.value)}
              />
              <span>
                Post office <sup>(हिंदी)</sup>
              </span>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your pin here..."
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <span>Pin Code</span>
            </div>

            <button type="submit" onClick={() => setShow(true)}>
              {" "}
              Submit
            </button>
          </form>
        </div>
      </center>
    </>
  );
}

export default App;
