import React from 'react';
import Image from 'react-bootstrap/Image';
import '../css/Mewd.css';

const Mewd = ({imgSrc}) => {
  return (
    <div className="mewd">
      <Image className="mewd-image" src={imgSrc}/>
    </div>
  );
}

export default Mewd;
