"use client";

import { UserContext } from "@/context/UserContextProvider";
import { signup } from "@/services/users.service";
import { useRouter } from "next/navigation";
import { use } from "react";
import { async } from './../../api/route';

export default async function SignupPage() {
    //   const { setUser } = use(UserContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
       try {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const image = form.image.value;

        if (!name || !email || !password || !phone) {
            alert("All fields are required");
            return;
        }

        const newUser = {
            name,
            email,
            phone,
            image,
            password
        };


        const res = await signup(newUser);
        if (res.status !== 201) {
            alert("Signup failed: " + res.message);
            return;
        }
        alert("Signup successful! Please login.");
        router.push("/login");
    } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred during signup. Please try again.");
       }

    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create Account 🚀
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Please fill in the details below
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="01XXXXXXXXX"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="px-3 text-sm text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Login */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
