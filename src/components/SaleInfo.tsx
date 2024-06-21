import { Card, CardContent, Typography } from "@mui/material";

const SaleInfo = ({ sale }: { sale: SaleDetail }) => {
	return (
		<Card>
			<CardContent>
				<Typography>ID: {sale.id}</Typography>
				<Typography>Name: {sale.nome}</Typography>
				<Typography>Form of Payment: {sale.pagamento}</Typography>
				<Typography>Installments: {sale.parcelas}</Typography>
				<Typography>Price: {sale.preco}</Typography>
				<Typography>Status: {sale.status}</Typography>
			</CardContent>
		</Card>
	);
};

export default SaleInfo;
