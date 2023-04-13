import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Header = ({ sub, head, desc }) => {
	const padding = sub === "My Works" && "sm:px-16 px-6 ";
	return (
		<div className="text-center">
			<motion.div variants={textVariant()}>
				<p className={padding + styles.sectionSubText}>{sub}</p>
				<h2 className={padding + styles.sectionHeadText}>{head}</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className={`${padding} mt-4 text-secondary text-[17px] max-w-5xl m-auto leading-[30px]`}
			>
				{desc}
			</motion.p>
		</div>
	);
};

export default Header;
