import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

import { waveStack, mountainStack, waveLine } from "./assets";

const App = () => {
	const [loading, setLoading] = useState(true);
	const loadingRef = useRef();
	const mainRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			mainRef.current.style.overflow = "auto";
			mainRef.current.style.height = "auto";
			setTimeout(() => {
				loadingRef.current.style.display = "none";
			}, 1000);
		}, 2500);
	}, [loading]);

	useEffect(() => {
		document.onreadystatechange = function () {
			if (document.readyState == "complete") {
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			}
		};
	}, []);
	return (
		<BrowserRouter>
			<div
				ref={mainRef}
				className="relative z-0 bg-[#2c1135] h-screen overflow-hidden"
			>
				<div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-bottom">
					<motion.div
						ref={loadingRef}
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ delay: 2.5 }}
						className={`absolute w-screen h-screen z-30 grid justify-center items-center backdrop-blur-2xl`}
					>
						{loading ? (
							<div className="lds-roller">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						) : (
							<TypeAnimation
								sequence={["Welcome !"]}
								wrapper="span"
								cursor={false}
								repeat={0}
								speed={45}
								className="text-[#f7bb3a] inline-block text-[8rem] font-serif font-welcomeText select-none"
							/>
						)}
					</motion.div>

					<Navbar />
					<Hero />
				</div>
				{!loading && (
					<>
						<div className="relative">
							<img src={waveLine} className="absolute -z-10  w-full h-full" />
							<About />
						</div>
						<div className="relative">
							<img src={waveStack} className="absolute -z-10  w-full h-full" />
							<Experience />
						</div>
						<div className="relative">
							<img
								src={mountainStack}
								className="absolute -z-10  w-full h-full"
							/>
							<Tech />
							<Works />
						</div>
						<div className="relative z-0 bg-gradient-to-b from-[#0a050b] from-[0%] to-[#000]">
							<Contact />
							<StarsCanvas />
						</div>
					</>
				)}
			</div>
		</BrowserRouter>
	);
};

export default App;
