import "../index.css";

const Registration = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-300 px-4 pb-20">
      <div className="w-full flex justify-center mb-3 mt-8 sm:mt-16">
        <h3 className="text-blue-950 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold font-playball">
          Authentication: Registration
        </h3>
      </div>
      <form className="custom-shadow w-full sm:w-[75%] md:w-[45%] lg:w-[30%] xl:w-[30%] py-8 sm:py-10 px-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center bg-gray-200 rounded-[6px] border-[1px] border-gray-400 gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <label className="ml-[4px] text-slate-950 font-light font-anek text-sm sm:text-base">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="input input-bordered w-full h-[2.5rem] bg-gray-100 border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <label className="ml-[4px] text-slate-950 font-light font-anek text-sm sm:text-base">
            Other Names
          </label>
          <input
            type="text"
            placeholder="Enter your other names"
            className="input input-bordered w-full h-[2.5rem] bg-gray-100 border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <label className="ml-[4px] text-slate-950 font-light font-anek text-sm sm:text-base">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full h-[2.5rem] bg-gray-100 border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <label className="ml-[4px] text-slate-950 font-light font-anek text-sm sm:text-base">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full h-[2.5rem] bg-gray-100 border-[1px] border-gray-400"
          />
        </div>
        <button className="btn btn-primary text-center w-full mt-4 text-slate-950 font-normal bg-gray-300 hover:bg-gray-400 border-gray-400 px-2 py-2 font-anek">
          Register
        </button>
        <div className="w-full text-center mt-3">
          <h6 className="text-slate-950 font-light font-anek text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-950 font-playball">
              Login
            </a>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Registration;
