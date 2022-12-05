import "./Questions.css";

export default function Questions() {
  return (
    <div className="questions">
      <div className="questionsDiv">
        <div className="questionsHeading">
          <h1 className="questionsDivHeading">Frequently Asked Questions</h1>
        </div>
        <div className="questionsList">
          <div className="questionsListItem1">
            <div className="questionL">
              <p className="questionParagraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus dolor officia
              </p>
              <p className="questionsParagraphItem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                obcaecati voluptatibus optio in debitis vel aperiam minima
              </p>
            </div>
            <div className="iconQuestion1">
              <i class="upIcon fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="questionsListItem2">
            <p className="questionsParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ullam quod voluptatem
            </p>
            <div className="iconQuestion2">
              <i class="upIcon fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className="questionsListItem3">
            <p className="questionsParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto eligendi, tempore
            </p>
            <div className="iconQuestion3">
              <i class="upIcon fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className="questionsListItem4">
            <p className="questionsParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              obcaecati quis error sit maxime
            </p>
            <div className="iconQuestion4">
              <i class="upIcon fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
