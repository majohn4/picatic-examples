import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import Button from '../../Button'

class StripeCheckoutForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault()

    const { checkoutPayment, stripe } = this.props
    stripe.createToken().then(payload => checkoutPayment(payload))
  }

  render() {
    const styles = {
      form: {
        width: '480px',
        margin: '20px auto'
      }
    }
    return (
      <section>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <CardElement
            style={{ base: { fontSize: '18px' } }}
            hidePostalCode={true}
          />
        </form>
        <Button label='Continue' handleClick={this.handleSubmit} />
      </section>
    )
  }
}

export default injectStripe(StripeCheckoutForm)
