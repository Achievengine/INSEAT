import { API_BASE_URL } from '../config/api';

export type SubscriptionPromotionType =
  | 'percentage'
  | 'flat_amount'
  | 'extended_trial_days'
  | 'feature_spotlight';
export type SubscriptionPromotionDisplayTarget = 'landing_site' | 'admin_portal';

export interface SubscriptionPromotionCampaign {
  _id: string;
  title: string;
  headline?: string;
  description: string;
  occasion: string;
  promotionType: SubscriptionPromotionType;
  discountValue: number;
  discountCode?: string;
  targetTier: 'all' | 'entry' | 'mid' | 'custom';
  ctaText: string;
  ctaPlan: 'all' | 'entry' | 'mid' | 'custom';
  ctaUrl?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  displayTargets?: SubscriptionPromotionDisplayTarget[];
  showAsModal: boolean;
  isActive: boolean;
  startDate: string;
  endDate: string;
  priority: number;
}

interface ApiResponse {
  success: boolean;
  data: SubscriptionPromotionCampaign | null;
}

export const subscriptionPromotionService = {
  async getActiveModalPromotion(
    target: SubscriptionPromotionDisplayTarget = 'landing_site'
  ): Promise<SubscriptionPromotionCampaign | null> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/subscription-promotions/public/modal?target=${target}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      const payload = (await response.json()) as ApiResponse;
      return payload?.success ? payload.data : null;
    } catch (error) {
      console.error('Failed to fetch subscription promotion modal:', error);
      return null;
    }
  },
};
