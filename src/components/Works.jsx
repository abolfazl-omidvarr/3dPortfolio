import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import { github, redirect } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
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
					"Looking for inspiration? You've come to the right place! My project showcase is a testament to my passion for creating unique and functional designs. From sleek and modern websites to intuitive mobile apps, my work is built to stand out in today's crowded digital landscape. So take a moment to explore my portfolio, and see for yourself why I'm the right choice for your next project. Let's collaborate and bring your vision to life!"
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
					const { image, tags, source_code_link, description, visit } = project;
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
									<div className="absolute inset-0 top-12 flex justify-end m-3 card-img_hover">
										<div
											onClick={() => window.open(visit, "_blank")}
											className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
										>
											<img
												src={redirect}
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
		</>
	);
};
// export default Works;

export default SectionWrapper(Works, "works");
