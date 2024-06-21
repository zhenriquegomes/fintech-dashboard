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
			elevation={3}
			component={Paper}
			sx={{ marginBottom: "4rem" }}
		>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Nome</TableCell>
						<TableCell>Preço</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((sale) => (
						<TableRow
							key={sale.id}
							component={Link}
							to={`/sales/${sale.id}`}
							hover={true}
							sx={{ textDecoration: "none" }}
						>
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
