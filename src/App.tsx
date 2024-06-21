import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import SalesList from "./pages/SalesList";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SaleDetails from "./pages/SaleDetails";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Box>
					<Header />
					<Routes>
						<Route path="/fintech-dashboard" element={<Summary />} />
						<Route path="/fintech-dashboard/sales" element={<SalesList />} />
						<Route
							path="/fintech-dashboard/sales/:id"
							element={<SaleDetails />}
						/>
					</Routes>
				</Box>
				<BottomNav />
			</Container>
		</BrowserRouter>
	);
}

export default App;
