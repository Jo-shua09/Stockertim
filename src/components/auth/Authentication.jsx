import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiTimes } from "react-icons/ti";
import logo from "../../assets/images/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMobile, BiTrendingUp } from "react-icons/bi";

export default function Authentication({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [signupStep, setSignupStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      setShowResend(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(60);
    setShowResend(false);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNextStep = () => {
    setSignupStep((prev) => Math.min(prev + 1, 4));
  };

  // const handlePrevStep = () => {
  //   setSignupStep((prev) => Math.max(prev - 1, 1));
  // };

  return (
    <div className="bg-transparent h-full backdrop-brightness-50 flex justify-center max-h-screen fixed p-10 w-full z-[999999]">
      <div className="w-full flex items-start max-w-[120rem] relative bg-white rounded-2xl shadow-2xl">
        <div className="md:flex bg-auth-frame bg-center bg-cover bg-no-repeat hidden w-full h-full rounded-l-2xl flex-[3.5]">
          <div className="flex flex-col justify-between w-full h-full p-20">
            <div className="w-fit pt-20">
              <img src={logo} loading="lazy" alt="" className=" w-[30rem] object-contain h-fit" />
            </div>

            <div className="space-y-7 text-white">
              <h2 className="text-4xl font-medium normal-case">Explore our premium stock pick and trade alert</h2>
              <ul className="space-y-4 text-2xl ">
                <li className="flex items-center gap-5 list-none normal-case">
                  <IoNotificationsOutline className="text-3xl text-blue-600 " /> Real-Time Alerts
                </li>
                <li className="flex items-center gap-5 list-none normal-case">
                  <BiTrendingUp className="text-3xl text-blue-600 " /> Portfolio specification
                </li>
                <li className="flex items-center gap-5 list-none normal-case">
                  <BiMobile className="text-3xl text-blue-600 " /> Mobile first
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex-[6] justify-center flex">
          <div className="w-full max-w-4xl p-10 m-auto md:p-10 relative h-[70rem]">
            {isSignUp && (
              <div className="absolute top-0 right-0 h-fit left-0 bottom-0 mx-auto max-w-3xl">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-black h-3 rounded-full" style={{ width: `${(signupStep / 4) * 100}%` }}></div>
                </div>
              </div>
            )}

            {!isSignUp ? (
              // Sign In Form
              <div className="h-full m-auto justify-center place-content-center">
                <h2 className="text-5xl font-bold mb-6">Member sign in</h2>
                <div className="space-y-10">
                  <div className="flex items-center border-[.25rem] hover:scale-95 cursor-pointer border-neutral-800 w-full px-32 py-4 gap-6 rounded-3xl text-center">
                    <FcGoogle className="text-6xl" />
                    <span className="text-3xl normal-case font-semibold">Continue with Google</span>
                  </div>
                  <div className="flex items-center border-[.25rem] hover:scale-95 cursor-pointer border-neutral-800 w-full px-32 py-4 gap-6 rounded-3xl text-center">
                    <FaFacebook className="text-6xl text-blue-800" />
                    <span className="text-3xl normal-case font-semibold">Continue with Facebook</span>
                  </div>
                </div>
                <div className="relative flex items-center mt-8">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-2xl">or</span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <form className="w-full space-y-7 !mt-10">
                  <div className="space-y-2">
                    <label className="text-3xl font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-3xl font-medium">Password</label>
                    <div className="relative w-full">
                      <input
                        type="password"
                        className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                      />
                      <div className="absolute right-8 top-1/2 -translate-y-1/2">
                        <BsEye className="text-4xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="submit"
                      value="Sign in"
                      className="w-full pl-5 text-[1.7rem] text-white font-semibold rounded-2xl h-[6rem] bg-neutral-800 hover:scale-95 cursor-pointer"
                    />
                  </div>
                </form>
                <hr className="w-full h-px bg-neutral-500 my-7" />
                <div className="space-y-2">
                  <h3 className="text-[1.7rem] normal-case">
                    Don't have an account?{" "}
                    <span className="text-blue-500 normal-case hover:underline cursor-pointer" onClick={() => setIsSignUp(true)}>
                      Create free account
                    </span>
                  </h3>
                  <p className="text-2xl text-gray-600 normal-case ">
                    By signing in using any of the options above, you agree to the{" "}
                    <span className="text-blue-500 hover:underline cursor-pointer">Terms of Use</span> & {""}
                    <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                  </p>
                  <h3 className="text-2xl !mt-6 normal-case">
                    Forget password?
                    <span className="text-blue-500 hover:underline cursor-pointer">reset</span>
                  </h3>
                </div>
              </div>
            ) : (
              // Sign Up Flow
              <div className="h-full pb-16">
                <div className="h-full ">
                  {/* Step 1: Account Creation */}
                  {signupStep === 1 && (
                    <div className="space-y-10">
                      <h2 className="text-5xl font-bold mb-6">create free account</h2>
                      <div className="flex items-center border-[.25rem] hover:scale-95 cursor-pointer border-neutral-800 w-full px-32 py-4 gap-6 rounded-3xl text-center">
                        <FcGoogle className="text-6xl" />
                        <span className="text-3xl normal-case font-semibold">Continue with Google</span>
                      </div>
                      <div className="flex items-center border-[.25rem] hover:scale-95 cursor-pointer border-neutral-800 w-full px-32 py-4 gap-6 rounded-3xl text-center">
                        <FaFacebook className="text-6xl text-blue-800" />
                        <span className="text-3xl normal-case font-semibold">Continue with Facebook</span>
                      </div>

                      <div className="relative flex items-center my-8">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-2xl">or</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                      </div>

                      <form className="w-full space-y-7">
                        <div className="space-y-2">
                          <label className="text-3xl font-medium">Full name</label>
                          <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-3xl font-medium">Email</label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                          />
                        </div>

                        <div className="flex items-center">
                          <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} className="w-6 h-6 mr-5" />
                          <span className="text-2xl normal-case">
                            By signing up you agree to our <span className="text-blue-500 hover:underline cursor-pointer">Terms & Conditions</span>{" "}
                            and <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.fullName || !formData.email || !formData.termsAgreed}
                          className="w-full pl-5 text-[1.7rem] text-white font-semibold rounded-2xl h-[6rem] bg-neutral-800 hover:scale-95 cursor-pointer disabled:opacity-50"
                        >
                          Continue
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Step 2: Password Setup */}
                  {signupStep === 2 && (
                    <div className="pt-20 flex flex-col h-full">
                      <div className="h-full space-y-7">
                        <h3 className="text-4xl font-semibold">Set your password</h3>
                        <div className="space-y-2">
                          <label className="text-3xl font-medium">Password</label>
                          <div className="relative w-full">
                            <input
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              type="password"
                              className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                            />
                            <div className="absolute right-8 top-1/2 -translate-y-1/2">
                              <BsEye className="text-4xl cursor-pointer" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-3xl font-medium">Confirm password</label>
                          <div className="relative w-full">
                            <input
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              type="password"
                              className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                            />
                            <div className="absolute right-8 top-1/2 -translate-y-1/2">
                              <BsEye className="text-4xl cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.password || formData.password !== formData.confirmPassword}
                          className="w-full text-[1.7rem] text-white font-semibold rounded-2xl h-[6rem] bg-neutral-800 hover:scale-95 cursor-pointer disabled:opacity-50"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Phone Verification */}
                  {signupStep === 3 && (
                    <div className="pt-20 flex flex-col h-full">
                      <div className="h-full space-y-7">
                        <h3 className="text-4xl font-semibold">Enter your number</h3>
                        <p className="text-2xl text-gray-600 normal-case">Enter your phone number we will send you your confirmation number there</p>

                        <div className="space-y-2">
                          <label className="text-3xl font-medium">Phone Number</label>
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            className="w-full pl-5 text-[1.7rem] normal-case font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        {/* <button
                        type="button"
                        onClick={handlePrevStep}
                        className="w-1/3 text-[1.7rem] font-semibold rounded-2xl h-[6rem] border-2 border-neutral-800 hover:scale-95 cursor-pointer"
                      >
                        Back
                      </button> */}
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!formData.phone}
                          className="w-full text-[1.7rem] text-white font-semibold rounded-2xl h-[6rem] bg-neutral-800 hover:scale-95 cursor-pointer disabled:opacity-50"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {signupStep === 4 && (
                    <div className="pt-20 flex flex-col h-full">
                      <div className="h-full space-y-7">
                        <h3 className="text-5xl font-semibold">6-Digit code</h3>
                        <p className="text-2xl text-gray-600 normal-case">
                          Enter the code sent to <span className="font-semibold text-black">{formData.phone}</span>
                        </p>

                        <div className="space-x-5">
                          {[...Array(6)].map((_, idx) => (
                            <input
                              key={idx}
                              name={`otp-${idx}`}
                              type="tel"
                              maxLength={1}
                              className="w-[5.5rem] p-5 text-[1.7rem] text-center font-medium rounded-2xl h-[5.5rem] border-[.25rem] border-neutral-800 focus:border-2"
                            />
                          ))}
                        </div>

                        {!showResend ? (
                          <p className="text-2xl text-gray-600 normal-case !mt-6">
                            Resend code in <span className="font-semibold text-black">{`00:${String(timeLeft).padStart(2, "0")}`}</span>
                          </p>
                        ) : (
                          <p onClick={handleResend} className="text-2xl text-blue-600 hover:underline cursor-pointer normal-case !mt-6">
                            Resend code
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {signupStep !== 4 && (
                  <>
                    <hr className="w-full h-px bg-neutral-500 my-7" />
                    <p className="text-[1.7rem] normal-case">
                      Already have an account?{" "}
                      <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => setIsSignUp(false)}>
                        Sign in
                      </span>
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-6 right-6" onClick={onClose}>
          <TiTimes size={35} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
