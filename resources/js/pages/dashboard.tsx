import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { List, CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
    stats?: {
        totalProducts: number;
        totalCategories: number;
        totalBrands: number;
    }
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    }
];

export default function Dashboard({ stats = {
    totalProducts: 0,
    totalCategories: 0,
    totalBrands: 0,
} }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Dashboard' />

            <div className='flex h-full flex-1 flex-col gap-6 rounded-xl p-6 bg-gradient-to-br from-background to-muted/20'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                        <p className='text-muted-foreground mt-1'>Welcome back ! Here's your overview</p>
                    </div>
                </div>

                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    <Card className='bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium text-blue-500'>
                                Total Products
                            </CardTitle>
                            <List className='h-4 w-4 text-blue-500' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-blue-500'>
                                {stats.totalProducts}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Your products lists
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium text-green-500'>
                                Total Categories
                            </CardTitle>
                            <CheckCircle className='h-4 w-4 text-green-500' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-green-500'>
                                {stats.totalCategories}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Your categories lists
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/20'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium text-yellow-500'>
                                Total Brands
                            </CardTitle>
                            <Clock className='h-4 w-4 text-yellow-500' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-yellow-500'>
                                {stats.totalCategories}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Your brands lists
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium text-purple-500'>
                                Total Products
                            </CardTitle>
                            <AlertCircle className='h-4 w-4 text-purple-500' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-purple-500'>
                                {stats.totalProducts}
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Your products lists
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
