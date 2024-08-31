import img from "../../assets/logo.png";

const Cards = ({ cards }) => {

  return (
    <div className="cards-container">
      {cards.map((data) => {
        return (
          <div key={data.id} className="cards">
            <div className="cardImg">
              <img src={data.images[0]} alt="" />
            </div>
            <div className="cardDetail">
              <h3>{data.category.name}</h3>
              <p>{data.title}</p>
              <p className="price">${data.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
