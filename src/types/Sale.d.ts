interface Sale {
	id: string;
	name: string;
	price: string;
	status: string;
	formOfPayment: "boleto" | "pix" | "cartao";
	data: string;
	installments: number | null;
}
