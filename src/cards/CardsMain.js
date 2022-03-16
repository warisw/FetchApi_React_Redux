import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../reducers/cardSlice";
import { deleteDetails, getDetails } from "../reducers/detailsSlice";

const CardsMain = () => {
  const dispatch = useDispatch();
  const { listOfCards } = useSelector(({ cards }) => cards);
  const { count } = useSelector((state) => state.counter);
  const { cardsDetails } = useSelector(({ details }) => details);

  useEffect(() => {
    dispatch(getCards({ limit: count }));

    dispatch(deleteDetails());

    listOfCards.map((pok) => {
      dispatch(getDetails(pok.name));
    });
  }, [count, dispatch]);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {cardsDetails.map(({ name, sprites: { front_default } }, url) => (
          <li key={url}>
            <Card name={name} front_default={front_default} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsMain;
