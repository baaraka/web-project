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

        <div className="homeContainerImgSection">
          <div className="circle"></div>

          <div className="homeContainerDash2">
            <ul className="homeDash2">
              <li>............</li>
              <li>............</li>
            </ul>
          </div>
          <div className="triangle"></div>
          <div className="homeContainerImg">
            <img
              src="https://thumbs.dreamstime.com/b/bearded-man-hold-duster-microfiber-cleaning-clean-house-housekeeping-business-call-service-male-maid-household-happy-hipster-169325189.jpg"
              alt=""
              className="homeImg"
            />
          </div>
          <div className="homeContainerCenter">
            <div className="homeContainerImgItem">
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-bearded-man-grey-background-over-studio-empty-space-middle-aged-posing-male-magazine-blog-youth-205328712.jpg"
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
          <div className="homeContainerDash1">
            <ul className="homeDash1">
              <li>.........</li>
              <li>.........</li>
              <li>.........</li>
            </ul>
          </div>
          <div className="homeContainerDash3">
            <ul className="homeDash3">
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
