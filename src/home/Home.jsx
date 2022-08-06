import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeContainerTitle">
          <h1 className="homeTitle">
            <span className="SpanHomeTitle">Caregreek</span> We Are
          </h1>
          <br />
          <h1 className="homeTitle">A Certified Cleaning</h1>
          <br />
          <h1 className="homeTitle">Company</h1>
          <br />
          <p className="homeParagraph">SHEDULE SERVICES</p>
          <br />
        </div>

        <div className="homeContainerImgSection">
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
