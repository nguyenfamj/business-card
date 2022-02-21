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
      <div className="flex justify-between mt-14 2xl:mt-20">
        <img
          src={avatar}
          alt="Avatar"
          className="object-cover mr-16 border rounded-full 2xl:mr-32 border-white/20 hover:border-white w-28 h-28 2xl:w-186-px 2xl:h-186-px"
        />
        <div>
          <h1 className="text-2xl font-bold text-white 2xl:text-4xl">
            Nguyen Pham
          </h1>
          <p className="text-sm text-white 2xl:text-lg">
            Front-end Developer <br /> BITE student @Haaga-Helia
          </p>
          <div className="flex items-center w-40 h-10 mt-4 bg-white rounded-lg cursor-pointer justify-evenly bg-opacity-40 hover:bg-neutral-500">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="text-[#6cd3ff]"
            ></FontAwesomeIcon>
            <h3 className="text-sm font-bold text-white ">Linkedin Profile</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-40 mt-16 2xl:mt-32 2xl:w-60 social-link">
        <a
          href="https://www.facebook.com/nguyenfamj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xl"
            className="cursor-pointer 2xl:text-5xl hover:text-[#7fa1e1]"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.instagram.com/ph.khnguyen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="cursor-pointer 2xl:text-5xl hover:text-[#E1306C]"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://github.com/nguyenfamj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="cursor-pointer 2xl:text-5xl hover:text-[#fafafa]"
          ></FontAwesomeIcon>
        </a>
      </div>
    </section>
  );
}

export default Card;
