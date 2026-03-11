import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExtensionList from "./components/ExtensionList";

function App() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    const handleDark = () => {
        setDark(!dark);
    };
    return (
        <>
            <Header handleDark={handleDark} dark={dark} />
            <ExtensionList />
        </>
    );
}

export default App;
