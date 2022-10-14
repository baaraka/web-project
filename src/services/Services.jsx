import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="serviceContainer">
        <div className="serviceContainerHeading">
          <h1 className="headingService">Our Services</h1>
        </div>
        <div className="serviceContainers">
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-bath"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">Residential Cleaning</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                ipsam ab incidunt culpa odit corrupti nobis et officia molestias
                quo aut exercitationem non, vero quisquam maxime atque vel
                repudiandae dolorem.
              </p>
            </div>
          </div>
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-pump-medical"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">Commercial Cleaning</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati cumque dicta iusto inventore amet possimus. Est minima
                necessitatibus molestiae vero esse rerum rem voluptates ipsam
                soluta, reiciendis nobis veritatis aspernatur.
              </p>
            </div>
          </div>
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-soap"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">Post Construction Cleaning</h2>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem porro provident sapiente, perferendis quod totam
                facere. Maiores autem nobis voluptas temporibus, saepe omnis
                sapiente. Atque rerum quas accusantium quam accusamus.
              </p>
            </div>
          </div>
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-broom"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">Fumigation/ Pest Control</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatibus eaque, itaque dicta dignissimos excepturi
                asperiores cumque impedit? Velit maiores fugiat vitae tenetur
                dolore illo nobis officia, saepe reprehenderit eum.
              </p>
            </div>
          </div>
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-snowplow"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">Carpet and Upholstering Cleaning</h2>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores incidunt voluptates delectus, provident, doloremque nemo
                culpa tempore sed, nam eius cupiditate aut at fugit? Iste error
                natus laboriosam laudantium tempora.
              </p>
            </div>
          </div>
          <div className="containerService">
            <div className="serviceContainerList">
              <i className="icon fa-solid fa-pump-soap"></i>
            </div>
            <div className="containerHeading">
              <h2 className="headings">End Of Tenancy Cleaning</h2>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                praesentium quis consequatur molestias repellat? Ipsam
                consequatur id numquam suscipit at animi maxime ratione
                cupiditate iure nostrum sit, natus similique repellendus.
              </p>
            </div>
          </div>
        </div>
        <button className="serviceBtn">VIEW MORE</button>
      </div>
    </div>
  );
}
