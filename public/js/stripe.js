/* eslint-disable */
import { showAlert } from './alerts';

import axios from 'axios';

const stripe = Stripe(
  'pk_test_51KICvAGjIW2PDq0gE47AhSFEfFF0f3lus9aXrWisosTxLKiAqIi5jhQKao1X1ApA6D0O9RATQUNZxnsSFzxQW5kH00JtYPUCFw'
);

export const bookTour = async tourId => {
  // get checkout session from API
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
    console.log(session);
  } catch (error) {
    showAlert('error', err);
  }

  // create checkout
};
