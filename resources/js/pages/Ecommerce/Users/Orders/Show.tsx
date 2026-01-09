import UserLayout from "@/layouts/user-layout";
import { Link, usePage } from "@inertiajs/react";
import { CreditCard, Truck, MapPin, FileText, User } from 'lucide-react';

export default function Show() {
    const { order } = usePage().props as any

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'pending':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock h-5 w-5"
                    >
                        <path d="M12 6v6l4 2" />
                    </svg>
                )
            case 'completed':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle h-5 w-5"
                    >
                        <path d="M22 11.00V12a10 10 0 1 1-5.93-9.14" />
                    </svg>
                )
            case 'cancelled':
                return (
                    <svg
                        xmlns="http://www.w3;org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x-circle h-5 w-5"
                    >
                        <path d="M18 6 6 18" />
                        <path d="a6 12 12" />
                    </svg>
                )
            default:
                return (
                    <svg
                        xmlns="http://www.w3;org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x-circle h-5 w-5"
                    >
                        <path d="M13 2M6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 000 2-2v92" />
                        <path d="M11 16h-3" />
                        <path d="M15 16h-3" />
                        <path d="M12 13v-3" />
                    </svg>
                )
        }
    }

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'cancelled':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-blue-100 text-blue-800'
        }
    }

    const getPaymentStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'paid':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'failed':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <UserLayout>
            {/* Order Number */}
            <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="border-b p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Commande #{order.order_number}</h1>
                            <p className="mt-1 text-sm text-gray-600">Placé sur {order.created_at}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                {getStatusIcon(order.status)}
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusBadgeClass(order.status)}`}
                                >
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CreditCard className="h-5 w-5 text-gray-600" />
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${getPaymentStatusBadgeClass(order.payment_status)}`}
                                >
                                    {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Billing Address */}
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                        <User className="h-5 w-5" />
                        Adresse de facturation
                    </h3>
                    <div className="space-y-2 text-sm">
                        <p className="font-semibold">{order.billing_full_name}</p>
                        <p>{order.billing_email}</p>
                        {order.billing_phone} && <p>{order.billing_phone}</p>
                        <p>{order.billing_address}</p>
                        <p>
                            {order.billing_city}, {order.billing_state} {order.billing_zip}
                        </p>
                        <p>{order.billing_country}</p>
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                        <MapPin className="h-5 w-5" />
                        Adresse de livraison
                    </h3>
                    <div className="space-y-2 text-sm">
                        {order.is_shipping_same_as_billing ? (
                            <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                Identique à l'adresse de facturation
                            </span>
                        ) : (
                            <>
                                <p className="font-semibold">{order.shipping_full_name}</p>
                                <p>{order.shipping_email}</p>
                                {order.shipping_phone} && <p>{order.shipping_phone}</p>
                                <p>{order.shipping_address}</p>
                                <p>
                                    {order.shipping_city}, {order.shipping_state} {order.shipping_zip}
                                </p>
                                <p>{order.shipping_country}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Shipping & Tracking */}
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                        <Truck className="h-5 w-5" />
                        Détails d'expédition
                    </h3>
                    <div className="space-y-2 text-sm">
                        <div>
                            <span className="font-medium">{order.shipping_method}</span>
                        </div>
                        {order.tracking_number && (
                            <div>
                                <span className="font-semibold">Suivie #:</span> {order.Suivie_number}
                            </div>
                        )}
                        {order.estimated_delivery && (
                            <div>
                                <span className="font-semibold">Suivie #:</span> {order.estimated_delivery}
                            </div>
                        )}
                        {order.shipped_at && (
                            <div>
                                <span className="font-semibold">Suivie #:</span> {order.shipped_at}
                            </div>
                        )}
                        {order.delivered_at && (
                            <div>
                                <span className="font-semibold">Suivie #:</span> {order.delivered_at}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-lg font-semibold">Articles commandés</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Produit
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    SKU
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Quantité
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Prix unitaire
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {order.order_items.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                        Aucun article trouvé
                                    </td>
                                </tr>
                            ) : (
                                order.order_items.map((item) => {
                                    <tr key={item.id}>
                                        <td className="flex items-center gap-3 px-6 py-4">
                                            {item.product?.image && (
                                                <img
                                                    src={item.product.image}
                                                    alt={item.product_name}
                                                    className="h-10 w-10 rounded border object-cover"
                                                />
                                            )}
                                            <span>
                                                {item.product ? (
                                                    <Link
                                                        href={`/product/${item.product.slug}`}
                                                        className="text-[#FFC533] hover:text-[#FFC533]"
                                                    >
                                                        {item.product_name}
                                                    </Link>
                                                ) : (
                                                    item.product_name
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{item.product_sku}</td>
                                        <td className="px-6 py-4">{item.quantity}</td>
                                        <td className="px-6 py-4">{item.unit_price}</td>
                                        <td className="px-6 py-4">{item.total_price}</td>
                                    </tr>
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Totals */}
            <div className="mb-4 flex flex-col items-end">
                <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold">Résumé de la commande</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Sous - Total</span>
                            <span>{order.Subtotal} F CFA</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>{order.tax_amount} F CFA</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Expédition</span>
                            <span>{order.shipping_amount} F CFA</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Rabais</span>
                            <span>{order.discount_amount} F CFA</span>
                        </div>
                    </div>
                </div>
            </div>

        </UserLayout>
    )
}
