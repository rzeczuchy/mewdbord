import React from 'react';
import Image from 'react-bootstrap/Image';
import '../css/Mewd.css';

const Mewd = (props) => {
  return (
    <div className="mewd">
      <Image className="mewd-image" src={props.imgSrc}/>
    </div>
  );
}

export default Mewd;
