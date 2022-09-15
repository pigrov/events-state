import React from "react";
import PropTypes from "prop-types"; // impt + TAB
import Toolbar from "./Toolbar";
import uuid from "react-uuid";

function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const images = [
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Flayers",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
  ];

  const [activeImages, setActiveImages] = React.useState(images);

  const onSelectFilter = (item) => {
    setActiveFilter(item);
    setActiveImages(
      item !== "All" ? images.filter((o) => o.category === item) : images
    );
  };

  return (
    <div className="gallery">
      <Toolbar
        filters={filters}
        selected={activeFilter}
        onSelectFilter={(filter) => {
          onSelectFilter(filter);
        }}
      />

      <div className="gallery-images">
        {activeImages.map((image) => (
          <div
            className="gallery-item"
            style={{ backgroundImage: `url(${image.img})` }}
            key={uuid()}
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
