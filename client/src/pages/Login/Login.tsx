import React, { useState } from "react";
import { AuthenticateUser } from "../../services/Authentication/Authentication.service";
import isAuthenticated from "../../services/Authentication/AuthGuard.service";
import { useNavigate } from "react-router-dom";
import * as toaster from "../../components/toasters";
import * as errorMessage from "../../enum/ErrorMessage";
import * as successMEssage from "../../enum/SuccessMessage";
import * as misc from "../../enum/Misc";

const LoginComponent: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            toaster.toastError(errorMessage.CommonError.ALL_FIELDS_REQUIRED);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toaster.toastError(errorMessage.AuthError.INVALID_EMAIL);
            return;
        }
        try {
            const authenticated = await AuthenticateUser(email, password);
            if (authenticated) {
                if (isAuthenticated()) {
                    toaster.toastSuccess(successMEssage.AuthSuccess.AUTHENTICATED)
                    navigate("/dashboard");
                }
            } else {
                toaster.toastError(errorMessage.AuthError.WRONG_EMAIL_PASSWORD);
            }
        } catch (err) {
            toaster.toastError(`An error occurred: ${err}`);
        }

    };

    return (
        <div className="h-screen flex items-center justify-center relative">
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{ backgroundImage: `url(${misc.Assets.LOGIN_BG})` }}
            ></div>
            <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto flex rounded-[7px] overflow-hidden shadow-lg bg-white bg-opacity-90 relative z-10">

                <div className="hidden lg:flex w-1/2 bg-red-200 items-center justify-center">
                    <img
                        src={misc.Assets.LOGIN_POSTER}
                        className="max-w-full h-auto"
                        alt="Order Swift"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-start bg-[#fff] p-8">
                    <div className="w-full h-16 text-center flex flex-col">
                        <h1 className="mt-6 text-2xl">Welcome to <span className="text-[#EA4B33] font-bold">Order Swift</span></h1>
                        <p className="text-sm text-gray-400">SM Ordering Automation System</p>
                    </div>
                    <div className="w-full h-80 flex flex-col justify-center">
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                className="p-3 mb-4 w-full border border-gray-300 rounded-lg text-gray-600 focus:outline-red-200"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="p-3 mb-4 w-full border border-gray-300 rounded-lg text-gray-600 focus:outline-red-200"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="w-full flex flex-col justify-between items-start">
                                <div className="mb-7">
                                    <input
                                        type="checkbox"
                                        className="mr-2 translate-y-0.5"
                                    />
                                    <span className="text-sm text-gray-600">Remember Me?</span>
                                </div>
                                <button
                                    type="submit"
                                    className="font-normal py-2 px-4 w-full bg-[#EA4B33] text-white rounded-[7px] hover:bg-[#ea4b33d3]"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-2 flex flex-row w-full justify-center items-center space-x-3 text-gray-600 text-[10px]">
                        <a href="#privacy">Privacy</a>
                        <p>|</p>
                        <a href="#terms-and-condition">Terms & Conditions</a>
                        <p>|</p>
                        <a href="#feedback">Feedback</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginComponent;