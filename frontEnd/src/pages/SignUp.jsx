import React from "react";

export default function SignUp() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-center">
      <div className="w-full max-w-[400px] h-[500px] bg-white rounded-lg shadow-gray-400 shadow-lg">
        <div className="w-full h-[200px] bg-[rgb(32,199,255)]  rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center">
          <h1 className="text-gray-600 font-bold text-[30px]">
            Welcome To <span className="text-white">Chatly</span>
          </h1>
        </div>
        <form className="w-full flex flex-col gap-[20px]">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
}
