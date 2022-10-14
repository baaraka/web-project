import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="teamDiv">
        <div className="teamHeading">
          <h1 className="headingTeam">Our Team</h1>
          <p className="teamParagraph">
            Our Employees Are Critical To Services We Provide And We Are Very
            Selective In Taking On New Staff. Our Staffs Has An Excellent Track
            Record And Many Years Of Experience And They Are Provided With
            Regular Training.
          </p>
        </div>
        <div className="teamImg">
          <img
            src="https://img.freepik.com/free-photo/flat-lay-frame-with-yellow-cleaning-products-background_23-2148357462.jpg"
            alt=""
            className="teamImgItem"
          />
        </div>
      </div>
    </div>
  );
}
