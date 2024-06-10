import React from "react";
import { SalesContext } from "../context/SalesContext";

const useSales = () => {
	const context = React.useContext(SalesContext);
	if (!context) {
		throw new Error("useSales should be used inside SalesContextProvider");
	} else {
		return context;
	}
};

export default useSales;
