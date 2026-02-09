// Subscription checkout URLs configuration
// Both subscription plans now use Cash App for payment
// Boostly only links out to Cash App—we do not process, collect, or store payments.

import { cashAppPaymentUrl } from './cashAppLinks';

export const subscriptionLinks = {
  monthly: cashAppPaymentUrl, // Monthly subscription ($6.00/month) - paid via Cash App
  annual: cashAppPaymentUrl, // Annual subscription ($15.99/year) - paid via Cash App
};
