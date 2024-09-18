"use client";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-neutral-950 py-10">
      <h2 className="text-center text-white text-4xl font-bold mb-10">
        Testimonials
      </h2>
      <div className="flex justify-center items-center bg-neutral-950 p-8">
        <Slider {...settings} className="w-full max-w-5xl">
          <div className="px-4">
            <TestimonialCard
              text="I would highly recommend GameEon as a gaming partner. They prepared our game before the date with additional features. The entire team, including Founder Nikhil Malankar, Developers, and Team members, are very professional and believe in working extra for the client. They use the latest technology and version, which gives an advantage of more features choice. The entire UI of my game 'Capital Rush' is very finely designed based on UX principles. The code was written in a very structured and simplest way possible."
              author="Yogesh Lakhpatani"
              role="Sr. Operations Manager, Capital Rush"
              imageUrl="https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/images/Testimonials/YogeshLakhpatani.jpeg"
            />
          </div>
          <div className="px-4">
            <TestimonialCard
              text="It was great working with GameEon Studios on games for our gaming application. We truly appreciate the team's efforts and their commitment to the project."
              author="Amit Grover"
              role="Vice President Marketing, Gameskraft"
              imageUrl="https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/images/Testimonials/AmitGrover.jpg"
            />
          </div>
          <div className="px-4">
            <TestimonialCard
              text="JioGames is thrilled to host GameEon Studios’ games on the platform and gamers are loving the games, especially, Cricket Play 2021, Crashy Car Racing, and Highway Truck Racing. Each game is uniquely fun and the gamers just can’t get enough of them. GameEon Studios has a deep understanding of the casual gaming segment and the audience, owing to which they have developed just the right kind of games that the gamers are enjoying. JioGames hopes and wishes GameEon Studios continues to build many such great games, and we’d love to continue playing host for all their ventures."
              author="Mansi Dutta"
              role="Partner and Strategic Alliances Manager, JioGames"
              imageUrl="https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/images/Testimonials/MansiDutta.jpeg"
            />
          </div>
          <div className="px-4">
            <TestimonialCard
              text="We recently worked with GameEon Studios on a project to develop a new mobile game. I was very impressed with their work. They were professional, efficient, and creative. They listened to our needs and delivered a product that exceeded our expectations. I would highly recommend GameEon Studios to anyone looking for a top-notch game development company."
              author="Sanjay Soni"
              role="Founder, Talking Pixels"
              imageUrl="https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/images/Testimonials/SanjaySoni.jpeg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
