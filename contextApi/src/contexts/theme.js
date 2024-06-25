import { createContext,useContext } from "react";

export const ModeSwitcherContext = createContext({
    modeTheme:"light",
    modeLight:()=>{},
    modeDark:()=>{},
});

export const ModeSwitcherProvider = ModeSwitcherContext.Provider;

export default function useModeSwitcherContext(){
    return useContext(ModeSwitcherContext);
}