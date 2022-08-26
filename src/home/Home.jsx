import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeContainerTitle">
          <div className="homeContainerList">
            <h1 className="homeTitle">
              <span className="SpanHomeTitle">Caregreek</span> We Are
            </h1>
            <h1 className="homeTitle">A Certified Cleaning</h1>
            <h1 className="homeTitle">Company</h1>
          </div>
          <div className="homeParagraphItem">
            <p className="homeParagraph">SHEDULE SERVICES</p>
          </div>
        </div>
        <div className="homeContainerCenter">
          <div className="homeContainerImgItem">
            <img
              src="https://thumbs.dreamstime.com/b/portrait-handsome-young-african-american-black-man-combing-his-hair-bathroom-isolated-over-grey-background-185903660.jpg"
              alt=""
              className="homeContainerImgCenter"
            />
          </div>
          <div className="homeContainerCenterParagraph">
            <span className="centerParagraph">Barack Ganai</span>
            <p className="homeCenterParagraph">
              I am a full-stack web developer
            </p>
          </div>
        </div>
        <div className="homeContainerImgSection">
          <div className="homeContainerDash">
            <ul className="homeDash">
              <li>............</li>
              <li>............</li>
            </ul>
          </div>
          <div className="homeContainerImg">
            <img
              src="https://media.istockphoto.com/photos/young-trendy-man-in-glasses-and-sweater-feeling-happy-about-in-text-picture-id1237258345?k=20&m=1237258345&s=612x612&w=0&h=9t9BCsdPN18XkfkBiq6tDDnxi-CR7Kb3NfYRMSx2yMw="
              alt=""
              className="homeImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
