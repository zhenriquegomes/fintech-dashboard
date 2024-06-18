import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import SalesList from "./components/SalesList";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Box>
					<Header />
					<Routes>
						<Route path="/" element={<Summary />} />
						<Route path="/sales" element={<SalesList />} />
					</Routes>
				</Box>
				<BottomNav />
			</Container>
		</BrowserRouter>
	);
}

export default App;
