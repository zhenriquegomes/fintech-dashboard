import { Stack } from "@mui/material";
import DateRange from "./DataRange";
import Months from "./Months";

const Header = () => {
	return (
		<Stack spacing={2} justifyContent="center">
			<DateRange />
			<Months />
		</Stack>
	);
};

export default Header;
