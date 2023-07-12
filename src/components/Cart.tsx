'use client'

import { numberFormat } from '@/utils/numberFormat'
import { priceReduce } from '@/utils/priceReduce'

import axios from 'axios'

import { Handbag, X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import { useState } from 'react'

import { useCartContext } from '@/context/CartContext'
import { Button } from './Buttons/Button'

import { useTransition, animated, config } from '@react-spring/web'

import Image from 'next/image'

import {
  Content,
  Trigger,
  Close,
  Title,
  Product,
  ContentContainer,
} from '@/styles/components/header'

import { Spinner } from './Spinner'

export function Cart() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { cart, removeProductFromTheCart } = useCartContext()

  const transitions = useTransition(open, {
    from: { opacity: 0, x: 110 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 1, x: 480 },
    config: config.gentle,
  })

  async function handleConfirmPurchase() {
    setLoading(true)

    const priceIds = cart.map((product) => {
      return product.priceId
    })

    const response = await axios.post('http://localhost:3000/api/checkout', {
      priceIds,
    })

    await new Promise((resolve) => setTimeout(resolve, 10000))

    const { checkoutUrl } = response.data

    window.location.href = String(checkoutUrl)

    localStorage.removeItem('cart-@ignite-shopv2')
  }

  function handleRemoveProductFromTheCart(product: any) {
    removeProductFromTheCart({ ...product, cartVarient: 'out' })
  }

  return (
    <>
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Trigger cartlength={cart.length}>
          <Handbag size={24} color="#C4C4CC" />
          <span>{cart.length}</span>
        </Trigger>

        {transitions((styles, item) =>
          item ? (
            <>
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild forceMount>
                  <animated.div style={styles}></animated.div>
                </Dialog.Overlay>

                <Content asChild forceMount>
                  <animated.div style={styles}>
                    <Close>
                      <X size={24} color="#8D8D99" />
                    </Close>

                    <Title>Carrinho de compras</Title>

                    {loading ? (
                      <Spinner />
                    ) : (
                      <ContentContainer>
                        <main>
                          {cart.map((product) => {
                            return (
                              <Product key={product.id}>
                                <div>
                                  <Image
                                    src={product.imageUrl}
                                    alt=""
                                    height={94}
                                    width={94}
                                  />
                                </div>

                                <section>
                                  <h4>{product.name}</h4>
                                  <strong>{numberFormat(product.price)}</strong>
                                  <button
                                    onClick={() =>
                                      handleRemoveProductFromTheCart(product)
                                    }
                                  >
                                    Remover
                                  </button>
                                </section>
                              </Product>
                            )
                          })}
                        </main>

                        <footer>
                          <div>
                            <p>Quantidade</p>
                            <span>{cart.length} items</span>
                            <strong>Valor</strong>
                            <h3>{priceReduce(cart)}</h3>
                          </div>

                          <Button
                            title={`${
                              cart.length <= 0
                                ? 'Você não possui nenhum item no carrinho'
                                : 'Comprar'
                            }`}
                            onClick={handleConfirmPurchase}
                            disabled={cart.length <= 0}
                          />
                        </footer>
                      </ContentContainer>
                    )}
                  </animated.div>
                </Content>
              </Dialog.Portal>
            </>
          ) : null,
        )}
      </Dialog.Root>
    </>
  )
}
