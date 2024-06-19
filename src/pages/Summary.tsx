import { Stack } from "@mui/material";
import useSales from "../hooks/useSales";
import SaleSummary from "../components/SaleSummary";

const Summary = () => {
	const { data } = useSales();
	if (!data) return null;
	data.forEach((sale) => console.log(sale.preco));
	return (
		<Stack direction="row" spacing={2} marginBottom={3}>
			<SaleSummary
				name="Sales"
				value={data
					.filter((sale) => sale.status != "falha")
					.reduce((sum, sale) => sum + sale.preco, 0)}
			/>
			<SaleSummary
				name="Received"
				value={data
					.filter((sale) => sale.status === "pago")
					.reduce((sum, sale) => sum + sale.preco, 0)}
			/>
			<SaleSummary
				name="Processing"
				value={data
					.filter((sale) => sale.status === "processando")
					.reduce((sum, sale) => sum + sale.preco, 0)}
			/>
		</Stack>
	);
};

export default Summary;