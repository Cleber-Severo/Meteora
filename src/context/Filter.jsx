import { createContext } from "react";

export const FilterContext = createContext();
FilterContext.displayName = "Filter Products";

export const FilterProvider = ({ children }) => {
    return (
        <FilterContext.Provider>
            { children }
        </FilterContext.Provider>
    )
}
