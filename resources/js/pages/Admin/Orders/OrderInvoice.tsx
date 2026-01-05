import { forwardRef } from 'react'

const OrderInvoice = forwardRef(({ order }, ref) => {
  // Helper for formatting
  const formatPrice = (price) => {
    const formatted = Number(price).toFixed(2)
    return <span className="font-mono text-base font-bold">{formatted} USD</span>
  }

  return (
    <div
      ref={ref}
      style={{
        width: 350,
        padding: 15,
        fontFamily: 'monospace',
        background: '#fff',
        color: '#000',
        fontSize: '13px',
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div className="text-xs">******************************</div>
        <div className="text-xs">Nom de votre entreprise</div>
        <div className="text-xs">Boutique en ligne</div>
        <div className="text-xs">******************************</div>
        <div style={{ fontWeight: 'bold', fontSize: 16, margin: '6px 0' }}>{t('Invoice')}</div>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>
          {t('Order №')} {order.order_number}
        </div>
      </div>

      {/* Company Info */}
      <div className="mb-2 text-xs">
        Nom de votre entreprise
        <br />
        Boutique en ligne
        <br />
        +237 670 85 72 04
        +237 699 01 35 35
        <br />
        {t('Address')}: Deido Grand Moulin
                        MRS Omnisports
      </div>

      {/* Order Info */}
      <div className="mb-2 text-xs">
        {t('Date de commande')}: {new Date(order.created_at).toLocaleDateString()}
        <br />
        {t('Date de facturation')}: {new Date(order.created_at).toLocaleDateString()}
        <br />
        {t('Temps')}: {new Date(order.created_at).toLocaleTimeString()}
        <br />
        {t('Mode de paiement')}: {order.payment_method}
        <br />
        {t('État du paiement')}: {order.payment_status}
      </div>

      {/* Customer Info */}
      <div className="mb-2 text-xs">
        <div style={{ fontWeight: 'bold' }}>{t('Facturer à')} :</div>
        {order.billing_full_name}
        <br />
        {order.billing_email}
        <br />
        {order.billing_phone}
        <br />
        {order.billing_address}
        <br />
        {order.billing_city}, {order.billing_state} {order.billing_zip}
        <br />
        {order.billing_country}
      </div>

      {/* Shipping Info (if different from billing) */}
      {!order.is_shipping_same_as_billing && (
        <div className="mb-2 text-xs">
          <div style={{ fontWeight: 'bold' }}>{t('Livrez à')}:</div>
          {order.shipping_full_name}
          <br />
          {order.shipping_address}
          <br />
          {order.shipping_city}, {order.shipping_state} {order.shipping_zip}
          <br />
          {order.shipping_country}
        </div>
      )}

      {/* Items Section */}
      <div className="text-xs">----------------------------------------</div>
      <div className="mb-1 text-xs font-bold">
        {t('Nom')} {t('Qté')} {t('Prix')} {t('Somme')}
      </div>
      <div className="mb-2">
        {order.order_items.map((item) => (
          <div key={item.id} className="mb-1">
            <div className="text-xs font-medium">{item.product_name}</div>
            {item.product_sku && (
              <div className="text-xs text-gray-600">SKU: {item.product_sku}</div>
            )}
            <div className="flex items-center justify-between text-xs">
              <span>
                {item.quantity} {t('pcs')} x {formatPrice(item.unit_price)}
              </span>
              <span className="font-bold">{formatPrice(item.total_price)}</span>
            </div>
            {item.variation_data && item.variation_data.length > 0 && (
              <div className="text-xs text-gray-600">
                {item.variation_data.map((variation, index) => (
                  <div key={index}>
                    {variation.type}: {variation.value}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="my-2 border-t border-dashed border-gray-300"></div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{t('Sous-total')} :</span>
        {formatPrice(order.subtotal)}
      </div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{t('Tax')} :</span>
        {formatPrice(order.tax_amount)}
      </div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span>{t('Livraison')} :</span>
        {formatPrice(order.shipping_amount)}
      </div>
      {order.discount_amount > 0 && (
        <div className="mb-1 flex items-center justify-between text-xs text-red-600">
          <span>{t('Rabais')} :</span>-{formatPrice(order.discount_amount)}
        </div>
      )}
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span>{t('TOTAL À PAYER')}:</span>
        {formatPrice(order.total_price)}
      </div>

      {/* Notes Section */}
      {order.customer_notes && (
        <div className="mb-2 text-xs">
          {t('Notes des clients')} :<br />
          {order.customer_notes}
        </div>
      )}

      {/* Footer Section */}
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <div className="mt-1 text-xs text-gray-600">{t('All amounts in USD')}</div>
        <div className="mt-1 text-xs font-bold">{t('THANK YOU FOR YOUR ORDER!')}</div>
        <div className="mt-1 text-xs">
          <a
            href="https://doualaprime.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.doualaprime.com
          </a>
        </div>
      </div>
    </div>
  )
})

OrderInvoice.displayName = 'OrderInvoice'

export default OrderInvoice
