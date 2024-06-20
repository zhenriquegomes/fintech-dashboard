import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import SaleInfo from "../components/SaleInfo";
import useFetch from "../hooks/useFetch";

const SaleDetails = () => {
	const { id } = useParams();
	const { data, loading } = useFetch<SaleDetail>(
		`https://data.origamid.dev/vendas/${id}`
	);
	if (loading) return <CircularProgress size="5rem" />;
	if (!data) return null;
	return <SaleInfo sale={data} />;
};

export default SaleDetails;
