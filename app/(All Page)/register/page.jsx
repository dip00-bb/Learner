"use client"

import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AuthImage from '@/app/Component/AuthImage';
import { handleEmailPassReg } from '@/app/FirebaseAuthFn/authFn';
import { AuthContext } from '@/app/Contexts/AuthContext/AuthContext';
import { axiosPublic } from '@/app/AxiosInstance/useAxiosPublic';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerUser, updateUser, setUser } = use(AuthContext)

    const onSubmit = (data) => {
        handleEmailPassReg(registerUser, updateUser, setUser, data, axiosPublic)
    };

    return (
        <div className="flex min-h-screen bg-(--neutral-color)">
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-12 flex-1">
                <div className='w-full max-w-3xl px-4 py-6 rounded-xl'>
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-(--primary-color) mb-2">
                            Create Account
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                            Sign up to get started
                        </p>
                    </div>

                    {/* Form Card */}
                    <form className="bg-(--neutral-color) rounded-lg shadow-lg p-6 sm:p-8">
                        <div className="space-y-5">
                            {/* First Name Field */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                    First Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="firstName"
                                        type="text"
                                        {...register('firstName', { required: 'First name is required' })}
                                        className="w-full pl-11 pr-4 py-3 bg-(--neutral-color) border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            {/* Last Name Field */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="lastName"
                                        type="text"
                                        {...register('lastName', { required: 'Last name is required' })}
                                        className="w-full pl-11 pr-4 py-3 bg-(--neutral-color) border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`block w-full pl-10 pr-3 py-2.5 sm:py-3 border rounded-lg 
                                                    bg-(--neutral-color) text-sm sm:text-base transition-colors
                                                    focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color) border-gray-300 dark:border-gray-600
                                                    ${errors.email
                                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                                : ""
                                            }`}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                // Proper email regex
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Please enter a valid email address",
                                            },
                                        })}
                                    />
                                </div>

                                {/* Error message */}
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>


                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password', { required: 'Password is required' })}
                                        className="w-full pl-11 pr-4 py-3 bg-(--neutral-color) border border-gray-300 dark:border-gray-700 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:opacity-70 transition-opacity"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="w-full bg-(--primary-color) text-white py-3 rounded-xl font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link href='login' className="text-(--primary-color) hover:underline font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>


            <div className=' hidden md:flex flex-col justify-center items-center w-full px-6 py-12 flex-1 rounded-b-4xl'>

                <AuthImage source={'/register.png'} alt="loging iamge" h={200} w={800} customCss="rounded-2xl" />

            </div>

        </div>


    );
}