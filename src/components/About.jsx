import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Header } from "../components";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full justify-self-center">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col self-center"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<Header
				head={"Overview"}
				sub={"Introduction"}
				desc={
					"Hey there, I'm a junior web developer who loves creating awesome web applications. I'm passionate about both front-end and back-end development, and enjoy building user-friendly interfaces with HTML, CSS, and JavaScript, as well as optimizing server-side logic with technologies like Node.js, Express, and MongoDB. I'm always eager to learn and collaborate, and believe that the best ideas come from working together. When I'm not coding, you can find me tinkering with new frameworks, contributing to open-source projects, and keeping up with the latest tech trends. Let's work together to bring your web app to life - I can't wait to get started!"
				}
			/>

			<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
