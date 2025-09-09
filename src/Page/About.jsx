import React from 'react';
import { motion } from 'framer-motion';
import StatsSection from '../Componet/Statssection';
import AboutSection from '../Componet/AboutHero';
import CallToAction from '../Componet/CallToAction';
import ProfileCard from '../Componet/TeamsCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const About = () => {
  const data = [
    {
      img:"https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/team_1.jpg",
      name : "Connor Flores",
      position : "JV Property Management",
      message : "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of",
      imagePosition : "top"
    },
    {
      img:"https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/team_3.jpg",
      name : "Caroline Vaughn",
      position : "JV Property Management",
      message : "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of",
      imagePosition : "bottom"
    },
    {
      img:"https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/team_2.jpg",
      name : "Willie Todd",
      position : "JV Property Management",
      message : "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of",
      imagePosition : "top"
    },
    {
      img:"https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/team_4.jpg",
      name : "Josie Maxwell",
      position : "JV Property Management",
      message : "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of",
      imagePosition : "bottom"
    },
  ];

  return (
    <div>

      {/* About Sections */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection
          title="About MaisonCo"
          highlightColor="text-[#3F4448]"
          subtitle="Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned"
          description1="We recognise that the ongoing support of an engaged community is integral to the future of B2B media, meaning that we’re focused on delivering an audience inspired approach to knowledge generation and intelligence provision. Through the Building family of products and services, our community reach now extends across digital, print and live platforms, and as a result we’re more than just a media provider; we’re an influential hub for world-class thought leadership and innovation."
          image="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/banner_ab1.jpg"
          imagePosition="right"
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <StatsSection />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection
          title="Our Story"
          highlightColor="text-[#3F4448]"
          description1="We recognise that the ongoing support of an engaged community is integral to the future of B2B media, meaning that we’re focused on delivering an audience inspired approach to knowledge generation and intelligence provision. Through the Building family of products and services, our community reach now extends across digital, print and live platforms, and as a result we’re more than just a media provider; we’re an influential hub for world-class thought leadership and innovation."
          image="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/banner_ab2.jpg"
          imagePosition="left"
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection
          title="Our Values"
          highlightColor="text-[#3F4448]"
          subTitleheader="In-House Made"
          subtitle="From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Costix "
          subTitleheader2="Our Customers Mean the World"
          description1="From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Costix offers an array of amenities …"
          image="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/banner_ab3.jpg"
          imagePosition="right"
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection
          title="Strategy, Mission, Vision"
          highlightColor="text-[#3F4448]"
          subtitle="Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you will get. Realize that things will be hard at first, but the rewards will be worth it. Many of us have to be reminded that almost everything worthwhile in our lives is hard at first."
          description1="Learning to walk was hard at first, but gradually we learned and now it is effortless. The same holds true for our more advanced"
          image="https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/banner_ab4.jpg"
          imagePosition="left"
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CallToAction
          title="AVAILABLE FOR"
          highlight="IMMEDIATE OCCUPANCY!"
          buttonText="CONTACT NOW !"
          onClick={() => console.log("Button clicked!")}
        />
      </motion.section>

      {/* Team Section */}
      <section className="p-6 md:p-12">
        <h1
          className={`text-xl tracking-widest font-semibold flex items-center gap-2 pb-8`}
        >
          <span className={`block w-6 h-1 bg-current`}></span>
          OUR TEAM
        </h1>

        <motion.div
          className="flex  justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.15 } 
            },
            hidden: {},
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="w-full sm:w-[45%] md:w-[30%]"
            >
              <ProfileCard
                image={item.img}
                imagePosition={item.imagePosition}
                name={item.name}
                position={item.position}
                message={item.message}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
