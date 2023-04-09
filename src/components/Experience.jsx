import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	console.log(experience);
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div className="text-white text-[24px] font-bold">
				{experience.company_name}{" "}
			</div>
			{experience.date}
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>What i have done so far</p>
				<h2 className={`${styles.sectionHeadText}`}>Experiences</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} experience={exp} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
