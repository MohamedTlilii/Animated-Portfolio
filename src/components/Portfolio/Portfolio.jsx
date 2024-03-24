import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in dolorum nobis ab tempore earum.",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/19967332/pexels-photo-19967332/free-photo-of-azul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in dolorum nobis ab tempore earum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/19845618/pexels-photo-19845618/free-photo-of-blue-and-white-texture-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in dolorum nobis ab tempore earum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/20427316/pexels-photo-20427316/free-photo-of-a-moped-parked-in-front-of-a-blue-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in dolorum nobis ab tempore earum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
