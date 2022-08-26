import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryHeading">
        <h1 className="headingGalley">Our Gallery</h1>
      </div>
      <div className="galleryDiv">
        <div className="galleryImg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg4nPZhr_QQyvL6GsZXezAGcSSw6mnPxFvM2YjOMkI0cfsVq4dJxk7yU2qFGjMruovCM&usqp=CAU"
            alt=""
            className="galleryItem"
          />
        </div>
        <div className="galleryImg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIl2jc2STyPMBbsKi2x1C6wtfhneJs9sOfpYOJzAiPGci9PgWw3Ex1rL-G0iylkoK4n0&usqp=CAU"
            alt=""
            className="galleryItem"
          />
        </div>
        <div className="galleryImg">
          <img
            src="https://m.media-amazon.com/images/I/81O4HAHd6lL._SL1500_.jpg"
            alt=""
            className="galleryItem"
          />
        </div>
        <div className="galleryImg">
          <img
            src="https://image.made-in-china.com/2f0j00wYdRvzPnLHke/High-Quality-Small-Computer-Table.jpg"
            alt=""
            className="galleryItem"
          />
        </div>
        <div className="galleryImg">
          <img
            src="https://static-01.daraz.pk/p/a8eb9bbf921fb6cb67766391d5ed55ec.jpg"
            alt=""
            className="galleryItem"
          />
        </div>
        <div className="galleryImg">
          <img
            src="https://d3fa68hw0m2vcc.cloudfront.net/591/248233180.jpeg"
            alt=""
            className="galleryItem"
          />
        </div>
      </div>
    </div>
  );
}
