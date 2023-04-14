import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";

import { avatar } from "../assets";
import Tilt from "react-parallax-tilt";

const Hero = () => {
	return (
		<motion.section
			// initial={{ opacity: "0%" }}
			// animate={{ opacity: "100%" }}
			// transition={{ delay: 1 }}
			className={`relative w-full h-screen mx-auto grid grid-cols-1 sm:grid-cols-c2 justify-center items-center overflow-hidden`}
		>
			<motion.div
				initial={{ x: "-200%" }}
				animate={{ x: 0 }}
				transition={{ delay: 3 }}
				className={`${styles.paddingX} inset-0 pt-14 max-w-7xl mx-auto flex flex-row items-start gap-2`}
			>
				<div className="flex flex-col justify-center items-center mt-5 ">
					<div className="w-5 h-5 rounded-full bg-[#f87a04]" />
					<div className="w-1 sm:h-80 h-40 orange-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm{" "}
						<TypeAnimation
							sequence={["", 3500, "Abolfazl"]}
							wrapper="span"
							cursor={false}
							repeat={0}
							delay
							className="text-[#f7bb3a] inline-block"
						/>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 text-[16px]`}
					>
						a passionate and creative junior web developer.
						<br className="sm:block hidden" /> With a keen eye for design and a
						love for all things that this field can offer
						<br className="sm:block hidden" />
					</p>
					<TypeAnimation
						sequence={[
							"",
							4000,
							"Let's work together to bring your ideas to life!",
						]}
						wrapper="span"
						cursor={true}
						repeat={0}
						speed={75}
						className="text-[#ee8166] inline-block text-[28px] mt-4"
					/>
				</div>
			</motion.div>

			<motion.figure
				initial={{ x: "200%" }}
				animate={{ x: 0 }}
				transition={{ delay: 3 }}
				className="w-full "
			>
				<Tilt
					tiltMaxAngleX={1}
					tiltMaxAngleY={1}
					className="max-w-xs md:max-w-[85%] m-auto "
				>
					<img src={avatar} alt="avatar" />
				</Tilt>
			</motion.figure>

			<div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</motion.section>
	);
};

export default Hero;
