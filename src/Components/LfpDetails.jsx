import React from "react";
import Card from "./Card";
import "../css/lfpdetails.css";
import card1 from "../Images/card_1.png";
import card2 from "../Images/card_2.png";
import card3 from "../Images/card_3.png";

const LfpDetails = () => {
  const cardData = [
    {
      id: 1,
      imageSource: card1,
      header: "Light, Fast & Powerful",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      button: false,
    },
    {
      id: 2,
      imageSource: card2,
      header: "Light, Fast & Powerful",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      button: false,
    },
    {
      id: 3,
      imageSource: card3,
      header: "Light, Fast & Powerful",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      button: true,
    },
  ];

  return (
    <div className="lfp_details_container">
      {cardData.map((item) => (
        <Card
          imageSource={item.imageSource}
          header={item.header}
          content={item.content}
          button={item.button}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default LfpDetails;
