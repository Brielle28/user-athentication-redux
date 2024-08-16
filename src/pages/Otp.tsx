import OtpTimer from "../components/OtpTimer";
const Otp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-300 px-4 pb-20">
      <div className="w-full flex justify-center mb-3">
        <h3 className="text-blue-950 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold font-playball">
          Authentication: OTP
        </h3>
      </div>
      <form className="custom-shadow w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] py-8 sm:py-10 px-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center bg-gray-200 rounded-[6px] border-[1px] border-gray-400 gap-4">
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <div className="flex items-center justify-between w-full sm:w-[75%] md:w-[60%] lg:w-[100%]">
            <h2 className="text-slate-950 font-light font-anek text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
              OTP verification
            </h2>
            <OtpTimer />
          </div>

          <div className="flex items-center justify-center space-x-2 ">
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
            <input
              type="tel"
              maxLength={1}
              className="input input-bordered bg-slate-950 text-white text-center h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              pattern="[0-9]*"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                if (!/^\d$/.test(input.value)) {
                  input.value = "";
                } else if (input.value.length === input.maxLength) {
                  const nextInput = input.nextElementSibling as HTMLInputElement;
                  if (nextInput) {
                    nextInput.focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                const input = e.target as HTMLInputElement;
                
                // Handle deleting
                if (e.key === "Backspace" && input.value === "") {
                  const prevInput = input.previousElementSibling as HTMLInputElement;
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
          </div>
          <button className="btn btn-primary text-center w-full  mt-4 text-slate-950 font-normal bg-gray-300 hover:bg-gray-400 border-gray-400 px-2 py-2 font-anek">
            Verify and Proceed
          </button>
          <div className="w-full text-center mt-3">
            <h6 className="text-slate-950 font-light font-anek text-sm">
              Didn't get an OTP?{" "}
              <a href="#" className="text-red-600 font-anek">
                resend
              </a>
            </h6>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Otp;
