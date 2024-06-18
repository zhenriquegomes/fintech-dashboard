import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MonetizationOn, Receipt } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function BottomNav() {
	const [value, setValue] = React.useState("");

	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
			}}
		>
			<BottomNavigation
				sx={{
					backgroundColor: "#90caf9",
				}}
				showLabels
				value={value}
				onChange={(_, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					component={Link}
					to="/"
					label="Summary"
					icon={<Receipt />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/sales"
					label="Sales"
					icon={<MonetizationOn />}
				/>
			</BottomNavigation>
		</Box>
	);
}
