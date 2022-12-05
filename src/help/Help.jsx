import "./Help.css";

export default function Help() {
  return (
    <div className="help">
      <div className="helpDivItem">
        <div className="helpDiv">
          <div className="helpHeading">
            <div className="helpHead">
              <h1 className="headingHelp">Let's Help You With Your</h1>
              <h1 className="headingHelp">Cleaning</h1>
            </div>
            <p className="paragraphs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum asperiores accusamus iste. Veritatis iusto ipsam dicta
              sequi adipisci magnam, incidunt cumque eligendi sapiente,
              similique quas aut, numquam itaque qui amet.
            </p>
          </div>
          <div className="helpDsh">
            <ul className="helpDash">
              <li>............</li>
              <li>............</li>
              <li>............</li>
              <li>............</li>
              <li>............</li>
            </ul>
          </div>
        </div>
        <div className="helpFormDiv">
          <div className="helpForm">
            <div className="helpFormHeading">
              <h1 className="formHeading">Book Now</h1>
            </div>
            <div className="helpFormItem">
              <form className="form">
                <label className="helpFormLabel">Name</label>
                <input type="text" className="formInput" />
                <label className="helpFormLabel">Phone Number</label>
                <input type="number" className="formInput" />
                <label className="helpFormLabel">Email</label>
                <input type="email" className="formInput" />
                <label className="helpFormLabel">Location</label>
                <input type="location" className="formInput" />
                <button className="button">SHEDULE SERVICE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
