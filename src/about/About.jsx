import ReadMoreLessAbout from "../readMoreLessAbout/ReadMoreLessAbout";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutUs">
        <div className="aboutUsItemSm">
          <div className="aboutImgItem div1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeFvemQoSczl617Omfgg2Snoh0tfYLoObeOMerhA5Ejcn4f53TY68cKSMU6W1k76dQXA&usqp=CAU"
              alt=""
              className="img1"
            />
          </div>
          <div className="aboutImgItem div2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVWUiMRdBgvV-T9CXr4Dyw4jWFhU-wfnDjaok-o_xq_NA62NpLeaPUehLfJaA8Jrvu0s&usqp=CAU"
              alt=""
              className="img2"
            />
          </div>
          <div className="aboutImgItem div3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC8T2ybj8WCpXsgY4f1hBpi4SnXuoGR0JUTHavFN94T_5KiZhOVluheuWF5jeOZICiDk&usqp=CAU"
              alt=""
              className="img3"
            />
          </div>
        </div>
        <div className="aboutUsItems">
          <h1 className="aboutUsItem">About Us</h1>
          <ReadMoreLessAbout limit={200}>
            <p className="aboutUsItemParagraph">
              Caregreek International Limited Was Established In 2018 And Has
              Over The Years Evolved To Become The Largest And Most Specialized
              Cleaning Company In Abuja. It is One Of Wholly Citizen Owned
              Commercial Cleaning Company In Nigeria. The Company Registration
              Number Is RC1509998. It Has Extensive Experience In Cleaning All
              Types Of Building Such AS Schools, Office, Industrial
              Building(Premises), Hotels, Shopping Center, Government Offices,
              Commercial Premises And Hospitals, Bank And Others. <hr /> The
              Company's Success Lies In Its Ability To Train And Manage Hundred
              Of Stuffs To Archive The Stringent Standard Demanded By Customers
              We Serve In Nigeria. <hr /> Our Services Include Provision Of
              Janitorial Services, Hygiene Supplies, Pest Control, Once
              Off-Specialized Cleaning Office Plant Supplies And Landscaping And
              Garden Services And Chemical Supplies.
            </p>
          </ReadMoreLessAbout>
        </div>
      </div>
    </div>
  );
}
