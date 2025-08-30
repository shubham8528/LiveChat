import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

export default function SignIn() {
  const navigate = useNavigate;
  const [show, setShow] = useState(false);
  const signUpInputs = [
    // {
    //   id: 1,
    //   type: "text",
    //   placeholder: "username",
    //   className:
    //     "w-[90%] h-[50%] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-[white] rounded-lg  shadow-gray-400 shadow-lg ",
    // },
    {
      id: 2,
      type: "email",
      placeholder: "Email",
      className:
        "w-[90%] h-[50%] outline-none border-2 border-[#20c7ff] px-[20px] py-[10px] bg-[white] rounded-lg  shadow-gray-400 shadow-lg ",
    },
    {
      id: 3,
      type: show ? "password" : "text",
      className:
        "w-full h-full outline-none px-[20px] py-[10px] bg-[white] rounded-lg",
      placeholder: "Password",
    },
  ];
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="w-full max-w-[400px] h-[500px] bg-white rounded-lg shadow-gray-400 shadow-lg">
        <div className="w-full h-[150px] bg-[rgb(32,199,255)]  rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center">
          <h1 className="text-gray-600 font-bold text-[30px]">
            Welcome To <span className="text-white">Chatly</span>
          </h1>
        </div>
        <form className="w-full flex flex-col gap-[20px] items-center mt-[20px] ">
          {signUpInputs?.map((item) => {
            return item?.placeholder == "Password" ? (
              <div className=" relative w-[90%] h-[50%]  border-2 border-[#20c7ff] overflow-hidden  rounded-lg  shadow-gray-400 shadow-lg">
                <Input
                  type={item?.type}
                  placeholder={item?.placeholder}
                  className={item?.className}
                />
                <span
                  className="absolute top-[7px] right-[8px] text-[19px] text-[#20c7ff] cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? "show" : "hidden"}
                </span>
              </div>
            ) : (
              <Input
                type={item?.type}
                placeholder={item?.placeholder}
                className={item?.className}
              />
            );
          })}
          <button className="px-[20px] py-[10px] bg-[#20c7ff] rounded-2xl  shadow-gray-200 shadow-lg w-[200px] mt-[20px] font-semibold hover:shadow-inherit">
            {" "}
            SignIn
          </button>
          <p className="cursor-pointer" onClick={() => navigate("/")}>
            Create Account ?{" "}
            <span className="text-[#20c7ff] text-[semibold]"> Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
