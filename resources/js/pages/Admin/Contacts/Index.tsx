import DataTable from '@/components/DataTables/DataTable';
import AppLayout from '@/layouts/app-layout';
import { Head, router, usePage } from '@inertiajs/react';
import { TagIcon } from 'lucide-react';

export default function ContactIndex() {
    const { contacts, filters, can } = usePage().props;
    const columns = [
        {
            key: 'index',
            label: '#',
            sortable: false,
            type: 'IndexColumn',
            width: '80px',
            render: (item: any, index: number) => {
                return (filters.page - 1) * filters.perPage + index + 1;
            },
        },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email', sortable: false },
        { key: 'message', label: 'Message', sortable: false },
        { key: 'created_at', type: 'date', label: 'Created At', sortable: true },
    ];

    const handleDelete = (id: string) => {
        router.delete(route('admin.contacts.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                // toast.success('User deleted successfully');
            },
            onError: () => {
                // toast.error('User deletion failed');
            },
        });
    };

    return (
        <AppLayout>
            <Head title="Contacts" />
            <div className="py-6">
                <div className="mx-auto">
                    <DataTable
                        data={contacts}
                        columns={columns}
                        resourceName="Contacts"
                        singularName="Contact"
                        routeName="admin.contacts.index"
                        filters={filters}
                        canViewResource={false}
                        canCreateResource={true}
                        canEditResource={true}
                        canDeleteResource={true}
                        createRoute="admin.contacts.create"
                        viewRoute="admin.contacts.show"
                        editRoute="admin.contacts.edit"
                        onDelete={handleDelete}
                        icon={TagIcon}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
