import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Abolfazl &nbsp;
						<span className="sm:block hidden">|&nbsp; Portfolio</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nl) => (
						<li
							onClick={() => setActive(nl.title)}
							key={nl.id}
							className={`${
								active === nl.title ? "text.white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<a href={`#${nl.id}`}>{nl.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							toggle ? "flex" : "hidden"
						} p-6  black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex flex-col justify-end items-start gap-4">
							{navLinks.map((nl) => (
								<li
									onClick={() => {
										setToggle(false);
										setActive(nl.title);
									}}
									key={nl.id}
									className={`${
										active === nl.title ? "text.white" : "text-secondary"
									} hover:text-white text-[16px] font-medium font-poppins cursor-pointer`}
								>
									<a href={`#${nl.id}`}>{nl.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
