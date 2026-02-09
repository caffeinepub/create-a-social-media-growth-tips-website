// Post-payment contact note configuration
// This message tells visitors how to contact you after they complete a Cash App payment.
// Boostly does not process payments—this is just informational guidance for your visitors.
//
// Setup instructions:
// 1. Update the 'message' field with instructions on how visitors should contact you after paying
// 2. Optionally, provide a 'contactUrl' (e.g., contact form, email link, social media DM link)
// 3. Optionally, customize the 'linkLabel' for the contact URL button
//
// Examples:
//   message: "After you pay, send me a DM on Instagram @yourhandle with your payment confirmation."
//   message: "Once payment is complete, email me at hello@example.com with your order details."
//   contactUrl: "https://instagram.com/direct/t/yourhandle" (opens Instagram DMs)
//   contactUrl: "mailto:hello@example.com" (opens email client)
//   linkLabel: "Send me a DM" or "Email me"

export interface PaymentContactNoteConfig {
  message: string;
  contactUrl?: string;
  linkLabel?: string;
}

export const paymentContactNote: PaymentContactNoteConfig = {
  message: 'If you have any questions or need help, please email me at zariyahboostly@gmail.com.',
  contactUrl: 'mailto:zariyahboostly@gmail.com',
  linkLabel: 'Email me',
};

// Helper to check if the contact note is configured
export const isContactNoteConfigured = (): boolean => {
  return paymentContactNote.message.trim() !== '';
};
