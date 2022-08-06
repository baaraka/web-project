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
          <p className="aboutUsItemParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
            strong knowledge of MongoDB, node.js, Javascript and front end
            technologies such react, jquery, Ejs and and counting. Graduated
            University with degree in Electrical & Electronics Engineering.
            Strong mathematics and programming background.
          </p>
        </div>
      </div>
      <div className="aboutUsWhy">
        <div className="boutUsHeading">
          <h1 className="aboutHeadingWhy">Why caregreek</h1>
          <p className="aboutUHeadingParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
          </p>
          <p className="aboutUHeadingParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
          </p>
          <p className="aboutUHeadingParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
          </p>
          <p className="aboutUHeadingParagraph">
            Professional iOS Developer,Fluent in Swift and Objective C
            Programming languages. I am also a fullstack web developer with
          </p>
        </div>
        <div className="aboutUsWhyVideo">
          <div className="aboutUsVideo">
            <iframe
              width="300px"
              height="300px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
