import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { userRows } from "../../data";

const columns: GridColDef[] = [
	{
		field: "img",
		headerName: "Name",
		width: 240,
		renderCell: (params) => {
			return (
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<img src={params.row.img || "/noavatar.png"} alt="users" />
					<h6>{params.row.name}</h6>
				</div>
			);
		},
	},
	{
		field: "date",
		type: "string",
		headerName: "Date",
		width: 145,
		editable: true,
	},
	{
		field: "amount",
		type: "string",
		headerName: "Amount",
		width: 145,
		renderCell: (params) => {
			return <h6>{params.row.amount}</h6>;
		},
		editable: true,
	},
	{
		field: "status",
		headerName: "Status",
		width: 120,
		type: "string",
		renderCell: (params) => {
			const statusColor = params.row.status === "Paid" ? "green" : "red";
			return <div style={{ color: statusColor }}>{params.row.status}</div>;
		},
		editable: true,
	},

	{
		field: "invoice",
		headerName: "Invoice",
		width: 120,
		renderCell: (params) => {
			return (
				<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					<img style={{ width: "16px", cursor: "pointer", height: "16px" }} src={params.row.icon} alt="users" />
					<span>{params.row.invoice}</span>
				</div>
			);
		},
	},
];

const Users = () => {
	return (
		<div className="users">
			<div className="wrapper">
				<h3>Last Orders</h3>
				<h4>See All</h4>
			</div>
			<DataTable slug="users" columns={columns} rows={userRows} />
		</div>
	);
};

export default Users;
