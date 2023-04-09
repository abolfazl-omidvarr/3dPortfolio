import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt scale="1.05" className="xs:w-[250px] w-full ">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
				className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
			>
				<div className="bg-tertiary rounded-2xl py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Introduction</p>
				<h2 className={`${styles.sectionHeadText}`}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				im very sext developer im very sext developer im very sext developer im
				very sext developer im very sext developer im very sext developer im
				very sext developer im very sext developer im very sext developer im
				very sext developer im very sext developer im very sext developer
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((srv, i) => (
					<ServiceCard key={srv.title} index={i} {...srv} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
