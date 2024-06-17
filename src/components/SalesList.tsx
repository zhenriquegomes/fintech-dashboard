import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import useSales from "../hooks/useSales";

const SalesList = () => {
	const { data } = useSales();
	if (!data) return null;
	return (
		<TableContainer component={Paper} sx={{ backgroundColor: "#90caf9" }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((sale) => (
						<TableRow>
							<TableCell>{sale.id}</TableCell>
							<TableCell>{sale.nome}</TableCell>
							<TableCell>
								{sale.preco.toLocaleString("en", {
									style: "currency",
									currency: "USD",
								})}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SalesList;
