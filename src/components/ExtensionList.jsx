import { useState } from "react";
import ExtensionCard from "./ExtensionCard";
const ExtensionList = () => {
    const sortButtons = ["All", "Active", "Inactive"];
    const [filter, setFilter] = useState("All");
    return (
        <main>
            <div className="text-neutral-0 flex items-center justify-center gap-2">
                {sortButtons.map((button) => {
                    return (
                        <button
                            onClick={() => {
                                setFilter(button);
                                console.log(filter);
                            }}
                            className={`py-1 px-4 mt-3 text-lg rounded-3xl  hover:brightness-125 ${button === filter ? "text-neutral-950 bg-red-500" : "bg-neutral-700"} cursor-pointer`}
                        >
                            {button}
                        </button>
                    );
                })}
            </div>
            <section className="mt-8 grid grid-cols-1">
                <ExtensionCard />
            </section>
        </main>
    );
};
export default ExtensionList;
