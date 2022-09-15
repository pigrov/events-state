import React from "react";
import uuid from "react-uuid";

function Toolbar(props) {
  const { filters, filter, onSelectFilter } = props;
  const [activeFilter, setActiveFilter] = React.useState(filter);

  const onSelectFilterR = (item) => {
    setActiveFilter(item);
  };

  const buttons = filters.map((filter) => (
    <button
      className={activeFilter === filter ? "button-active" : "button"}
      key={uuid()}
      value={filter}
      onClick={() => {
        onSelectFilterR(filter);
        onSelectFilter(filter);
      }}
    >
      {filter}
    </button>
  ));

  return <div className="gallery-switcher">{buttons}</div>;
}

export default Toolbar;
