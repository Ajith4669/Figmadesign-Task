import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/preview.css";
import { Button } from "antd";

const preview = () => {
  return (
    <div className="preview-container">
      <p style={{ fontSize: "20px", color: "#495057" }}>Preview</p>
      <NavLink style={{ marginLeft: "85%" }} exact to="/exportpdf">
        <Button
          style={{
            backgroundColor: "#556ee6",
            color: "white",
          }}
        >
          Download Pdf
        </Button>
      </NavLink>
      <span className="preview-heading">Basic info </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="preview-field">Contact</span>
            <span className="preview-answer">+91 95241 21040</span>
          </div>
          <div className="field-container">
            <span className="preview-field">mail ID</span>

            <span className="preview-answer">Example@m8itsolutions.com </span>
          </div>

          <div className="field-container">
            <span className="preview-field">Gender</span>

            <span className="preview-answer">Male</span>
          </div>

          <div className="field-container">
            <span className="preview-field">Aaadhar </span>

            <span className="preview-answer">6990 8009 5500 11778</span>
          </div>

          <div className="field-container">
            <span className="preview-field">Address</span>

            <span className="preview-answer">
              Sakthi Estate,coimbatore,postal,Raghul Gandhi Sdiveet,Anna
              Salai,TamilNadu - 641017
            </span>
          </div>
        </div>
        <div className="container-left">
          <div className="field-container">
            <span className="preview-field">Father Name</span>

            <span className="preview-answer"> Eswaran K</span>
          </div>

          <div className="field-container">
            <span className="preview-field">Birth Date</span>

            <span className="preview-answer">21/July/1997</span>
          </div>

          <div className="field-container">
            <span className="preview-field">Marital Status</span>

            <span className="preview-answer">Unmarried</span>
          </div>

          <div className="field-container">
            <span className="preview-field">Caste/Religion</span>

            <span className="preview-answer">None</span>
          </div>
        </div>
      </div>
      <span className="preview-heading">
        Bank Account <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="preview-field">Name</span>
            <span className="preview-answer">Karthikeyan</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Acc.No</span>

            <span className="preview-answer">1339119040600 </span>
          </div>

          <div className="field-container">
            <span className="preview-field">IFSC</span>

            <span className="preview-answer">ICICI165165</span>
          </div>

          <div className="field-container">
            <span className="preview-field">PAN </span>

            <span className="preview-answer">EECPK9550K</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Bank Name</span>
            <span className="preview-answer"> ICICI Bank</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Branch</span>

            <span className="preview-answer"> Mangalam,Tirupur</span>
          </div>
        </div>
      </div>
      <span className="preview-heading">
        Pay Scale <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="preview-field">Basic </span>
            <span className="preview-answer">Rs.16,800/Month</span>
          </div>
          <div className="field-container">
            <span className="preview-field">PF</span>

            <span className="preview-answer">Rs.1200 </span>
          </div>

          <div className="field-container">
            <span className="preview-field">Gross</span>

            <span className="preview-answer">Rs.18,000/Month</span>
          </div>
        </div>
      </div>
      <span className="preview-heading">
        Position Info <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="preview-field">Branch </span>
            <span className="preview-answer">Coimbatore</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Department</span>

            <span className="preview-answer">Sales </span>
          </div>

          <div className="field-container">
            <span className="preview-field">Designation</span>

            <span className="preview-answer">Manager</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Reporting To</span>

            <span className="preview-answer">Mr.Kandha(HR)</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Shift Time</span>

            <span className="preview-answer">Day</span>
          </div>
        </div>
      </div>
      <span className="preview-heading">
        Education Qualification <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="preview-field">Qualification </span>
            <span className="preview-answer">12th</span>
          </div>
          <div className="field-container">
            <span className="preview-field">Department</span>

            <span className="preview-answer">Computer Science </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default preview;
