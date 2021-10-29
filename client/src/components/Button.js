import React from "react";

const Button = ({ link, text }) => {
	return (
		<>
			<a href={link} className="button text-white bg-twitch hover:bg-white hover:text-gray-900">
				{text}
			</a>
		</>
	);
};

export default Button;
