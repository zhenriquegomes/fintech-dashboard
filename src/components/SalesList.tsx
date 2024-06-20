import {
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import useSales from "../hooks/useSales";
import { Link } from "react-router-dom";

const SalesList = () => {
	const { data, loading } = useSales();
	if (loading) return <CircularProgress size="5rem" />;
	if (!data) return null;
	return (
		<TableContainer
			component={Paper}
			sx={{ backgroundColor: "#90caf9", marginBottom: "4rem" }}
		>
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
						<TableRow key={sale.id}>
							<TableCell>
								<Link to={`/sales/${sale.id}`} style={{ color: "inherit" }}>
									{sale.id}
								</Link>
							</TableCell>
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
