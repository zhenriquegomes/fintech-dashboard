interface Sale {
	id: string;
	nome: string;
	preco: number;
	status: "pago" | "falha" | "processando";
	pagamento: "boleto" | "pix" | "cartao";
	data: string;
	parcelas: number | null;
}

type SaleDetail = Omit<Sale, "data">;
