import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SalesContextProvider } from "./context/SalesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SalesContextProvider>
			<App />
		</SalesContextProvider>
	</React.StrictMode>
);
