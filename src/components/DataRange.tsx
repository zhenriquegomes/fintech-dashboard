import { Input, InputLabel, Stack } from "@mui/material";
import useSales from "../hooks/useSales";

const DateRange = () => {
	const { initialDate, setInitialDate, finalDate, setFinalDate } = useSales();
	return (
		<Stack direction="row" spacing={2} justifyContent="center">
			<div>
				<InputLabel>Initial Date</InputLabel>
				<Input
					type="date"
					value={initialDate}
					onChange={({ target }) => setInitialDate(target.value)}
				/>
			</div>
			<div>
				<InputLabel>Final Date</InputLabel>
				<Input
					type="date"
					value={finalDate}
					onChange={({ target }) => setFinalDate(target.value)}
				/>
			</div>
		</Stack>
	);
};

export default DateRange;
