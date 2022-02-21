import React from 'react';
import avatar from '../../assets/avatar.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Card() {
  return (
    <section className="flex flex-col items-center mx-auto bg-white bg-opacity-25 border border-b-0 border-r-0 border-white/30 w-525-px h-300-px rounded-3xl 2xl:w-875-px 2xl:h-500-px shadow-5xl backdrop-blur-sm">
      <div className="flex justify-between mt-10">
        <img
          src={avatar}
          alt="Avatar"
          className="object-cover mr-20 border rounded-full border-white/20 hover:border-white w-28 h-28 2xl:w-186-px 2xl:h-186-px"
        />
        <div>
          <h1 className="text-2xl font-bold text-white">Nguyen Pham</h1>
          <p className="text-white">Front-end Developer</p>
          <div className="flex items-center w-40 h-10 bg-white rounded-lg cursor-pointer bg-opacity-40">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="text-[#6cd3ff]"
            ></FontAwesomeIcon>
            <h3 className="font-bold text-white ">Linkedin Profile</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-40 mt-24 social-link">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2xl"
          className="cursor-pointer"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faInstagram}
          size="2xl"
          className="cursor-pointer"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          className="cursor-pointer"
        ></FontAwesomeIcon>
      </div>
    </section>
  );
}

export default Card;
