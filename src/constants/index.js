import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	selfStudy,
	mci,
	quera,
	bankistApp,
	bankistWeb,
	colorPallet,
	mapty,
	spaceTour,
	sneakers,
	placeHolder,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend enthusiast",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
];

const experiences = [
	{
		title: "Self Study",
		// company_name: "Starbucks",
		icon: selfStudy,
		iconBg: "#E6DEDD",
		date: "March 2020 - Now",
		points: [
			"Self-study learning as a web developer allows me to learn the latest technologies and programming languages, such as HTML, CSS, JavaScript, and React, at my own pace and convenience.",
			"provides me with access to a wide range of online resources, including tutorials, video courses, and code libraries, which are often more affordable than traditional education.",
			"enables me to work on personal projects, such as building websites and applications, which not only reinforces my knowledge but also allows me to build a portfolio of work to showcase to potential employers.",
			"allows me to experiment and take risks without the pressure of deadlines or grades, which fosters creativity and innovation in my work.",
		],
	},

	{
		title: "MCI voluntary development",
		company_name: "MCI",
		icon: mci,
		iconBg: "#E6DEDD",
		date: "January 2022 - February 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Contributing to a big web development project as a volunteer allows me to gain valuable real-world experience working with other professionals in the field.",
			"provides me with an opportunity to work on a project that aligns with my interests and passions, while also making a meaningful impact in the community.",
			"Working on a big project as a volunteer allows me to build my portfolio and demonstrate my skills to potential employers, which can increase my job prospects in the future.",
		],
	},
	{
		title: "Quera Front-End bootcamp",
		company_name: "Quera",
		icon: queras,
		iconBg: "#E6DEDD",
		date: "March 2023 - Now",
		points: [
			"Attending a web development bootcamp allows me to immerse myself in a comprehensive learning experience that covers a wide range of web development topics.",
			"Participating in a bootcamp provides me with structured learning opportunities, as well as access to experienced instructors who can offer guidance and feedback on my work.",
			"Attending a bootcamp allows me to develop valuable technical and soft skills that are highly valued in the web development industry, such as coding proficiency, project management, and teamwork.",
			"helping me to develop strong teamwork skills, as I have had the opportunity to collaborate with other participants on projects and assignments, which has allowed me to learn from others and build my interpersonal skills.",
		],
	},
];

const projects = [
	{
		name: "Color Pallet",
		description:
			"a beautiful color pallet creator that helps designers to create their own pallets and save their favorite colors",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "JSS",
				color: "pink-text-gradient ",
			},
			{
				name: "React.js",
				color: "green-text-gradient",
			},
			{
				name: "React-Router",
				color: "",
			},
		],
		image: colorPallet,
		source: "https://colorpallet.netlify.app",
		visit: "https://colorpallet.netlify.app",
	},
	{
		name: "MAPTY",
		description:
			"this little web application helps and keep track of distances you ran or cycled. it will come in handy",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient ",
			},
			{
				name: "Vanilla JS",
				color: "green-text-gradient",
			},
		],
		image: mapty,
		source: "https://mapty-responsive.netlify.app",
		visit: "https://mapty-responsive.netlify.app",
	},
	{
		name: "Space Tourism",
		description:
			"an elegant multi-page space website. are you ready to explore our solar system? fasten your seatbelt then",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient ",
			},
			{
				name: "Vanilla JS",
				color: "green-text-gradient",
			},
		],
		image: spaceTour,
		source: "https://mapty-responsive.netlify.app",
		visit: "https://mapty-responsive.netlify.app",
	},
	{
		name: "Bankist App",
		description:
			"did you register to bankist? keep track of your expenses and pay up your loan. come have a look arround.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient ",
			},
			{
				name: "Vanilla JS",
				color: "green-text-gradient",
			},
		],
		image: bankistApp,
		source_code_link: "",
	},
	{
		name: "Bankist Landing Page",
		description:
			"are you looking for a reliable and modern banking system? have a look at our web page. you will not regret it",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient ",
			},
			{
				name: "Vanilla JS",
				color: "green-text-gradient",
			},
		],
		image: bankistWeb,
		source_code_link: "",
	},
	{
		name: "eCommerce single page",
		description:
			"are you tired of looking for sneakers? try this one. sure it fits you perfectly and comes with a reasonable price.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient ",
			},
			{
				name: "Vanilla JS",
				color: "green-text-gradient",
			},
		],
		image: sneakers,
		source: "https://ecommerce-omidvar.netlify.app",
		visit: "https://ecommerce-omidvar.netlify.app",
	},
];

export { services, technologies, experiences, projects };
