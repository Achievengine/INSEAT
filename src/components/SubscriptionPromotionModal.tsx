import { useEffect, useMemo, useRef, useState } from 'react';
import { subscriptionPromotionService, SubscriptionPromotionCampaign } from '../services/subscriptionPromotionService';

const STORAGE_KEY = 'inseat_subscription_promo_last_seen';
const DISPLAY_COOLDOWN_HOURS = 24;
const FALLBACK_IMAGE =
  'https://plus.unsplash.com/premium_photo-1681293215212-2a7f852e44ee?fm=jpg&q=80&w=1600&auto=format&fit=crop';

const shouldSkipDisplayByCooldown = (): boolean => {
  const lastSeen = localStorage.getItem(STORAGE_KEY);
  if (!lastSeen) {
    return false;
  }

  const lastSeenDate = new Date(lastSeen);
  if (Number.isNaN(lastSeenDate.getTime())) {
    return false;
  }

  const elapsedHours =
    (Date.now() - lastSeenDate.getTime()) / (1000 * 60 * 60);

  return elapsedHours < DISPLAY_COOLDOWN_HOURS;
};

const buildDiscountLabel = (promotion: SubscriptionPromotionCampaign): string => {
  if (promotion.promotionType === 'percentage') {
    return `${promotion.discountValue}% OFF`;
  }
  if (promotion.promotionType === 'flat_amount') {
    return `$${promotion.discountValue} OFF`;
  }
  if (promotion.promotionType === 'extended_trial_days') {
    return `+${promotion.discountValue} Trial Days`;
  }
  return 'New Feature';
};

const resolveOrientation = (
  promotion: SubscriptionPromotionCampaign | null
): 'portrait' | 'landscape' | 'square' => {
  if (!promotion?.imageWidth || !promotion?.imageHeight) {
    return 'landscape';
  }
  const ratio = promotion.imageWidth / promotion.imageHeight;
  if (ratio < 0.85) return 'portrait';
  if (ratio > 1.2) return 'landscape';
  return 'square';
};

const buildCtaUrl = (promotion: SubscriptionPromotionCampaign): string => {
  const adminUrl = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173';
  const plan = promotion.ctaPlan && promotion.ctaPlan !== 'all' ? promotion.ctaPlan : 'mid';

  if (promotion.ctaUrl && promotion.ctaUrl.trim()) {
    return promotion.ctaUrl.trim();
  }

  const promoPart = promotion.discountCode
    ? `&promo=${encodeURIComponent(promotion.discountCode)}`
    : '';

  return `${adminUrl}/register?plan=${plan}${promoPart}`;
};

const SubscriptionPromotionModal = () => {
  const [campaign, setCampaign] = useState<SubscriptionPromotionCampaign | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }
    initializedRef.current = true;

    const run = async () => {
      if (typeof window === 'undefined') {
        return;
      }

      if (shouldSkipDisplayByCooldown()) {
        return;
      }

      const promotion = await subscriptionPromotionService.getActiveModalPromotion('landing_site');
      if (!promotion) {
        return;
      }

      setCampaign(promotion);
      setIsOpen(true);
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    };

    run();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const ctaUrl = useMemo(() => {
    if (!campaign) return '#';
    return buildCtaUrl(campaign);
  }, [campaign]);

  const discountLabel = useMemo(() => {
    if (!campaign) return '';
    return buildDiscountLabel(campaign);
  }, [campaign]);

  const orientation = useMemo(() => resolveOrientation(campaign), [campaign]);

  const modalMaxWidthClass = useMemo(() => {
    if (orientation === 'portrait') return 'max-w-3xl';
    if (orientation === 'square') return 'max-w-[58rem]';
    return 'max-w-5xl';
  }, [orientation]);

  const gridClass = useMemo(() => {
    if (orientation === 'portrait') return 'grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]';
    if (orientation === 'square') return 'grid grid-cols-1 md:grid-cols-[1fr_1fr]';
    return 'grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr]';
  }, [orientation]);

  const imageHeightClass = useMemo(() => {
    if (orientation === 'portrait') return 'min-h-[320px] md:min-h-[520px]';
    if (orientation === 'square') return 'min-h-[250px] md:min-h-[390px]';
    return 'min-h-[230px] md:min-h-[360px]';
  }, [orientation]);

  if (!campaign || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1400] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-[1px]">
      <div className={`relative w-full ${modalMaxWidthClass} overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_-20px_rgba(0,0,0,0.45)]`}>
        <button
          aria-label="Close promotion"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/85 text-black transition hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={gridClass}>
          <div className="relative bg-[#050505] px-6 py-7 text-white md:px-8 md:py-9">
            <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Limited Time Offer
              </p>
              <h2 className="text-2xl font-display font-bold leading-tight md:text-3xl">
                {campaign.headline || campaign.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                {campaign.description}
              </p>

              <div className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white">
                {discountLabel}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {campaign.discountCode ? (
                  <span className="rounded-full border border-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/90">
                    Code: {campaign.discountCode}
                  </span>
                ) : null}
                <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                  {campaign.targetTier === 'all' ? 'All Plans' : `${campaign.targetTier.toUpperCase()} Plan`}
                </span>
              </div>

              <a
                href={ctaUrl}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition hover:bg-white/90"
              >
                {campaign.ctaText || 'Start Now'}
              </a>
            </div>
          </div>

          <div className={`relative bg-black ${imageHeightClass}`}>
            <img
              src={campaign.imageUrl || FALLBACK_IMAGE}
              alt={campaign.title}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPromotionModal;
