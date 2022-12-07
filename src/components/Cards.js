import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useDispatch, useSelector } from "react-redux";
import Cardsdata from "./CardsData";
import "./style.css";
// import { DONATE } from "../redux/actions/action";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);
  // const getdata = useSelector((state) => state.cartreducer.carts);
  // const dispatch = useDispatch();
  // const send = (e) => {
  //   dispatch(DONATE(e));
  // };
  return (
    <div className="container mt-3">
      <h2>Recommended Creators</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          // getdata.map((e)=>{
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="influencer_card mx-2 mt-4 card_style "
              >
                <Card.Img
                  variant="top"
                  src={element.avatar_url}
                  style={{ height: "16rem" }}
                />
                <Card.Body>
                  <Card.Title>{element.login}</Card.Title>
                  <Card.Text>{element.type}</Card.Text>

                  {/* {getdata.map((e) => {
                    return ( */}
                  <NavLink to={`/donate`}>
                    <Button variant="dark">Donate</Button>
                  </NavLink>
                  {/* );
                  })} */}
                </Card.Body>
              </Card>
            </>
          );
          // })
        })}
      </div>
    </div>
  );
};

export default Cards;
