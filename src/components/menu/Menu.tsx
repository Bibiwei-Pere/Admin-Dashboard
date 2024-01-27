import { Link } from "react-router-dom";
import "./menu.scss";
import { menu, menuFooter } from "../../data";
import Logo from "../../images/sidebar/Vector.svg";
import Light from "../../images/sidebar/Lightmode.svg";
import Dark from "../../images/sidebar/Darkmode.svg";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";

const Menu = () => {
	const { theme, setTheme } = useThemeContext();
	const [selected, setSelected] = useState(0);
	const [themeSelect, SetThemeSelect] = useState("dark");

	const themeSwicther = () => {
		setTheme(theme === "light" ? "dark" : "light");
		SetThemeSelect("dark");
	};
	return (
		<div className={theme}>
			<div className="menu">
				<img src={Logo} alt="logo" className="logo" />
				{menu.map((item, index) => (
					<div className={selected === index ? "item active" : "item"} key={index} onClick={() => setSelected(index)}>
						<Link to={item.url} className="listItem">
							<img className="img" src={item.icon} alt="" />
							<div className="bar"></div>
							<span className="listItemTitle">{item.title}</span>
						</Link>
					</div>
				))}
				<div className={themeSelect === theme ? "theme_switch active" : "theme_switch"}>
					<div className="light" onClick={themeSwicther}>
						<img src={Light} alt="Light" />
					</div>
					<div className="dark" onClick={themeSwicther}>
						<img src={Dark} alt="Dark" />
					</div>
				</div>
				<div className="menu_footer">
					{menuFooter.map((item) => (
						<div className="item" key={item.id}>
							<Link to={item.url} className="listItem">
								<img className="img" src={item.icon} alt="" />
								<div className="bar"></div>
								<span className="listItemTitle">{item.title}</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menu;
