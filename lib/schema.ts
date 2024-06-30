import z from "zod";
import { DataObjectRegistry } from "./registry";
const {
  payeeAccount: { template: mTemplate },
  merchantCategoryCode,
  countryCode,
  payeeName,
  city,
  postalCode,
  payeeInfoAltLanguage: { template: pInfoTemplate },
  amount,
  currency,
  serviceFee,
  percentageServiceFee,
  additionalDataObjects: { template: aTemplate },
  paymentIntentDataObjects: { template: piTemplate }
} = DataObjectRegistry;

export const DataObjectSchema = z.object({
  version: z.enum(['01']),
  intentType: z.enum(['11', '12']),
  payeeAccount: z.object({
    financialAddress: z.string()
      .min(mTemplate?.financialAddress.minLength!)
      .max(mTemplate?.financialAddress.maxLength!),
  }),
  merchantCategoryCode: z.string()
    .min(merchantCategoryCode.minLength)
    .max(merchantCategoryCode.maxLength)
    .optional(),
  countryCode: z.string().min(countryCode.minLength).max(countryCode.maxLength),
  payeeName: z.string().min(payeeName.minLength).max(payeeName.maxLength),
  city: z.string().min(city.minLength).max(city.maxLength),
  postalCode: z.string().min(postalCode.minLength).max(postalCode.maxLength),
  payeeInfoAltLanguage: z.object({
    localLanguage: z.string()
      .min(pInfoTemplate?.localLanguage.minLength!)
      .max(pInfoTemplate?.localLanguage.maxLength!)
      .optional(),
    payeeName: z.string()
      .min(pInfoTemplate?.payeeName.minLength!)
      .max(pInfoTemplate?.payeeName.maxLength!)
      .optional(),
    city: z.string()
      .min(pInfoTemplate?.city.minLength!)
      .max(pInfoTemplate?.city.maxLength!)
      .optional(),
  }).optional(),
  amount: z.string().min(amount.minLength).max(amount.maxLength),
  currency: z.string().min(currency.minLength).max(currency.maxLength),
  serviceFee: z.string().min(serviceFee.minLength).max(serviceFee.maxLength).optional(),
  percentageServiceFee: z.string()
    .min(percentageServiceFee.minLength)
    .max(percentageServiceFee.maxLength)
    .optional(),
  additionalDataObjects: z.object({
    storeLabel: z.string()
      .min(aTemplate?.storeLabel.minLength!)
      .max(aTemplate?.storeLabel.maxLength!)
      .optional(),
    customerLabel: z.string()
      .min(aTemplate?.customerLabel.minLength!)
      .max(aTemplate?.customerLabel.maxLength!)
      .optional(),
    terminalLabel: z.string()
      .min(aTemplate?.terminalLabel.minLength!)
      .max(aTemplate?.terminalLabel.maxLength!)
      .optional(),
    loyaltyNumber: z.string()
      .min(aTemplate?.loyaltyNumber.minLength!)
      .max(aTemplate?.loyaltyNumber.maxLength!)
      .optional(),
    reference: z.string()
      .min(aTemplate?.reference.minLength!)
      .max(aTemplate?.reference.maxLength!),
    narration: z.string()
      .min(aTemplate?.narration.minLength!)
      .max(aTemplate?.narration.maxLength!),
    channel: z.string()
      .min(aTemplate?.narration.minLength!)
      .max(aTemplate?.narration.maxLength!),
  }),
  paymentIntentDataObjects: z.object({
    token: z.string()
      .min(piTemplate?.token.minLength!)
      .max(piTemplate?.token.maxLength!)
  })
})