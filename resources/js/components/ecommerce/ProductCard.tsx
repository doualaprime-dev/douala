import { ProductListItem } from '@/types'
import { router, useForm } from '@inertiajs/react'
import { Heart, ShoppingBag } from 'lucide-react'

const ProductCard = (product: ProductListItem) => {
  const form = useForm<{
    option_ids: Record<string, number>
    quantity: number
  }>({
    option_ids: {},
    quantity: 1,
  })

  const handleDetail = (slug: string) => {
    router.visit(route('product.detail', { slug }))
  }

  const addToCart = () => {
    form.post(route('cart.store', product.id), {
      preserveScroll: true,
      preserveState: true,
      onError: (err: any) => {
        console.log(err)
      },
    })
  }

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative">
        <img src={product.image} alt="Product" className="h-64 w-full object-cover" />
        {product.isDiscount && (
          <div className="absolute top-0 right-0 m-2 rounded-md bg-red-500 px-2 py-1 text-sm text-white">
            -{product.percent}FCFA
          </div>
        )}
        <div className="bg-opacity-20 absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={addToCart}
            disabled={form.processing}
            className="mx-2 rounded-full bg-white p-3 text-gray-800 transition hover:bg-[#FFC533] hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-2 cursor-pointer" onClick={() => handleDetail(product.slug)}>
        <h3 className="text-xs font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-extrabold text-[#1B3B6C] text-lg">{product.price} FCFA</span>
            {product.isDiscount && <span className="ml-2 text-gray-400 text-sm line-through">{product.discount} FCFA</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
