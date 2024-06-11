import React from "react";
import useFetch from "../hooks/useFetch";

interface ISalesContext {
	data: Sale[] | null;
	loading: boolean;
	error: string | null;
	initialDate: string;
	setInitialDate: React.Dispatch<React.SetStateAction<string>>;
	finalDate: string;
	setFinalDate: React.Dispatch<React.SetStateAction<string>>;
}

export const SalesContext = React.createContext<ISalesContext | null>(null);

function getNthDayAgo(n: number): string {
	const date = new Date();
	date.setDate(date.getDate() - n);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

export const SalesContextProvider = ({ children }: React.PropsWithChildren) => {
	const [initialDate, setInitialDate] = React.useState(getNthDayAgo(30));
	const [finalDate, setFinalDate] = React.useState(getNthDayAgo(0));
	const { data, loading, error } = useFetch<Sale[]>(
		`https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`
	);
	return (
		<SalesContext.Provider
			value={{
				data,
				loading,
				error,
				initialDate,
				setInitialDate,
				finalDate,
				setFinalDate,
			}}
		>
			{children}
		</SalesContext.Provider>
	);
};
