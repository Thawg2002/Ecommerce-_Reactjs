import React from "react";
import ProductWebsite from "./ProductWebsite";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Overview = ({ products }) => {
  // const spanStyle = {
  //   padding: "20px",
  //   background: "#efefef",
  //   color: "#000000",
  // };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "700px",
    // backgroundSize: "cover",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1551488831-68b4d0c92c13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 3",
    },
  ];
  return (
    <div className="overview">
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <ProductWebsite products={products} />
    </div>
  );
};

export default Overview;
