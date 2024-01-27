import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./bigChartBox.scss";
import Dropdown from "../../images/navbar/Dropdown.png";
import { SetStateAction, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { bigChartData } from "../../data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BigChartBox = () => {
	const [dropdown, setDropdown] = useState(false);
	const [selectedValue, setSelectedValue] = useState("week");
	const { theme } = useThemeContext();

	const handleDropdownChange = (e: { target: { value: SetStateAction<string> } }) => {
		setSelectedValue(e.target.value);
	};

	const chartData = {
		labels: bigChartData.map((item) => item.name),
		datasets: [
			{
				// label: selectedValue === "week" ? "Weekly" : "Monthly",
				data: bigChartData.map((item) => (selectedValue === "week" ? item.weekly : item.monthly)),
				backgroundColor: theme === "light" ? "#34caa41c" : "#0c97746c",
				hoverBackgroundColor: function (context: { chart: any }) {
					const chart = context.chart;
					const { ctx, chartArea } = chart;

					if (!chartArea) {
						return "#34caa41c";
					}
					const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
					gradient.addColorStop(0, "#34caa41c");
					gradient.addColorStop(0.8, "#34CAA5");
					gradient.addColorStop(1, "#34CAA5");

					return gradient;
				},
			},
		],
	};

	const options = {
		indexAxis: "x",
		elements: {
			bar: {
				borderWidth: 0,
				borderRadius: 20,
			},
		},
		responsive: true,
		plugins: {
			tooltip: {
				displayColors: false,
				yAlign: "bottom",
				backgroundColor: theme === "light" ? "#000" : "#fff",
				bodyColor: theme === "light" ? "#fff" : "#000",
				titleFont: {
					size: 0,
				},
				padding: {
					top: 3,
					bottom: 5,
					left: 15,
					right: 15,
				},
				footerSpacing: 2,
				footerMarginTop: 2,
				callbacks: {
					label: function (tooltipItem: { parsed: { y: number } }) {
						return "$" + tooltipItem.parsed.y.toFixed(4);
					},
				},
			},
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: false,
				},
				ticks: {
					color: theme === "light" ? "#525252" : "#E5E5E5",
				},
			},
			y: {
				type: "linear",
				ticks: {
					stepSize: 8,
					precision: 1,
					color: theme === "light" ? "#525252" : "#E5E5E5",
					callback: function (value: number) {
						if (value === 0) {
							return value;
						} else if (value === 8) {
							return "5.0000";
						} else if (value === 16) {
							return "10.0000";
						} else if (value === 24) {
							return "20.0000";
						} else if (value === 32) {
							return "30.0000";
						} else if (value === 40) {
							return "40.0000";
						} else if (value === 48) {
							return "50.0000";
						} else if (value === 56) {
							return "60.0000";
						} else if (value === 64) {
							return "70.0000";
						} else {
							return value.toFixed(4);
						}
					},
				},
				border: {
					display: false,
					dash: [8, 4],
				},
				grid: {
					display: true,
					drawBorder: false,
					color: theme === "light" ? "#E5E5E5" : "#525252",
					borderDash: [5, 5],
					tickColor: "transparent",
				},
			},
		},
	};
	return (
		<div className="bigChartBox">
			<div className="wrapper">
				<h3>Sales Trends</h3>
				<span>
					<p>Sort by: </p>
					<select className={dropdown ? "down" : ""} onClick={() => setDropdown(true)} onChange={handleDropdownChange}>
						<option value="week">
							Weekly <img src={Dropdown} alt="Dropdown" />
						</option>
						<option value="month">Monthly</option>
					</select>
				</span>
			</div>
			<Bar data={chartData} options={options} />
		</div>
	);
};

export default BigChartBox;
