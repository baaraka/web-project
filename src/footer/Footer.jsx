import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerDivList">
          <div className="footerDivListItem">
            <div className="footerListItemImg">
              <img
                src="https://img.freepik.com/premium-vector/letter-og-os-luxury-simple-logo-design-with-gold-color-best-company-premium-product_563735-24.jpg"
                alt=""
                className="footerImg"
              />
              <span className="footerSpan">
                I am a full-stack web developer with strong knowledge of
                MongoDB, node.js, Javascript and front end technologies such
                react, jquery, Ejs and counting.
              </span>
            </div>
            <div className="footerTopCenter">
              <ul className="footerNavigationBar">
                <li className="footerNavigationBarItem">Home</li>
                <li className="footerNavigationBarItem">About Us</li>
                <li className="footerNavigationBarItem">Services</li>
                <li className="footerNavigationBarItem">Contact</li>
              </ul>
            </div>
            <div className="footerRight">
              <span className="footerSpanRight">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
