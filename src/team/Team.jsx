import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="teamDiv">
        <div className="teamHeading">
          <h1 className="heading">Our Team</h1>
          <p className="teamParagraph">
            I am a full-stack web developer with strong knowledge of MongoDB,
            node.js, Javascript and front end technologies such react, jquery,
            Ejs and counting.Graduated University with degree in science of
            information technology. Strong mathematics and programming
            background.
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
