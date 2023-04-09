import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { init } from "@emailjs/browser";

const SectionWrapper = (Component, idName) => {
	return function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span id={idName} className="hash-span">
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};
};

export default SectionWrapper;
