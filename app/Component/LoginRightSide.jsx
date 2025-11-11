import React from 'react';

const LoginRightSide = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-(--primary-color) to-(--secondary-color) p-12 items-center justify-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-lg">
                <h2 className="text-4xl font-bold mb-6">
                    Start your journey with us
                </h2>
                <p className="text-lg text-white/90 mb-8">
                    Discover the world&apos;s best platform to manage your projects, collaborate with your team, and achieve your goals.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Secure & Reliable</h3>
                            <p className="text-white/80 text-sm">Your data is protected with enterprise-grade security.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Lightning Fast</h3>
                            <p className="text-white/80 text-sm">Experience blazing fast performance in everything you do.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Team Collaboration</h3>
                            <p className="text-white/80 text-sm">Work together seamlessly with your team members.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRightSide;