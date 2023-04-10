import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

import { useInView } from "framer-motion";

const SectionWrapper = (Component, idName) =>
	function HOC() {
		const ref = useRef(null);
		const isInView = useInView(ref);

		useEffect(() => {
			console.log("Element is in view: ", isInView);
			console.log(ref.current);
		}, [isInView]);

		return (
			<motion.section
				ref={ref}
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.5 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
