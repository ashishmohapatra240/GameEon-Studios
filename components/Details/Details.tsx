"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Details = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* Slide 1: Who We Are */}
        <div className="p-8 bg-stone-50 rounded-lg">
          <div className="text-neutral-950 text-5xl font-bold mb-6 mx-20">
            Who We Are
          </div>
          <div className="text-gray-900/60 text-base font-normal leading-tight mx-20">
            GameEon Studios is a leading game development company dedicated to
            creating high-quality & engaging games for players worldwide. With a
            team of experienced game developers & designers, we strive to push
            the boundaries of what&apos;s possible in gaming, delivering
            immersive experiences that captivate & entertain players.
            <br />
            <br />
            Our passion for gaming is evident in every project we undertake,
            from concept to completion, as we work tirelessly to bring our
            creative visions to life. We are committed to delivering exceptional
            games that provide endless hours of fun & entertainment for players
            of all ages & backgrounds.
          </div>
        </div>

        {/* Slide 2: Our Philosophy */}
        <div className="p-8 bg-stone-50 rounded-lg ">
          <div className="text-neutral-950 text-5xl font-bold mb-6 mx-20">
            Our Philosophy
          </div>
          <div className="text-gray-900/60 text-base font-normal leading-tight mx-20">
            At GameEon Studios, we believe that gaming is not just a form of
            entertainment, but also a powerful tool for personal growth &
            community building. We are committed to creating games that
            challenge & engage players & inspire them to explore new
            perspectives & cultivate empathy.
            <br />
            <br />
            We believe in the power of gaming to bring people together, bridge
            cultural divides, & foster a sense of belonging. Our philosophy is
            deeply rooted in a profound respect for the players we serve and an
            unwavering commitment to crafting impactful gaming experiences that
            enhance their lives within and beyond the realm of the game.
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Details;
