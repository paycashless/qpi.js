import z from "zod";
import { DataObjectRegistry } from "./registry";
const {
  merchantAccount: { template: mTemplate },
  merchantCategoryCode,
  countryCode,
  merchantName,
  merchantCity,
  postalCode,
  merchantInfoAltLanguage: { template: mInfoTemplate },
  amount,
  currency,
  serviceFee,
  percentageServiceFee,
  additionalDataObjects: { template: aTemplate }
} = DataObjectRegistry;

export const DataObjectSchema = z.object({
  version: z.enum(['01']),
  intentType: z.enum(['11', '12']),
  merchantAccount: z.object({
    accountNumber: z.string()
      .min(mTemplate?.accountNumber.minLength!)
      .max(mTemplate?.accountNumber.maxLength!),
    nipCode: z.string()
      .min(mTemplate?.nipCode.minLength!)
      .max(mTemplate?.nipCode.maxLength!),
    piftCode: z.string()
      .min(mTemplate?.piftCode.minLength!)
      .max(mTemplate?.piftCode.maxLength!)
      .optional(),
    merchantId: z.string()
      .min(mTemplate?.merchantId.minLength!)
      .max(mTemplate?.merchantId.maxLength!)
      .optional(),
  }),
  merchantCategoryCode: z.string()
    .min(merchantCategoryCode.minLength)
    .max(merchantCategoryCode.maxLength),
  countryCode: z.string().min(countryCode.minLength).max(countryCode.maxLength),
  merchantName: z.string().min(merchantName.minLength).max(merchantName.maxLength),
  merchantCity: z.string().min(merchantCity.minLength).max(merchantCity.maxLength),
  postalCode: z.string().min(postalCode.minLength).max(postalCode.maxLength),
  merchantInfoAltLanguage: z.object({
    localLanguage: z.string()
      .min(mInfoTemplate?.localLanguage.minLength!)
      .max(mInfoTemplate?.localLanguage.maxLength!)
      .optional(),
    merchantName: z.string()
      .min(mInfoTemplate?.merchantName.minLength!)
      .max(mInfoTemplate?.merchantName.maxLength!)
      .optional(),
    merchantCity: z.string()
      .min(mInfoTemplate?.merchantCity.minLength!)
      .max(mInfoTemplate?.merchantCity.maxLength!)
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
      .max(aTemplate?.storeLabel.maxLength!),
    customerLabel: z.string()
      .min(aTemplate?.customerLabel.minLength!)
      .max(aTemplate?.customerLabel.maxLength!),
    terminalLabel: z.string()
      .min(aTemplate?.terminalLabel.minLength!)
      .max(aTemplate?.terminalLabel.maxLength!),
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
    merchantChannel: z.string()
      .min(aTemplate?.narration.minLength!)
      .max(aTemplate?.narration.maxLength!),
  })
})