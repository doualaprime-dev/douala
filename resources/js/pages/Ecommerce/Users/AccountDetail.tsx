import UserLayout from '@/layouts/user-layout';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Camera,
    Save,
    X,
    Eye,
    EyeOff,
    AlertCircle,
    CheckCircle,
    Shield,
    Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface UserData {
    id: number
    name: string
    email: string
    phone?: string
    address?: string
    avatar?: string
    username?: string
    email_verified_at?: string
    created_at: string
    updated_at: string
    newsletter_subscription?: boolean
    marketing_emails?: boolean
    order_notifications?: boolean
    security_notifications?: boolean
}


interface AccountDetailProps {
    user: UserData
    success?: string
    errors?: Record<string, string>
}

export default function AccountDetail({ user, success, errors }: AccountDetailProps) {
    const { auth } = usePage().props as any
    const [activeTab, setActiveTab] = useState('profile')
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [avatarPreview, setAvatarPreview] = useState<string | null>(user.avatar || null)

    // Profile form
    const profileForm = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        address: user.address || '',
        username: user.username || '',
        avatar: null as File | null,
    })

    // Password form
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    // Preferences form
    // const preferencesForm = useForm({
    //     newsletter_subscription: user.newsletter_subscription ?? true,
    //     marketing_emails: user.marketing_emails ?? false,
    //     order_notifications: user.order_notifications ?? true,
    //     security_notifications: user.security_notifications ?? true,
    // })

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        profileForm.post('/user/profile/update', {
            preserveScroll: true,
            onSuccess: () => {
                // Handle success
            },
        })
    }

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        passwordForm.post('/user/password/update', {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset()
            },
        })
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            profileForm.setData('avatar', file)

            // Create preview
            const reader = new FileReader()

            reader.onload = (e) => {
                setAvatarPreview(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const removeAvatar = () => {
        profileForm.setData('avatar', null)
        setAvatarPreview(null)
    }

    const tabItems = [
        { id: 'profile', label: 'Profile Information', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
    ]

    return (
        <UserLayout title='Account Details'>
            <div className='space-y-6'>
                {/* Success Message */}
                {success && (
                    <Alert className='border-green-200 bg-green-50'>
                        <CheckCircle className='h-4 w-4 text-green-600' />
                        <AlertDescription className='text-green-800'>{success}</AlertDescription>
                    </Alert>
                )}

                {/* Error Message */}
                {errors && Object.keys(errors).length > 0 && (
                    <Alert className='border-red-200 bg-red-50'>
                        <CheckCircle className='h-4 w-4 text-red-600' />
                        <AlertDescription className='text-red-800'>
                            {Object.values(errors).join(', ')}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Tab Navigation */}
                <div className='border-b border-gray-200'>
                    <nav className='-mb-px flex space-x-8'>
                        {tabItems.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                >
                                    <Icon className='h-4 w-4' />
                                    <span>{tab.label}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>

                {/* Profile Information Tab */}
                {activeTab === 'profile' && (
                    <div className='space-y-6'>
                        <Card>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-2'>
                                    <User className='h-5 w-5' />
                                    Personal Information
                                </CardTitle>
                                <CardDescription>
                                    Update your personal information and profile picture
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleProfileSubmit} className='space-y-6'>
                                    {/* Avatar Section */}
                                    <div className='space-y-4'>
                                        <Label>Profile Picture</Label>
                                        <div className='flex items-center gap-4'>
                                            <div className='relative'>
                                                <div className='h-20 w-20 overflow-hidden rounded-full border-2 border-gray-200'>
                                                    {avatarPreview ? (
                                                        <img
                                                            src={avatarPreview}
                                                            alt="Profile"
                                                            className='h-full w-full object-cover'
                                                        />
                                                    ) : (
                                                        <div className='flex h-full w-full items-center justify-center bg-gray-100'>
                                                            <User className='h-8 w-8 text-gray-400' />
                                                        </div>
                                                    )}
                                                </div>
                                                <Label
                                                    htmlFor='avatar-upload'
                                                    className='absolute -right-1 -bottom-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700'
                                                >
                                                    <Camera className='h-3 w-3' />
                                                    <input
                                                        id='avatar-upload'
                                                        type="file"
                                                        accept='image/*'
                                                        className='hidden'
                                                        onChange={handleAvatarChange}
                                                    />
                                                </Label>
                                            </div>
                                            <div className='space-y-2'>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => document.getElementById('avatar-upload')?.click()}
                                                >
                                                    Upload New Photo
                                                </Button>
                                                {avatarPreview && (
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={removeAvatar}
                                                        className='text-red-600 hover:text-red-700'
                                                    >
                                                        Remove Photo
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Personal Information Fields */}
                                    <div className='grid gap-6 md:grid-cols-2'>
                                        <div className='space-y-2'>
                                            <Label htmlFor='name'>Full Name *</Label>
                                            <Input
                                                id='name'
                                                value={profileForm.data.name}
                                                onChange={(e) => profileForm.setData('name', e.target.value)}
                                                placeholder='Enter your full name'
                                                className={profileForm.errors.name ? 'border-red-500' : ''}
                                            />
                                            {profileForm.errors.name && (
                                                <p className='text-sm text-red-600'>{profileForm.errors.name}</p>
                                            )}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='username'>Username</Label>
                                            <Input
                                                id='username'
                                                value={profileForm.data.username}
                                                onChange={(e) => profileForm.setData('username', e.target.value)}
                                                placeholder='Enter your full username'
                                                className={profileForm.errors.username ? 'border-red-500' : ''}
                                            />
                                            {profileForm.errors.username && (
                                                <p className='text-sm text-red-600'>{profileForm.errors.username}</p>
                                            )}
                                        </div>

                                        <div className='space-y-2'>
                                            <div className='relative'>
                                                <Mail className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                                                <Input
                                                    id='email'
                                                    type='email'
                                                    value={profileForm.data.email}
                                                    onChange={(e) => profileForm.setData('email', e.target.value)}
                                                    placeholder='Enter your email'
                                                    className={`pl-10 ${profileForm.errors.email ? 'border-red-500' : ''}`}
                                                />
                                            </div>
                                            {profileForm.errors.email && (
                                                <p className='text-sm text-red-600'>{profileForm.errors.email}</p>
                                            )}
                                            {user.email_verified_at ? (
                                                <Badge variant="secondary" className='mt-1'>
                                                    Verified
                                                </Badge>
                                            ) : (
                                                <Badge variant="outline" className='mt-1'>
                                                    Not Verified
                                                </Badge>
                                            )}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='phone'>Phone Number</Label>
                                            <div className='relative'>
                                                <Phone className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                                                <Input
                                                    id='phone'
                                                    type='tel'
                                                    value={profileForm.data.phone}
                                                    onChange={(e) => profileForm.setData('phone', e.target.value)}
                                                    placeholder='Enter your phone number'
                                                    className={`pl-10 ${profileForm.errors.phone ? 'border-red-500' : ''}`}
                                                />
                                            </div>
                                            {profileForm.errors.phone && (
                                                <p className='text-sm text-red-600'>{profileForm.errors.phone}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <Label htmlFor='address'>Address</Label>
                                        <div className='relative'>
                                            <MapPin className='absolute top-3 left-3 h-4 w-4 text-gray-400' />
                                            <Textarea
                                                id='address'
                                                value={profileForm.data.address}
                                                onChange={(e) => profileForm.setData('address', e.target.value)}
                                                placeholder='Enter your address'
                                                className={`pl-10 ${profileForm.errors.address ? 'border-red-500' : ''}`}
                                                rows={3}
                                            />
                                        </div>
                                        {profileForm.errors.address && (
                                            <p className='text-sm text-red-600'>{profileForm.errors.address}</p>
                                        )}
                                    </div>

                                    <div className='flex gap-4'>
                                        <Button type='submit' disabled={profileForm.processing}>
                                            <Save className='mr-2 h-4 w-4' />
                                            {profileForm.processing ? 'Saving...' : 'Save Changes'}
                                        </Button>
                                        <Button type='button' variant='outline' onClick={() => profileForm.reset()}>
                                            <X className='mr-2 h-4 w-4' />
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                    <div className='space-y-6'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Change Password</CardTitle>
                                <CardDescription>Update your password to keep account secure</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handlePasswordSubmit} className='space-y-6'>
                                    <div className='space-y-2'>
                                        <Label htmlFor='current_password'>Current Password *</Label>
                                        <div className='relative'>
                                            <Input
                                                id='current_password'
                                                type={showPassword ? 'text' : 'password'}
                                                value={passwordForm.data.current_password}
                                                onChange={(e) => passwordForm.setData('current_password', e.target.value)}
                                                placeholder='Enter current password'
                                                className={passwordForm.errors.current_password ? 'border-red-500' : ''}
                                            />
                                            <Button
                                                type='button'
                                                variant="ghost"
                                                size="sm"
                                                className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className='h-4 w-4' />
                                                ) : (
                                                    <Eye className='h-4 w-4' />
                                                )}
                                            </Button>
                                        </div>
                                        {passwordForm.errors.current_password && (
                                            <p className='text-sm text-red-600'>{passwordForm.errors.current_password}</p>
                                        )}
                                    </div>

                                    <div className='space-y-2'>
                                        <Label htmlFor='password'>New Password *</Label>
                                        <div className='relative'>
                                            <Input
                                                id='password'
                                                type={showNewPassword ? 'text' : 'password'}
                                                value={passwordForm.data.password}
                                                onChange={(e) => passwordForm.setData('password', e.target.value)}
                                                placeholder='Enter new password'
                                                className={passwordForm.errors.password ? 'border-red-500' : ''}
                                            />
                                            <Button
                                                type='button'
                                                variant="ghost"
                                                size="sm"
                                                className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                            >
                                                {showNewPassword ? (
                                                    <EyeOff className='h-4 w-4' />
                                                ) : (
                                                    <Eye className='h-4 w-4' />
                                                )}
                                            </Button>
                                        </div>
                                        {passwordForm.errors.password && (
                                            <p className='text-sm text-red-600'>{passwordForm.errors.password}</p>
                                        )}
                                    </div>

                                    <div className='space-y-2'>
                                        <Label htmlFor='password_confirmation'>Confirm New Password *</Label>
                                        <Input
                                            id='password_confirmation'
                                            type="password"
                                            value={passwordForm.data.password_confirmation}
                                            onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)}
                                            placeholder='Confirm new password'
                                            className={passwordForm.errors.password_confirmation ? 'border-red-500' : ''}
                                        />
                                        {passwordForm.errors.password_confirmation && (
                                            <p className='text-sm text-red-600'>{passwordForm.errors.password_confirmation}</p>
                                        )}
                                    </div>

                                    <div className='flex gap-4'>
                                        <Button type='submit' disabled={passwordForm.processing}>
                                            <Save className='mr-2 h-4 w-4' />
                                            {passwordForm.processing ? 'Updating..' : 'Update Password'}
                                        </Button>
                                        <Button type='button' variant="outline" onClick={() => passwordForm.reset()}>
                                            <X className='mr-2 h-4 w-4' />
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Account Security Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Security</CardTitle>
                                <CardDescription>Important security information about your account</CardDescription>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <div className='flex items-center justify-between rounded-lg border p-4'>
                                    <div>
                                        <h4 className='font-medium'>Email Verification</h4>
                                        <p className='text-sm text-gray-600'>
                                            {user.email_verified_at
                                                ? 'Your email is verified'
                                                : 'Your email is not verified'}
                                        </p>
                                    </div>
                                    <Badge variant={user.email_verified_at ? 'default' : 'secondary'}>
                                        {user.email_verified_at ? 'Verified' : 'Not Verified'}
                                    </Badge>
                                </div>

                                <div className='flex items-center justify-between rounded-lg border p-4'>
                                    <div>
                                        <h4 className='font-medium'>Account Created</h4>
                                        <p className='text-sm text-gray-600'>
                                            {new Date(user.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between rounded-lg border p-4'>
                                    <div>
                                        <h4 className='font-medium'>Last Updated</h4>
                                        <p className='text-sm text-gray-600'>
                                            {new Date(user.updated_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </UserLayout>
    )
}
