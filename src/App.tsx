import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Resumo from "./pages/Resumo";

function App() {
	return (
		<div>
			<SideNav />
			<main>
				<Header />
				<Resumo />
			</main>
		</div>
	);
}

export default App;
