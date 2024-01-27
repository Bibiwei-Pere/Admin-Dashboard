import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import TopPlatform from "../../components/pieCartBox/TopPlatform";
import { chartBoxIncome, chartBoxOrder, chartBoxRefund, chartBoxSales } from "../../data";
import Users from "../users/Users";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			<div className="box box1">
				<BigChartBox />
			</div>
			<div className="box box2">
				<ChartBox {...chartBoxOrder} />
			</div>
			<div className="box box3">
				<ChartBox {...chartBoxRefund} />
			</div>
			<div className="box box4">
				<ChartBox {...chartBoxSales} />
			</div>
			<div className="box box5">
				<ChartBox {...chartBoxIncome} />
			</div>
			<div className="box box6">
				<Users />
			</div>
			<div className="box box7">
				<TopPlatform />
			</div>
		</div>
	);
};

export default Home;
