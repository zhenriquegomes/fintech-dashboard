import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Resumo from "./pages/Resumo";
import SalesList from "./components/SalesList";

function App() {
	return (
		<Container>
			<SideNav />
			<Box>
				<Header />
				<Resumo />
				<SalesList />
			</Box>
		</Container>
	);
}

export default App;
