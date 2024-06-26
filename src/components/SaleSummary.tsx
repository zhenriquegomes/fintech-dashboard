import { Paper, Typography } from "@mui/material";

const SaleSummary = ({ name, value }: { name: string; value: number }) => {
	return (
		<Paper sx={{ padding: 2, width: "100%" }} elevation={3}>
			<Typography variant="h5">{name}</Typography>
			<Typography>
				{value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
			</Typography>
		</Paper>
	);
};

export default SaleSummary;
