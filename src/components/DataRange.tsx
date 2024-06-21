import { Box, Input, InputLabel, Paper, Stack } from "@mui/material";
import useSales from "../hooks/useSales";

const DateRange = () => {
	const { initialDate, setInitialDate, finalDate, setFinalDate } = useSales();
	return (
		<Paper sx={{ width: "fit-content", padding: 2 }}>
			<Stack direction="row" spacing={2}>
				<Box>
					<InputLabel>Initial Date</InputLabel>
					<Input
						type="date"
						value={initialDate}
						onChange={({ target }) => setInitialDate(target.value)}
					/>
				</Box>
				<Box>
					<InputLabel>Final Date</InputLabel>
					<Input
						type="date"
						value={finalDate}
						onChange={({ target }) => setFinalDate(target.value)}
					/>
				</Box>
			</Stack>
		</Paper>
	);
};

export default DateRange;
