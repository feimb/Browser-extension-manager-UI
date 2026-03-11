const ExtensionCard = ({ img, title, content, isActive, onClick }) => {
    return (
        <div className="p-4 col-span-1 bg-neutral-0 dark:bg-neutral-800 border rounded-xl border-neutral-200 dark:border-neutral-600 w-full h-[200px]">
            <div className="h-3/4 flex gap-4">
                <img src={img} className="w-14 h-14" />
                <div className="">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-0">
                        {title}
                    </h2>
                    <p className="text-base text-neutral-400 ">{content}</p>
                </div>
            </div>
            <div className=" flex items-center justify-between ">
                <button className="px-3 p-1 font-medium border border-neutral-200 dark:border-neutral-600 text-neutral-900 dark:text-neutral-0 rounded-2xl cursor-pointer hover:bg-red-500 hover:text-neutral-900 outline-red-500 ">
                    Remove
                </button>

                <label class="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        class="sr-only peer"
                        checked={isActive}
                        onClick={onClick}
                    />
                    <div class="relative w-9 h-5 bg-neutral-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-700"></div>
                </label>
            </div>
        </div>
    );
};
export default ExtensionCard;
