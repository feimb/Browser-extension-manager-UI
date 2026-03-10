const ExtensionCard = ({ img, title, content, isActive }) => {
    return (
        <div className="p-5 col-span-1 bg-neutral-800 border rounded-lg border-neutral-600 w-full h-full">
            <div className="flex gap-4">
                <img src={img} className="w-15 h-15" />
                <div className="">
                    <h2 className="text-xl font-bold text-neutral-0">
                        {title}
                    </h2>
                    <p className="text-base text-neutral-400 ">{content}</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <button className="px-2.5 p-1 font-medium border border-neutral-600  text-neutral-0 rounded-2xl cursor-pointer hover:bg-red-500 hover:text-neutral-900 outline-red-500 ">
                    Remove
                </button>
                <div>
                    <label htmlFor="check" className="realative">
                        <input type="checkbox" id="check"  />
                        <span className="absolute"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};
export default ExtensionCard;
