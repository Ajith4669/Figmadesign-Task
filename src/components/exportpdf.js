import React from "react";
import "../styles/exportpdf.css";
import { Radio } from "antd";
import { Select, Space } from "antd";

const Exportpdf = () => {
  return (
    <div className="exportpdf-container">
      <p style={{ fontSize: "20px", color: "#495057" }}>Export as PDF</p>
      <span className="exportpdf-heading">Basic info </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="exportpdf-field">Contact</span>
            <span className="exportpdf-answer">+91 95241 21040</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">mail ID</span>

            <span className="exportpdf-answer">Example@m8itsolutions.com</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Gender</span>
            <Radio>
              <span className="exportpdf-answer-radiobuttons">Male</span>
            </Radio>
            <Radio>
              <span className="exportpdf-answer-radiobuttons">Female</span>
            </Radio>
            <Radio>
              <span className="exportpdf-answer-radiobuttons">Others</span>
            </Radio>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Aaadhar </span>

            <span className="exportpdf-answer">6990 8009 5500 11778</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Address</span>

            <span className="exportpdf-answer">
              Sakthi Estate,coimbatore,postal,Raghul Gandhi Sdiveet,Anna
              Salai,TamilNadu - 641017
            </span>
          </div>
        </div>
        <div className="container-left">
          <div className="field-container">
            <span className="exportpdf-field">Father Name</span>

            <span className="exportpdf-answer"> Eswaran K</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Birth Date</span>

            <span className="exportpdf-answer">21/July/1997</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Marital Status</span>

            <span className="exportpdf-answer">Unmarried</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Caste/Religion</span>

            <span className="exportpdf-answer">None</span>
          </div>
        </div>
      </div>
      <span className="exportpdf-heading">
        Bank Account <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="exportpdf-field">Name</span>
            <span className="exportpdf-answer">Karthikeyan</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Acc.No</span>

            <span className="exportpdf-answer">1339119040600 </span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">IFSC</span>

            <span className="exportpdf-answer">ICICI165165</span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">PAN </span>

            <span className="exportpdf-answer">EECPK9550K</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Bank Name</span>

            <span className="exportpdf-answer"> ICICI Bank</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Branch</span>

            <span className="exportpdf-answer"> Mangalam,Tirupur</span>
          </div>
        </div>
      </div>
      <span className="exportpdf-heading">
        Pay Scale <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="exportpdf-field">Basic </span>
            <span className="exportpdf-answer">Rs.16,800/Month</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">PF</span>

            <span className="exportpdf-answer">Rs.1200 </span>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Gross</span>

            <span className="exportpdf-answer">Rs.18,000/Month</span>
          </div>
        </div>
      </div>
      <span className="exportpdf-heading">
        Position Info <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="exportpdf-field">Branch </span>
            <Space>
              <Select
                defaultValue="Coimbatore"
                style={{
                  width: 120,
                  borderBottom: "1px solid #ced4da",
                }}
                bordered={false}
                options={[
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Coimbatore",
                    label: "Coimbatore",
                  },
                  {
                    value: "Mumbai",
                    label: "Mumbai",
                  },
                ]}
              />
            </Space>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Department</span>
            <Space>
              <Select
                defaultValue="sales"
                style={{
                  width: 120,
                  borderBottom: "1px solid #ced4da",
                }}
                bordered={false}
                options={[
                  {
                    value: "sales",
                    label: "Sales",
                  },
                  {
                    value: "marketing",
                    label: "Marketing",
                  },
                ]}
              />
            </Space>
          </div>

          <div className="field-container">
            <span className="exportpdf-field">Designation</span>
            <Space>
              <Select
                defaultValue="manager"
                style={{
                  width: 120,
                  borderBottom: "1px solid #ced4da",
                }}
                bordered={false}
                options={[
                  {
                    value: "manager",
                    label: "Manager",
                  },
                  {
                    value: "hr",
                    label: "HR",
                  },
                ]}
              />
            </Space>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Reporting To</span>
            <Space>
              <Select
                defaultValue="kandha"
                style={{
                  width: 120,
                  borderBottom: "1px solid #ced4da",
                }}
                bordered={false}
                options={[
                  {
                    value: "kandha",
                    label: "Mr.Kandha(HR)",
                  },
                  {
                    value: "stani",
                    label: "Mr.Stani(Manager)",
                  },
                  {
                    value: "kishore",
                    label: "Mr.Kishore(HR)",
                  },
                ]}
              />
            </Space>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Shift Time</span>
            <Space>
              <Select
                defaultValue="Day"
                style={{
                  width: 120,
                  borderBottom: "1px solid #ced4da",
                }}
                bordered={false}
                options={[
                  {
                    value: "day",
                    label: "Day",
                  },
                  {
                    value: "morning",
                    label: "Morning",
                  },
                  {
                    value: "evening",
                    label: "Evening",
                  },
                ]}
              />
            </Space>
          </div>
        </div>
      </div>
      <span className="exportpdf-heading">
        Education Qualification <span className="afterline" />
      </span>
      <div className="parent-container">
        <div className="container-right">
          <div className="field-container">
            <span className="exportpdf-field">Qualification </span>
            <span className="exportpdf-answer">12th</span>
          </div>
          <div className="field-container">
            <span className="exportpdf-field">Department</span>

            <span className="exportpdf-answer">Computer Science </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exportpdf;
