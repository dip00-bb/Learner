"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Registration submitted! Check console for data.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-(--neutral-color) px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
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
                                    {...register('FirstName', { required: 'First name is required' })}
                                    className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color) bg-(--neutral-color) placeholder-gray-400 text-sm sm:text-base transition-colors"
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
                                    {...register('LastName', { required: 'Last name is required' })}
                                    className="block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color) bg-(--neutral-color) placeholder-gray-400 text-sm sm:text-base transition-colors"
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
              focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)
              ${errors.email
                                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                            : "border-gray-300 dark:border-gray-600"
                                        }`}
                                    {...register("Email", {
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
                                    className="block w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color) bg-(--neutral-color) placeholder-gray-400 text-sm sm:text-base transition-colors"
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
                            className="w-full bg-(--primary-color) hover:opacity-90 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--primary-color) text-sm sm:text-base mt-6"
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <a href="#" className="text-(--primary-color) hover:underline font-medium">
                                Sign in
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}