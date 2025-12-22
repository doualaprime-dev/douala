import EcommerceLayout from '@/layouts/ecom-layout';
import { Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <EcommerceLayout title="Customer Register - ShopMart">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                    {/* Register Form */}
                    <div className="md:w-1/2">
                        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                            <div className="border-b p-6">
                                <h2 className="text-lg font-semibold">Register</h2>
                                <p className="mt-1 text-gray-600">Create your account to start shopping!</p>
                            </div>
                            <div className="p-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                                required
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            required
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                                            Phone (optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password_confirmation" className="mb-2 block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                id="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                                            >
                                                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing ? 'Registering...' : 'Register'}
                                    </button>
                                </form>
                                <div className="mt-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <span className="text-gray-600">Already have an account?</span>
                    <Link href="/login" className="ml-2 font-medium text-indigo-600 hover:text-indigo-800">
                        Login
                    </Link>
                </div>
                {/* Benefits Section */}
                <div className="mt-12">
                    <h2 className="mb-6 text-xl font-semibold">Why Create an Account?</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Benefit 1 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                                <i className="fas fa-truck text-xl text-indigo-600"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-medium">Faster Checkout</h3>
                            <p className="text-gray-600">Save your shipping and payment details for quicker checkout on future orders.</p>
                        </div>
                        {/* Benefit 2 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                                <i className="fas fa-history text-xl text-indigo-600"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-medium">Order History</h3>
                            <p className="text-gray-600">Easily track and view all your past and current orders in one place.</p>
                        </div>
                        {/* Benefit 3 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                                <i className="fas fa-heart text-xl text-indigo-600"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-medium">Wishlist</h3>
                            <p className="text-gray-600">Save products to your wishlist for later and get notified about special offers.</p>
                        </div>
                        {/* Benefit 4 */}
                        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                                <i className="fas fa-tag text-xl text-indigo-600"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-medium">Exclusive Deals</h3>
                            <p className="text-gray-600">Get access to member-only discounts and be the first to know about new promotions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </EcommerceLayout>
    );
}







// import { login } from '@/routes';
// import { store } from '@/routes/register';
// import { Form, Head } from '@inertiajs/react';

// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Spinner } from '@/components/ui/spinner';
// import AuthLayout from '@/layouts/auth-layout';

// export default function Register() {
//     return (
//         <AuthLayout
//             title="Create an account"
//             description="Enter your details below to create your account"
//         >
//             <Head title="Register" />
//             <Form
//                 {...store.form()}
//                 resetOnSuccess={['password', 'password_confirmation']}
//                 disableWhileProcessing
//                 className="flex flex-col gap-6"
//             >
//                 {({ processing, errors }) => (
//                     <>
//                         <div className="grid gap-6">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="name">Name</Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     required
//                                     autoFocus
//                                     tabIndex={1}
//                                     autoComplete="name"
//                                     name="name"
//                                     placeholder="Full name"
//                                 />
//                                 <InputError
//                                     message={errors.name}
//                                     className="mt-2"
//                                 />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email address</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     required
//                                     tabIndex={2}
//                                     autoComplete="email"
//                                     name="email"
//                                     placeholder="email@example.com"
//                                 />
//                                 <InputError message={errors.email} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     required
//                                     tabIndex={3}
//                                     autoComplete="new-password"
//                                     name="password"
//                                     placeholder="Password"
//                                 />
//                                 <InputError message={errors.password} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password_confirmation">
//                                     Confirm password
//                                 </Label>
//                                 <Input
//                                     id="password_confirmation"
//                                     type="password"
//                                     required
//                                     tabIndex={4}
//                                     autoComplete="new-password"
//                                     name="password_confirmation"
//                                     placeholder="Confirm password"
//                                 />
//                                 <InputError
//                                     message={errors.password_confirmation}
//                                 />
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="mt-2 w-full"
//                                 tabIndex={5}
//                                 data-test="register-user-button"
//                             >
//                                 {processing && <Spinner />}
//                                 Create account
//                             </Button>
//                         </div>

//                         <div className="text-center text-sm text-muted-foreground">
//                             Already have an account?{' '}
//                             <TextLink href={login()} tabIndex={6}>
//                                 Log in
//                             </TextLink>
//                         </div>
//                     </>
//                 )}
//             </Form>
//         </AuthLayout>
//     );
// }
