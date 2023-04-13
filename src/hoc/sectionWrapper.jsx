import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${
					idName === "works" ? "w-full sm:px-0 px-0" : "max-w-7xl sm:px-16 px-6"
				} mx-auto relative z-0 sm:py-16 py-10`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</motion.section>
		);
	};

export default StarWrapper;
