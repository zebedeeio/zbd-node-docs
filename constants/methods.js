export const methods = [
  {
    name: 'createCharge',
    entity: 'Charge',
    description:
      'Creates a new Charge / Payment Request in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        extra: 'required',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'expiresIn',
        description: 'Time until Charge expiration -> in seconds.',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST Charge updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/charges/create',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#createcharge',
      },
    ],
  },
  {
    name: 'getCharge',
    entity: 'Charge',
    description:
      'Retrieves all information relating to a specific Charge / Payment Request.',
    params: [
      {
        name: 'chargeId',
        extra: 'required',
        description: 'The ID of the Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/charges/get',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getcharge',
      },
    ],
  },
  {
    name: 'decodeCharge',
    entity: 'Charge',
    description:
      "Decodes a specific Charge / Payment Request / Invoice from Bitcoin's Lightning Network. This API returns all of the individual properties for the Charge, including the amount, description, expiration, and more.",
    params: [
      {
        name: 'invoice',
        extra: 'required',
        description:
          'The code for the Charge / Payment Request / Lightning Network invoice (e.g. lnbc10m.....61hj).',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/charges/decode',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#decodecharge',
      },
    ],
  },
  {
    name: 'createStaticCharge',
    entity: 'Static Charge',
    description:
      'Static Charges are static Payment Requests in the Bitcoin Lightning Network. Whereas Charges create fixed-amount and single-use Payment Requests that expire, Static Charges provide you a lot more flexibility & capabilities, including variable amounts, multi-use, success messages, and slots.',
    params: [
      {
        name: 'minAmount',
        extra: 'required',
        description:
          'Minimum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'maxAmount',
        extra: 'required',
        description:
          'Maximum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        extra: 'required',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'successMessage',
        description: 'Message displayed to the payer AFTER payment settles.',
      },
      {
        name: 'allowedSlots',
        description: 'Number of payments this Static Charge can accept',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/static-charges/create',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#createstaticcharge',
      },
    ],
  },
  {
    name: 'getStaticCharge',
    entity: 'Static Charge',
    description:
      'Retrieves all information relating to a specific Static Charge.',
    params: [
      {
        name: 'staticChargeId',
        extra: 'required',
        description: 'The ID of the Static Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/static-charges/get',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getstaticcharge',
      },
    ],
  },
  {
    name: 'updateStaticCharge',
    entity: 'Static Charge',
    description:
      'Perform updates to any of the allowed properties of a Static Charge.',
    params: [
      {
        name: 'minAmount',
        description:
          'Minimum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'maxAmount',
        description:
          'Maximum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'successMessage',
        description: 'Message displayed to the payer AFTER payment settles.',
      },
      {
        name: 'allowedSlots',
        description: 'Number of payments this Static Charge can accept',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/static-charges/update',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#updatestaticcharge',
      },
    ],
  },
  {
    name: 'createWithdrawalRequest',
    entity: 'Withdrawal Request',
    description:
      'A Withdrawal Request is a QR code that allows someone to scan and receive Bitcoin (e.g. Withdrawals).',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description:
          'The amount for the Withdrawal Request -> in millisatoshis.',
      },
      {
        name: 'expiresIn',
        description: 'Time until Withdrawal Request expiration -> in seconds.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Withdrawal Request (visible to payer).',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description:
          'The endpoint ZBD will POST Withdrawal Request updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/withdrawal-requests/create',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#createwithdrawalrequest',
      },
    ],
  },
  {
    name: 'getWithdrawalRequest',
    entity: 'Withdrawal Request',
    description: 'Retrieves details about a specific Withdrawal Request.',
    params: [
      {
        name: 'withdrawalRequestId',
        extra: 'required',
        description: 'The ID of the Withdrawal Request.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/withdrawal-requests/get',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getwithdrawalrequest',
      },
    ],
  },
  {
    name: 'sendLightningAddressPayment',
    entity: 'Lightning Address',
    description:
      'Send Bitcoin payments directly to a Lightning Address. A Lightning Address is an internet identifier (akin to an email address -- andre@zbd.gg) that anyone can send Bitcoin Lightning Network payments to.',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'lnAddress',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'comment',
        description: 'Note or description of this Payment.',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/lightning-address/send-payment',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#sendlightningaddresspayment',
      },
    ],
  },
  {
    name: 'validateLightningAddress',
    entity: 'Lightning Address',
    description:
      "Not all internet identifiers are Lightning Addresses / compatible with the Lightning Address protocol. Use this endpoint in order to validate whether a user's entered Lightning Address is valid.",
    params: [
      {
        name: 'Lightning Address',
        extra: 'required',
        description: 'The address attempted to be verified.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/lightning-address/validate',
      },
    ],
  },
  {
    name: 'createChargeFromLightningAddress',
    entity: 'Lightning Address',
    description:
      "Generates a Bitcoin Lightning Charge / Payment Request for a given Lightning Address destination. Depending on your system's configuration or your product's UX, you may need the ability to generate Charges for specific users using a different provider than ZBD.",
    params: [
      {
        name: 'lnAddress',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description: 'Note or comment of this Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/lightning-address/create-charge',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#createchargefromlightningaddress',
      },
    ],
  },
  {
    name: 'getWallet',
    entity: 'Wallet',
    description: 'Retrieves the total balance of a given Project Wallet.',
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/wallet/get',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getwallet',
      },
    ],
  },
  {
    name: 'internalTransfer',
    entity: 'Wallet',
    description:
      'Initiates a transfer of funds between two Project Wallets you own.',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount to be transferred -> in millisatoshis.',
      },
      {
        name: 'receiverWalletId',
        extra: 'required',
        description: 'The Wallet ID of the recipient Project.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/internal-transfer/initiate',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#internaltransfer',
      },
    ],
  },
  {
    name: 'sendKeysendPayment',
    entity: 'Keysend',
    description:
      'This endpoint exposes the ability to make payment directly to a Lightning Network node Public Key, without the need for a Payment Request / Charge.',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'pubkey',
        extra: 'required',
        description: 'The Public Key for the destination Lightning node.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST updates to.',
      },
      {
        name: 'internalId',
        description: 'Open metadata object property.',
      },
      {
        name: 'tlvRecords',
        description: 'TLV data records.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/keysend/send-payment',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#sendkeysendpayment',
      },
    ],
  },
  {
    name: 'sendPayment',
    entity: 'Payment',
    description:
      'Pays a Charge / Payment Request in the Bitcoin Lightning Network.',
    params: [
      {
        name: 'invoice',
        extra: 'required',
        description: 'Lightning Network Payment Request / Charge.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment.',
      },
      {
        name: 'amount',
        description:
          'Amount to be paid to this Charge/Invoice -> in millisatoshis (only valid if Amountless Invoice).',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/payments/send',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#sendpayment',
      },
    ],
  },
  {
    name: 'getPayment',
    entity: 'Payment',
    description: 'Retrieves all the information related to a specific Payment.',
    params: [
      {
        name: 'paymentId',
        extra: 'required',
        description: 'The ID of the Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/payments/get',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getpayment',
      },
    ],
  },
  {
    name: 'sendGamertagPayment',
    entity: 'ZBD Gamertag',
    description:
      "This API endpoint is used to send Bitcoin payments directly to a user's ZBD Gamertag.",
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'gamertag',
        extra: 'required',
        description: 'Destination ZBD Gamertag.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment (visible to recipient).',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/gamertag/send-payment',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#sendgamertagpayment',
      },
    ],
  },
  {
    name: 'getGamertagTransaction',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD Gamertag when provided with a ZBD User's ID.",
    params: [
      {
        name: 'transactionId',
        extra: 'required',
        description: 'The ZBD Gamertag Payment Transaction ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/gamertag/get-payment',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getgamertagtransaction',
      },
    ],
  },
  {
    name: 'getUserIdByGamertag',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD User's ID when provided with a ZBD Gamertag.",
    params: [
      {
        name: 'gamertag',
        extra: 'required',
        description: 'The ZBD Gamertag of the ZBD user.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/gamertag/get-userid',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getuseridbygamertag',
      },
    ],
  },
  {
    name: 'getGamertagByUserId',
    entity: 'ZBD Gamertag',
    description:
      "Invoked when the app first loads. If a plugin reloads, it's invoked again with the existing app.",
    params: [
      {
        name: 'userId',
        extra: 'required',
        description: 'The specified ZBD User ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/gamertag/get-gamertag',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getgamertagbyuserid',
      },
    ],
  },
  {
    name: 'isSupportedRegion',
    entity: 'Utility',
    description:
      'If you wish to know whether the incoming user request is coming from a region/country where ZBD is supported or not, you can use this simple API endpoint and pass the target IP address as a parameter.',
    params: [
      {
        name: 'IP Address',
        extra: 'required',
        description: 'The IP Address being checked.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/utils/is-supported',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#issupportedregion',
      },
    ],
  },
  {
    name: 'getZBDProdIps',
    entity: 'Utility',
    description:
      "The ZBD API relies on callback URLs for keeping you informed about updates that occur to any Charges, Payments, or Withdrawals you've created. In order to ensure that any incoming callback message is indeed from a trusted ZBD API infrastructure server, we provide this API endpoint for you to know which IP addresses real requests come from.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/utils/prod-ips',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getzbdprodips',
      },
    ],
  },
  {
    name: 'getBtcUsdExchangeRate',
    entity: 'Utility',
    description:
      "Get the latest price for Bitcoin in US Dollars. The exchange rate feed is refreshed every 5 seconds and is based upon a combination of industry-leading partner exchange providers's price feeds.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://zbd.dev/api-reference/utils/btc-usd',
      },
      {
        name: 'View source code example examples',
        url: 'https://github.com/zebedeeio/zbd-node#getbtcusdexchangerate',
      },
    ],
  },
]
