import { Link } from "waku";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center text-center mt-50 px-20">
        <h1 className="font-black text-5xl md:text-8xl tracking-tighter w-fit relative">
          <span>Katalyst</span>
          <p className="bg-[#1a4cb0] text-base tracking-normal top-0 -right-3 rotate-10 w-fit px-2 rounded-full border border-fd-border absolute text-fd-primary-foreground">
            v0.1
          </p>
        </h1>
        <p className="text-sm md:text-xl opacity-50 mt-4">
          A simple & small but powerful ui framework for Roblox
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-2">
          <Link
            to="/docs"
            className="bg-[#1a4cb0] text-fd-primary-foreground font-semibold px-4 py-2 rounded-full hover:scale-150 hover:drop-shadow-[0_0_25px] hover:drop-shadow-[#1a4cb0] hover:-rotate-3 transition ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            Get Started
          </Link>
          <Link
            to="https://create.roblox.com/store/asset/102585843889477/Katalyst"
            className="border-[#1a4cb0] border text-[#1a4cb0] font-semibold px-4 py-2 rounded-full hover:scale-150 hover:drop-shadow-[0_0_25px] hover:drop-shadow-[#1a4cb0] hover:rotate-3 hover:bg-[#1a4cb0] hover:border-fd-pr hover:text-fd-primary-foreground transition ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            Roblox Assets Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
