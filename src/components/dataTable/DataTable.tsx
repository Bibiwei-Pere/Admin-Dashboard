import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";

type Props = {
	columns: GridColDef[];
	rows: object[];
	slug: string;
};

const DataTable = (props: Props) => {
	return (
		<div className="dataTable">
			<DataGrid
				className="dataGrid"
				rows={props.rows}
				columns={[...props.columns]}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: false,
						quickFilterProps: { debounceMs: 500 },
					},
				}}
				pageSizeOptions={[5]}
				disableColumnMenu
				disableRowSelectionOnClick
				disableColumnFilter
				disableDensitySelector
				disableColumnSelector
			/>
		</div>
	);
};

export default DataTable;
