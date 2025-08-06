import { BiPhone, BiSearch } from "react-icons/bi";
import { HiMenu, HiOutlineLockClosed, HiQuestionMarkCircle } from "react-icons/hi";
import { ButtonOne, ButtonTwo } from "../ui/Button";
import { IoNotificationsOutline } from "react-icons/io5";
import Authentication from "../auth/Authentication";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const [openAuth, setOpenAuth] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);
  const [isOverflow, setIsOverflow] = useState(window.innerWidth > 991);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsOverflow(window.innerWidth > 991);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAuth = () => {
    setOpenAuth(!openAuth);
  };

  const handleSubscription = () => {
    navigate("/subscribe");
  };

  return (
    <div className="relative">
      {isMobile ? (
        <div className="w-full bg-blue-950 px-8 py-4">
          <div className="w-full flex items-center gap-20 justify-between">
            <div className="lg:w-fit w-full">
              <img src={logo} loading="lazy" alt="" className=" md:w-[85rem] w-full lg:w-[70rem] object-contain h-fit" />
            </div>

            <div className="w-full h-full relative flex place-content-center">
              {isOverflow ? (
                <>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2">
                    <BiSearch className="text-4xl cursor-pointer" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for news, symbols or companies"
                    className="bg-white rounded-full placeholder:text-2xl focus:shadow-2xl text-[1.7rem] normal-case font-medium w-full pl-10 h-[5.5rem]"
                  />
                </>
              ) : (
                <div className="w-full">
                  <div className="absolute right-8 top-1/2 -translate-y-1/2">
                    <BiSearch className="text-4xl cursor-pointer" />
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="bg-white rounded-full focus:shadow-2xl text-[1.7rem] normal-case font-medium w-full pl-10 h-[5.5rem]"
                  />
                </div>
              )}
            </div>

            <div className="w-fit flex place-content-center">
              <ButtonOne
                icon={<HiOutlineLockClosed className="text-4xl" />}
                name="subscribe to premium"
                onClick={handleSubscription}
                className="rounded-xl flex items-center gap-4"
              />
            </div>

            {/* <div className={`w-full items-center text-white gap-12 flex`}>
              <div className="flex items-center gap-4">
                <HiQuestionMarkCircle className="text-5xl" />
                <span className="text-4xl text-nowrap font-normal">help</span>
              </div>
              <div className="flex items-center gap-4">
                <BiPhone className="text-5xl" />
                <span className="text-4xl text-nowrap font-normal normal-case">Call us at +44 7398 750 479</span>
              </div>
            </div> */}

            <div className="w-full flex place-content-center items-center gap-12">
              <ButtonOne name="get started" onClick={handleAuth} />
              <ButtonTwo name="sign in" />
              <IoNotificationsOutline className="text-6xl text-white" />
              <div className="w-fit">
                <div className="border-2 rounded-full w-full h-full object-contain cursor-pointer p-8"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-blue-950 px-8 py-6">
          <div className="flex flex-col gap-7">
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex gap-12 items-center">
                <div className="cursor-pointer">
                  <HiMenu className="text-6xl text-white" />
                </div>
                <div className="w-fit">
                  <img src={logo} loading="lazy" alt="" className="w-[50rem] object-contain h-fit" />
                </div>
              </div>

              <div className="w-full place-content-end flex">
                <ButtonOne name="get started" onClick={handleAuth} />
              </div>
            </div>

            <div className="w-full relative flex place-content-center">
              <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <BiSearch className="text-4xl cursor-pointer" />
              </div>
              <input
                type="text"
                placeholder="Search for news, symbols or companies"
                className="bg-white rounded-full placeholder:text-2xl focus:shadow-2xl text-[1.7rem] normal-case font-medium w-full pl-10 h-[5.5rem]"
              />
            </div>
          </div>
        </div>
      )}

      {openAuth && (
        <div className="w-full absolute top-0 left-0 right-0 bottom-0 m-auto z-[9999999]">
          <Authentication onClose={handleAuth} />
        </div>
      )}
    </div>
  );
}
