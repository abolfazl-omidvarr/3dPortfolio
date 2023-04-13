import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Header } from "../components";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<Header
				head={"Projects."}
				sub={"My Works"}
				desc={
					"Following projects showcases my skills and experience through real-world examples of my work. Each project briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
				}
			/>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{projects.map((project, i) => {
					const { image, tags, source_code_link, description } = project;
					return (
						<SwiperSlide key={"SwiperSlide" + i}>
							<div className="bg-tertiary p-5 rounded-2xl w-full h-full">
								<div className="relative w-full h-[230px]">
									<img
										src={image}
										alt="project_image"
										className="w-full h-full object-cover rounded-2xl"
									/>

									<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
										<div
											onClick={() => window.open(source_code_link, "_blank")}
											className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
										>
											<img
												src={github}
												alt="source code"
												className="w-1/2 h-1/2 object-contain"
											/>
										</div>
									</div>
								</div>

								<div className="mt-5">
									<h3 className="text-white font-bold text-[24px]">{name}</h3>
									<p className="mt-2 text-secondary text-[14px]">
										{description}
									</p>
								</div>

								<div className="mt-4 flex flex-wrap gap-2">
									{tags.map((tag) => (
										<p
											key={`${name}-${tag.name}`}
											className={`text-[14px] ${tag.color}`}
										>
											#{tag.name}
										</p>
									))}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			{/* <div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div> */}
		</>
	);
};
// export default Works;

export default SectionWrapper(Works, "works");
