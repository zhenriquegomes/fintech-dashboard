import { Box, CircularProgress, Paper, Stack } from "@mui/material";
import useSales from "../hooks/useSales";
import SaleSummary from "../components/SaleSummary";
import Chart from "../components/Chart";

const Summary = () => {
	const { data, loading } = useSales();
	if (loading) return <CircularProgress size="5rem" />;
	if (!data) return null;
	return (
		<Box marginBottom={3}>
			<Stack direction="row" spacing={2} marginBottom={3}>
				<SaleSummary
					name="Vendido"
					value={data
						.filter((sale) => sale.status != "falha")
						.reduce((sum, sale) => sum + sale.preco, 0)}
				/>
				<SaleSummary
					name="Recebido"
					value={data
						.filter((sale) => sale.status === "pago")
						.reduce((sum, sale) => sum + sale.preco, 0)}
				/>
				<SaleSummary
					name="Processando"
					value={data
						.filter((sale) => sale.status === "processando")
						.reduce((sum, sale) => sum + sale.preco, 0)}
				/>
			</Stack>
			<Paper sx={{ padding: 2 }} elevation={3}>
				<Chart sales={data} />
			</Paper>
		</Box>
	);
};

export default Summary;
