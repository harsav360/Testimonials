import React from "react";
import Card from "./Card";

const Testimonials = (props) => {
  let review = props[0];
  return <div>{<Card review={review}></Card>}</div>;
};

export default Testimonials;
