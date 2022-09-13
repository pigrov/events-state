import React from "react";
import PropTypes from "prop-types"; // impt + TAB

function Portfolio() {
  const item = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    images: [
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards",
        id: "1",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
        id: "2",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
        id: "3",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites",
        id: "4",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards",
        id: "5",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites",
        id: "6",
      },
    ],
  };

  return (
    <div className="gallery">
      <div className="gallery-switcher"></div>
      <div className="gallery-images">
        {item.images.map((image) => (
          <div
            className="gallery-item"
            style={{ backgroundImage: `url(${image.img})` }}
            key={image.id}
            data-category={image.category}
          ></div>
        ))}
      </div>
    </div>
  );
}
Portfolio.propTypes = {
  brand: PropTypes.object,
};
export default Portfolio;
