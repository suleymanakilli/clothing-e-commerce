import StripeCheckout from 'react-stripe-checkout'

import React from 'react'

export default function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51K0QQoBnqgiUoKAr6WXebd7VovV6kEnJ5ur8YeZsXCcnYV73r6skw8icbYJOFEv6GMizWAXqUCg30txJ5hBFLoMh009JZlsWTy'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
