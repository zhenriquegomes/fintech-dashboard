import { Paper, Typography } from "@mui/material";

const SaleResume = ({ name, value }: { name: string; value: number }) => {
	return (
		<Paper sx={{ padding: 1, width: "10rem", backgroundColor: "#90caf9" }}>
			<Typography variant="h5">{name}</Typography>
			<Typography>
				{value.toLocaleString("en", { style: "currency", currency: "USD" })}
			</Typography>
		</Paper>
	);
};

export default SaleResume;
