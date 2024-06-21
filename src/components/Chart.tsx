import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

function transformSales(sales: Sale[]): SaleGroupByStatus[] {
	const saleGroupByStatus = sales.reduce(
		(acc: { [key: string]: SaleGroupByStatus }, sale) => {
			const data = sale.data.split(" ")[0];
			if (!acc[data]) {
				acc[data] = {
					data: data,
					pago: 0,
					falha: 0,
					processando: 0,
				};
			}
			acc[data][sale.status] += sale.preco;
			return acc;
		},
		{}
	);
	return Object.values(saleGroupByStatus);
}

const Chart = ({ sales }: { sales: Sale[] }) => {
	const salesGroupByStatus = transformSales(sales);
	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart width={500} height={300} data={salesGroupByStatus}>
				<XAxis dataKey="data" />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
				<Line type="monotone" dataKey="pago" stroke="#4caf50" strokeWidth={3} />
				<Line
					type="monotone"
					dataKey="falha"
					stroke="#f44336"
					strokeWidth={3}
				/>
				<Line
					type="monotone"
					dataKey="processando"
					stroke="#3f51b5"
					strokeWidth={3}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
