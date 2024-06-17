import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Resumo from "./pages/Resumo";
import SalesList from "./components/SalesList";
import BottomNav from "./components/BottomNav";

function App() {
	return (
		<Container>
			<Box>
				<Header />
				<Resumo />
				<SalesList />
			</Box>
			<BottomNav />
		</Container>
	);
}

export default App;
