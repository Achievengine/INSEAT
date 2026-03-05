import { API_BASE_URL } from '../config/api';

export type PricingCurrency = 'USD' | 'AED' | 'ETB';
export type SubscriptionTier = 'entry' | 'mid' | 'custom';

export interface PlanPricingPoint {
  monthly: number;
  annualMonthly: number;
  annualTotal: number;
}

export interface PublicSubscriptionPlan {
  tier: SubscriptionTier;
  planName: string;
  description: string;
  billingModel: 'automated' | 'sales_contact';
  annualDiscountPercent: number;
  pricing: Record<PricingCurrency, PlanPricingPoint>;
}

export interface PublicSubscriptionConfig {
  currencies: PricingCurrency[];
  plans: PublicSubscriptionPlan[];
}

const defaultConfig: PublicSubscriptionConfig = {
  currencies: ['USD', 'AED', 'ETB'],
  plans: [],
};

export const getPublicSubscriptionConfig = async (): Promise<PublicSubscriptionConfig> => {
  try {
    const response = await fetch(`${API_BASE_URL}/businesses/subscription-config/public`);
    const payload = await response.json();
    const data = payload?.data as PublicSubscriptionConfig | undefined;
    if (!payload?.success || !data?.plans?.length) {
      return defaultConfig;
    }
    return data;
  } catch (error) {
    console.warn('[subscriptionConfigService] Falling back to default config', error);
    return defaultConfig;
  }
};

export const getDefaultSubscriptionConfig = (): PublicSubscriptionConfig => defaultConfig;
