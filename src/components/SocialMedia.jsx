import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.facebook.com/Line.between.two.dots/">
          <FaFacebook />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/Line.between.two.dots/">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://github.com/Binod69">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
