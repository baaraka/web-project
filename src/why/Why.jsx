import "./Why.css";

export default function Why() {
  return (
    <div className="why">
      <div className="aboutUsWhy">
        <div className="aboutUsHeading">
          <h1 className="aboutHeadingWhy">Why caregreek</h1>
          <div className="aboutIconDiv">
            <div className="aboutUsIconDiv">
              <i className="aboutUsIcon fa-solid fa-check"></i>
            </div>
            <span className="aboutUHeadingParagraph">
              A Superior Clean Through Our Trained Stuff And On-Site Supervision
              To Ensure Accountability Each And Every Time;
            </span>
          </div>
          <div className="aboutIconDiv">
            <div className="aboutUsIconDiv">
              <i className="aboutUsIcon fa-solid fa-check"></i>
            </div>
            <span className="aboutUHeadingParagraph">
              A Local Operations Team On-Call 24 Hours A Day, Available To Work
              At A Moment's Notice; And
            </span>
          </div>
          <div className="aboutIconDiv">
            <div className="aboutUsIconDiv">
              <i className="aboutUsIcon fa-solid fa-check"></i>
            </div>
            <span className="aboutUHeadingParagraph">
              A Safe "Green" Clean With The Use Of Environmentally Friendly
              Products, Vacuums And Microfiber Dusting Cloth.
            </span>
          </div>
        </div>
        <div className="aboutUsWhyVideo">
          <div className="aboutUsVideo">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
