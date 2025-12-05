import { useState } from 'react';
import { User, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import { redirectByRole } from '@/routes/Auth_route';

interface LoginPayload {
    username: string;
    password: string;
}

export default function Login_page() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState<{
        username?: string;
        password?: string;
        general?: string;
    }>({});
    const [showPassword, setShowPassword] = useState(false);

    const loginMutation = useMutation({
        mutationFn: async (payload: LoginPayload) => {
            const res = await api.post('/v1/user/login', payload);
            return res.data;
        },
        onSuccess: data => {
            queryClient.setQueryData(['auth-user'], data);
            navigate(redirectByRole(data.data.role));
        },
        onError: (err: any) => {
            // Clear previous errors first
            setErrors({});
            console.log(err.response?.data);
            if (err.response?.data?.errors) {
                const errors = {};
                err.response.data.errors.forEach(err => {
                    errors[err.path] = err.message;
                });
                setErrors(errors);
            } else if (err.response?.data?.message) {
                setErrors({ general: err.response.data.message });
            } else {
                setErrors({ general: 'Something went wrong.' });
            }
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate(formData);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                {/* Header */}
                <div className="px-8 pt-8 pb-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
                        <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Please sign in to your account
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="px-8 pb-8 pt-2"
                >
                    {/* General error */}
                    {errors.general && (
                        <div className="mb-4 text-red-600 text-sm flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.general}
                        </div>
                    )}

                    {/* Username Field */}
                    <div className="mb-5 group">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1"
                        >
                            Username
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User
                                    className={`h-5 w-5 ${
                                        errors.username
                                            ? 'text-red-500'
                                            : 'text-gray-400 group-focus-within:text-indigo-500'
                                    }`}
                                />
                            </div>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 ${
                                    errors.username
                                        ? '!border-red-500 focus:!border-red-500 focus:ring-red-200' // Added '!' to force red border
                                        : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-200 hover:border-gray-300'
                                }`}
                                placeholder="Enter your username"
                            />
                        </div>
                        {errors.username && (
                            <div className="text-red-500 text-xs mt-1 pl-1 flex items-center">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {errors.username}
                            </div>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-2 group">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock
                                    className={`h-5 w-5 ${
                                        errors.password
                                            ? 'text-red-500'
                                            : 'text-gray-400 group-focus-within:text-indigo-500'
                                    }`}
                                />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                className={`block w-full pl-10 pr-10 py-2.5 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 ${
                                    errors.password
                                        ? '!border-red-500 focus:!border-red-500 focus:ring-red-200' // Added '!' to force red border
                                        : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-200 hover:border-gray-300'
                                }`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <div className="text-red-500 text-xs mt-1 pl-1 flex items-center">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                {errors.password}
                            </div>
                        )}
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end mb-6">
                        <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline transition-colors duration-200"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Sign In */}
                    <button
                        type="submit"
                        disabled={loginMutation.status === 'pending'}
                        className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-bold text-white tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transform active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {loginMutation.status === 'pending' ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
