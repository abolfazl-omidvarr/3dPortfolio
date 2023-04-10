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
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[100%] h-[80%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, i) => (
					<li
						key={"exp-point-" + i}
						className="text-white text-[14px] pl-1 tracking-wide"
					>
						{point}
					</li>
				))}
			</ul>
			<div className="mt-5">{experience.date}</div>
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
