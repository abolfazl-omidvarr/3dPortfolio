import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		msg: "",
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (e) => {};
	const handleSubmit = (e) => {};
	return (
		<div className=" xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">
			<motion.dev
				variants={slideIn("left", "tween", 0.2, 1)}
				className="rounded-2xl flex-[0.75] bg-black-100 p-8"
			>
				<p className={`${styles.sectionSubText}`}>Get in touch</p>
				<h3 className={`${styles.sectionHeadText}`}>Contact</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<textarea
							type="text"
							name="message"
							rows="7"
							value={form.msg}
							onChange={handleChange}
							placeholder="What do you want to say"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit shadow-md font-bold shadow-primary rounded-xl text-white"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.dev>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
