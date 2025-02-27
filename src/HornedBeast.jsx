import { useState } from 'react';


//The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

/* eslint-disable react/prop-types */

function HornedBeast(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <img
    src={props.image_url}
    alt={props.description}
    title={props.title}
    style={{ width: '20%'}}
    />
    <p>{props.description}</p>
    </>);
}

    
  function Favorites(props) {
  const [status, setStatus] = useState("Yay");
  
  function handleClick() {
    setStatus(status === "Nay" ? "Yay" : "Nay");
  }
  <>
  return (
    <div onClick={handleClick}>
      <Image src={props.image_url} alt="some horned beast" rounded fluid />
      <h3>{status}</h3>
    </div>
  );
    </>
  }

export default HornedBeast;