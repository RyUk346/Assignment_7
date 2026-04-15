import { AiOutlinePlus } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="py-20 bg-[#F8FAFC] min-h-screen">
      <div className="text-center">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-4 text-[#64748B] max-w-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn btn-primary bg-[#244D3F]">
            <AiOutlinePlus /> Add a Friend
          </button>
          <div className="py-10 container border-b border-[#E9E9E9]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="p-8 flex flex-col gap-2 text-center bg-white border border-white shadow-sm rounded-lg">
                <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
                <p className="text-lg text-[#64748B]">Total Friends</p>
              </div>
              <div className="p-8 flex flex-col gap-2 text-center bg-white border border-white shadow-sm rounded-lg">
                <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
                <p className="text-lg text-[#64748B]">Total Friends</p>
              </div>
              <div className="p-8 flex flex-col gap-2 text-center bg-white border border-white shadow-sm rounded-lg">
                <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
                <p className="text-lg text-[#64748B]">Total Friends</p>
              </div>
              <div className="p-8 flex flex-col gap-2 text-center bg-white border border-white shadow-sm rounded-lg">
                <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
                <p className="text-lg text-[#64748B]">Total Friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
