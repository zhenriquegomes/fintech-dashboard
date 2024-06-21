import { Box, Button, CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import SaleInfo from "../components/SaleInfo";
import useFetch from "../hooks/useFetch";

const SaleDetails = () => {
	const { id } = useParams();
	const { data, loading } = useFetch<SaleDetail>(
		`https://data.origamid.dev/vendas/${id}`
	);
	if (loading) return <CircularProgress size="5rem" />;
	if (!data) return null;
	return (
		<Box>
			<Link to="/fintech-dashboard/sales">
				<Button sx={{ marginBottom: 2 }} variant="outlined">
					Voltar
				</Button>
			</Link>
			<SaleInfo sale={data} />
		</Box>
	);
};

export default SaleDetails;
