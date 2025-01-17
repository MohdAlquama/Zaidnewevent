import React from "react";
import Slider from "react-slick"; // Import react-slick

import WeddingTimeline from "./WeddingTimeline";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
const events = [
  {
    title: "Birthday",
    image: "assets/birthdayf.png",
    
  },
  {
    title: "Anniversary",
    image: "path_to_anniversary_image.jpg",
  },
  {
    title: "Wedding",
    image: "assets/wefhdding.png",
  },
  {
    title: "Kitty Party",
    image: "path_to_kitty_party_image.jpg",
  },
  {
    title: "Baby Shower",
    image: "path_to_baby_shower_image.jpg",
  },
  {
    title: "Retirement Party",
    image: "path_to_retirement_party_image.jpg",
  },
];

const EventServices = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Event Services By Planners Events
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover a wide range of event solutions designed to make every
          occasion special.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-white hover:scale-105 transform transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
            <div className="bg-rose-300 text-black text-center py-2">
              <h2 className="text-lg font-medium">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  // Settings for the carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
  };

  const features = [
    {
      icon: "📋",
      title: "Effortless Event Planning",
      description:
        "Relax and enjoy your special moments while we take care of every detail. From setup to execution, our team ensures a flawlessly coordinated event experience.",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
    {
      icon: "💰",
      title: "Affordable Event Solutions",
      description:
        "We design and execute events that fit your budget, combining smart planning and expert negotiation to deliver exceptional value without compromising quality",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
    {
      icon: "👥",
      title: "Experienced Professionals",
      description:
        "With  years of expertise, our team is equipped to handle all the challenges of event management, ensuring your celebration is stress-free and memorable",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
    {
      icon: "📊",
      title: "Transparent Budget Management",
      description:
        "We help you set a budget that aligns with your vision and maintain full transparency, ensuring you get the most value out of your investment.",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
    {
      icon: "🎨",
      title: "Custom-Crafted Events",
      description:
        "Every event is designed to reflect your unique style and preferences. We work closely with you to bring your vision to life, creating unforgettable experiences.",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
    {
      icon: "🎨",
      title: "Tailored Event Experiences",
      description:
        "Our personalized approach ensures every detail of your event resonates with your personality, leaving you and your guests with cherished memories.",
      borderColor: "border-rose-500  bg-rose-50 text-black",
    },
  ];

  const excellence = [
    {
      icon: "📋",
      title: "Venue Selection",
      description:
        "We specialize in finding venues that perfectly match your style, preferences, and budget. From arranging seamless site visits to securing exclusive packages, we simplify the process to help you shortlist the ideal location.",
      
      },
    {
      icon: "💰",
      title: "Catering Services",
      description:
        "If your chosen venue allows external catering, we’ll arrange a top-tier service that suits your event. Our team works with you to craft a menu that aligns with your taste and budget, ensuring a delectable dining experience.",
    },
    {
      icon: "👥",
      title: "Event Decorations",
      description:
        "Our creative team transforms your vision into reality with stunning decorations tailored to your theme. With over 15 years of experience, we handle every detail to ensure a flawless and visually captivating event.",
    },
    {
      icon: "📊",
      title: "Guest Coordination",
      description:
        "We make guest management effortless, from maintaining a clear budget to aligning with your event’s theme. Our expertise helps recommend innovative ideas and ensures seamless coordination throughout your celebration.",
    },
    {
      icon: "🎨",
      title: "Gifting & Hampers",
      description:
        "Delight your guests with thoughtfully curated gifts and hampers. We work closely with you to create unique, personalized keepsakes that leave a lasting impression on everyone attending your event.",
    },
    {
      icon: "🎨",
      title: "Transportation Services",
      description:
        "From guest pickups to event logistics, we provide reliable and efficient transportation services. Our focus is on ensuring a smooth journey for you and your attendees, making your event stress-free and enjoyable.",
    },
  ];

  return (
    <main className="flex-1 text-white  ">
      <section>
        <div className="   text-center">
          {/* Carousel component */}
          <Slider className="max-h-full h-full w-[100%]" {...settings}>
            <div>
              <img
                src="/assets/pic1.png" // Correct path to the image
                alt="Destination Wedding"
                className="w-full h-auto mb-8 rounded shadow"
              />
            </div>
            <div>
              <img
                src="/assets/pic2.png" // Correct path to pic2
                alt="Wedding Destination 2"
                className="w-full h-auto mb-8 rounded shadow"
              />
            </div>
            <div>
              <img
                src="/assets/pic3.png" // Correct path to pic3
                alt="Wedding Destination 3"
                className="w-[100%] h-auto mb-8 rounded shadow"
              />
            </div>
          </Slider>
        </div>
      </section>

      {/* Design Merged Content Section */}
      <section className="bg-white text-gray-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-rose-700 mb-4">
              Top Wedding and Event Management Company in Delhi NCR
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Planners Events: Best Event Planners in Delhi NCR, India
            </h3>
            <p className="mb-4 leading-relaxed">
              Every celebration deserves to be extraordinary and unforgettable.
              At Planners Events, we specialize in making weddings, birthday
              parties, anniversaries, and corporate events truly remarkable with
              our creativity and professionalism. With over years of experience,
              we are recognized as the leading event planners in Delhi,
              delivering outstanding event management services in Delhi NCR and
              across India.
            </p>
            <p className="mb-4 leading-relaxed">
              We take pride in going above and beyond to make your celebrations
              truly exceptional. By partnering with trusted vendors and
              leveraging the expertise of our skilled event team, we deliver
              outstanding planning services tailored to your unique vision and
              budget. Whether you envision an intimate gathering in a
              picturesque local setting or a lavish celebration in an exquisite
              international location, we ensure your event is unforgettable and
              cherished by your guests.
            </p>
            <p className="mb-4 leading-relaxed">
              As a leading event planner in Delhi and a trusted name in event
              management, we prioritize excellence and creativity in every
              detail. Our team is committed to turning your dreams into reality,
              understanding that every element matters. When you choose us as
              your event planner, you can rest assured that every aspect of your
              special occasion will be handled with precision and care. While we
              work behind the scenes to create lasting memories, you can focus
              on enjoying your celebration to the fullest!
            </p><br/>
            <Link
              to="/contactPage"
              className="bg-rose-700 text-white px-4 py-2 rounded-lg text-xl font-semibold hover:bg-rose-800 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Image Content */}
          <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col space-y-4">
            <img
              src="/assets/pic4.png"
              alt="Event Planner"
              className="rounded-lg shadow-lg h-96  w-auto mx-auto object-cover transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-rose-700 mb-6">
          "Why Trust Planners Events for Your Special Occasions?"
          </h2>
          <p className="text-gray-600 text-lg mb-12">
          As premier social event organizers in Delhi, Planners Events is dedicated to
           creating unforgettable experiences tailored to your unique vision and vibrant 
           personality. Let us transform your celebrations into extraordinary moments.


          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md border-l-4 ${feature.borderColor}`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                {/* Description */}
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Services Section */}
      <EventServices />
      <WeddingTimeline />
      {/*Event Excelence Record starts here */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-rose-700 mb-6">
            Event Excellence Redefined
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            From intimate gatherings to grand celebrations, we ensure every
            detail is perfect. Experience seamless planning and unforgettable
            moments with us.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excellence.map((excellent, index) => (
              <div
                key={index}
                className="bg-rose-100 text-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/*Icon*/}
                <div className="text-4xl mb-4">{excellent.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {excellent.title}
                </h3>
                {/* Description */}
                <p className="text-sm leading-relaxed">
                  {excellent.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/aboutus"
              className="bg-rose-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-rose-800 transition duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
      {/*Event Excelence Record ends here */}
      {/* <Testimonials/> */}
    </main>
  );
};

export default MainContent;
