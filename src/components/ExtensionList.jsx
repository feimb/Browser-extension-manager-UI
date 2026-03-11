import { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import data from "@/data.json";

const ExtensionList = () => {
    const sortButtons = ["All", "Active", "Inactive"];
    const [filter, setFilter] = useState("All");
    const [filterArr, setFilterArr] = useState(data);

    const handleFilter = (button) => {
        setFilter(button);
        console.log(button);
        if (button === "All") {
            setFilterArr(filterArr);
        } else if (button === "Active") {
            setFilterArr(filterArr.filter((card) => card.isActive === true));
        } else if (button === "Inactive") {
            setFilterArr(filterArr.filter((card) => card.isActive === false));
        }
    };
    const toggleExtension = (index) => {
        setFilterArr((prev) =>
            prev.map((ext, i) =>
                i === index ? { ...ext, isActive: !ext.isActive } : ext,
            ),
        );
    };
    return (
        <main>
            <div className="lg:flex items-baseline justify-between">
                <h1 className="mt-10 text-3xl text-neutral-900 dark:text-neutral-0 font-bold flex justify-center">
                    Extension List
                </h1>
                <div className="text-neutral-900 dark:text-neutral-0 flex items-center justify-center gap-2">
                    {sortButtons.map((button) => {
                        return (
                            <button
                                onClick={() => {
                                    handleFilter(button);
                                }}
                                key={button}
                                className={`py-1 px-4 mt-3 text-lg rounded-3xl  hover:brightness-125 ${button === filter ? "text-neutral-0 dark:text-neutral-900 bg-red-500" : "bg-neutral-0 dark:bg-neutral-700"} cursor-pointer shadow-md`}
                            >
                                {button}
                            </button>
                        );
                    })}
                </div>
            </div>
            <section className="mt-8 grid grid-cols-1 gap-3 items-center  md:grid-cols-2 lg:grid-cols-3 ">
                {filterArr.map(
                    ({ logo, name, description, isActive }, index) => (
                        <ExtensionCard
                            img={logo}
                            title={name}
                            content={description}
                            isActive={isActive}
                            key={name}
                            onClick={() => toggleExtension(index)}
                        />
                    ),
                )}
            </section>
        </main>
    );
};
export default ExtensionList;
