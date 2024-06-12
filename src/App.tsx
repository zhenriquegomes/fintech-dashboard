import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Resumo from "./pages/Resumo";

function App() {
	return (
		<Container>
			<SideNav />
			<Box>
				<Header />
				<Resumo />
			</Box>
		</Container>
	);
}

export default App;
