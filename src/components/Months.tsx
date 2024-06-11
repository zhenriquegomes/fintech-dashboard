import { Button, Stack } from "@mui/material";
import useSales from "../hooks/useSales";

const Months = () => {
	const { setInitialDate, setFinalDate } = useSales();
	function getNthMonthName(n: number): string {
		const date = new Date();
		date.setMonth(date.getMonth() + n);
		return date.toLocaleString("en", { month: "long" });
	}
	function formatDate(date: Date): string {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	}
	function setNthMonth(n: number) {
		const date = new Date();
		date.setMonth(date.getMonth() + n);
		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
		console.log(firstDay, lastDay);
		setInitialDate(formatDate(firstDay));
		setFinalDate(formatDate(lastDay));
	}
	const buttons = [];
	for (let i = -5; i <= 0; i++) {
		buttons.push(
			<Button key={i} variant="outlined" onClick={() => setNthMonth(i)}>
				{getNthMonthName(i)}
			</Button>
		);
	}
	return (
		<Stack direction="row" spacing={2} justifyContent="center">
			{buttons}
		</Stack>
	);
};

export default Months;
