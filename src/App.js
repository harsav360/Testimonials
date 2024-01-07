import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div>
      <div>Our Testimonials</div>
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
