import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/create');
  };
  return (
    <div className="home">
      <section className="header">
        <h1>
          Imagine if <span>Snapchat</span> had events.
        </h1>
        <p className="section-p">
          Easily host and share events with your friends across any social
          media.
        </p>
      </section>
      <div className="image-with-details">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T235121Z&X-Amz-Expires=86400&X-Amz-Signature=0b1921195faa90950b73a6dc1efb020cae5d7303e03efa0047b7b4c8f07941fa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          alt="Event details"
        />
      </div>
      <div>
        <button onClick={routeChange} className="button-create-event">
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};

export default Home;
