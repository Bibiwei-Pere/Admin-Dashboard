import "./navbar.scss";
import Search from "../../images/navbar/Search.png";
import Calender from "../../images/navbar/Calender.png";
import Notification from "../../images/navbar/Notification.png";
import User from "../../images/navbar/User.png";
import Dropdown from "../../images/navbar/Dropdown.png";
import Close from "../../images/navbar/icon-close.svg";
import { SetStateAction, useState } from "react";

const Navbar = () => {
	const [inputValue, setInputValue] = useState("");
	const [dropdown, setDropdown] = useState(false);

	const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
		setInputValue(e.target.value);
	};
	const currentDate = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return (
		<div className="navbar">
			<h2>Dashboard</h2>
			<div className="container">
				<div className="search">
					<input type="text" placeholder="           Search..." value={inputValue} onChange={handleInputChange} />
					{inputValue === "" && <img src={Search} alt="Search Icon" className="search_icon" />}
				</div>
				<div className="date">
					<img src={Calender} alt="Calender" className="calender" />
					<h5>{currentDate}</h5>
				</div>
				<div className="icons">
					<div className="notification">
						<img src={Notification} alt="Notification" />
					</div>
					<div className="user">
						<img src={User} alt="User" />
						<div className="box">
							<h4>Justin Bergson</h4>
							<p>justin@gmail.com</p>
						</div>
						<div className={dropdown ? "down active" : "down"} onClick={() => setDropdown(true)}>
							<img src={Dropdown} alt="Dropdown" />
						</div>
					</div>
					{dropdown ? (
						<div className="dropdown">
							<span>
								<h5 className="close" onClick={() => setDropdown(false)}>
									{/* <img src={Close} alt="Close" /> */}x
								</h5>
							</span>
							<div>
								<p>First name: </p>
								<h5>Justin Bergson</h5>
							</div>
							<div>
								<p>Last name: </p>
								<h5>Justin Bergson</h5>
							</div>
							<div>
								<p>Phone:</p>
								<h5>08118333284</h5>
							</div>
							<div>
								<p>Email:</p>
								<h5>justinbergson@gmail.com</h5>
							</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
