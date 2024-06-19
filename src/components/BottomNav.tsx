import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MonetizationOn, Receipt } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";

export default function BottomNav() {
	const [page, setPage] = useState(0);
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/") {
			setPage(0);
		} else if (location.pathname === "/sales") {
			setPage(1);
		}
	}, [location, page]);

	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
			}}
			elevation={5}
		>
			<BottomNavigation
				sx={{
					backgroundColor: "#90caf9",
				}}
				showLabels
				value={page}
				onChange={(_, page) => {
					setPage(page);
				}}
			>
				<BottomNavigationAction
					component={Link}
					to="/"
					label="Summary"
					showLabel={true}
					icon={<Receipt />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/sales"
					label="Sales"
					showLabel={true}
					icon={<MonetizationOn />}
				/>
			</BottomNavigation>
		</Paper>
	);
}
