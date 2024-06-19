import { Stack } from "@mui/material";
import DateRange from "./DataRange";
import Months from "./Months";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const [title, setTitle] = useState("Dashboard | Summary");
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/") {
			setTitle("Dashboard | Summary");
			document.title = title;
		} else if (location.pathname === "/sales") {
			setTitle("Dashboard | Sales");
			document.title = title;
		}
	}, [location, title]);
	return (
		<Stack spacing={2} justifyContent="center" marginBottom={2}>
			<DateRange />
			<Months />
		</Stack>
	);
};

export default Header;
