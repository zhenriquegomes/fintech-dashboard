import { Card, CardContent, Typography } from "@mui/material";

const SaleInfo = ({ sale }: { sale: SaleDetail }) => {
	return (
		<Card elevation={3}>
			<CardContent>
				<Typography>ID: {sale.id}</Typography>
				<Typography>Nome: {sale.nome}</Typography>
				<Typography>Forma de Pagamento: {sale.pagamento}</Typography>
				<Typography>Parcelas: {sale.parcelas}</Typography>
				<Typography>Preço: {sale.preco}</Typography>
				<Typography>Status: {sale.status}</Typography>
			</CardContent>
		</Card>
	);
};

export default SaleInfo;
