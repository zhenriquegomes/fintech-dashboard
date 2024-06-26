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
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={page}
				onChange={(_, page) => {
					setPage(page);
				}}
			>
				<BottomNavigationAction
					component={Link}
					to="/fintech-dashboard"
					label="Resumo"
					showLabel={true}
					icon={<Receipt />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/fintech-dashboard/sales"
					label="Vendas"
					showLabel={true}
					icon={<MonetizationOn />}
				/>
			</BottomNavigation>
		</Paper>
	);
}
