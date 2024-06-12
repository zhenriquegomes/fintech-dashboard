interface Sale {
	id: string;
	nome: string;
	preco: number;
	status: string;
	pagamento: "boleto" | "pix" | "cartao";
	data: string;
	parcelas: number | null;
}
