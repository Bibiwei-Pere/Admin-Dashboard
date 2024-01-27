import { topPlatformData } from "../../data";
import "./TopPlatform.scss";
import ProgressBar from "@ramonak/react-progress-bar";

const TopPlatform = () => {
	return (
		<div className="topPlatform">
			<div className="wrapper">
				<h3>TopPlatform</h3>
				<h4>See All</h4>
			</div>
			<div className="container">
				{topPlatformData.map((data) => {
					return (
						<div>
							<h4>{data.title}</h4>
							<ProgressBar completed={data.percent} height="12px" bgColor={data.color} baseBgColor="#F5F5F5" customLabel=" " />
							<span>
								<p>{data.amount}</p>
								<p>{data.value}</p>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopPlatform;
