import UserLayout from "@/layouts/user-layout";
import { Link, usePage } from "@inertiajs/react";

export default function Index() {
    const { orders } = usePage().props as any

    return (
        <UserLayout>
            <h2 className="mb-4 text-xl font-semibold">Mes commandes</h2>

            <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left">Commande #</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Total</th>
                        <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                Aucune commande trouvée
                            </td>
                        </tr>
                    ) : (
                        orders.map((order: any) => {
                            <tr key={order.id}>
                                <td className="px-6 py-4">{order.order_number}</td>
                                <td className="px-6 py-4">{order.created_at}</td>
                                <td className="px-6 py-4">{order.status}</td>
                                <td className="px-6 py-4">{order.total_price}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/user/orders/${order.id}`}
                                        className="text-[#FFC533] hover:text-[#FFC533]"
                                    >
                                        Voir
                                    </Link>
                                </td>
                            </tr>
                        })
                    )}
                </tbody>
            </table>
        </UserLayout>
    )
}
