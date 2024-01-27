import "./chartBox.scss";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
	color: string;
	icon: string;
	icon2: string;
	title: string;
	dataKey: string;
	number: string;
	percentage: string;
	textColor: string;
	chartData: object[];
};

const ChartBox = (props: Props) => {
	return (
		<div className="chartBox">
			<div className="boxInfo">
				<div className="title">
					<img src={props.icon} alt="icon" className="icon" />
					<div className="chart">
						<ResponsiveContainer width="99%" height="100%">
							<AreaChart
								width={200}
								height={60}
								data={props.chartData}
								margin={{
									top: 5,
									right: 0,
									left: 0,
									bottom: 5,
								}}
							>
								<Tooltip contentStyle={{ background: "transparent", border: "none" }} labelStyle={{ display: "none" }} position={{ x: 10, y: 70 }} />
								<Area type="monotone" dataKey={props.dataKey} stroke={props.textColor} strokeWidth={2} dot={false} fill={props.color} />
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
				<h2>{props.title}</h2>
				<h1>{props.number}</h1>
				<div className="container">
					<span className="percentage" style={{ color: props.textColor, backgroundColor: props.color }}>
						<img src={props.icon2} alt="Trend" />
						<div>{props.percentage}</div>
					</span>
					<p>vs. previous month</p>
				</div>
			</div>
		</div>
	);
};

export default ChartBox;
