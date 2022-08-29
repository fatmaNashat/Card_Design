import { useState } from "react";
import classes from "../styles/Cards.module.css";

const Cards = ({ products }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      {
        <ul className="cards-List">
          {products.map((p) => (
            <li key={p.id} className="card-list-item">
              <div className={classes.cardImage}>
                <img src={p.image}></img>
              </div>
              <div className="cards-details">
                <button onClick={handleClick} className="setting">
                  View Details
                </button>
                {isShown && (
                  <div className={classes.container}>
                    <p>Product Title :{p.title}</p>
                    <p>Product Category :{p.category}</p>
                    <p>Product description: {p.description}</p>
                    <p>Product Price :{p.price}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
export default Cards;
