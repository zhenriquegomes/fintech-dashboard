import React from "react";
import useFetch from "../hooks/useFetch";

interface ISalesContext {
	data: Sale[] | null;
	loading: boolean;
	error: string | null;
}

export const SalesContext = React.createContext<ISalesContext | null>(null);

export const SalesContextProvider = ({ children }: React.PropsWithChildren) => {
	const { data, loading, error } = useFetch<Sale[]>(
		"https://data.origamid.dev/vendas/"
	);
	return (
		<SalesContext.Provider value={{ data, loading, error }}>
			{children}
		</SalesContext.Provider>
	);
};
