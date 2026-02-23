type MetaTagConfig = {
  name?: string;
  property?: string;
  content: string;
};

type DocumentMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  robots?: string;
  twitterCard?: string;
  siteName?: string;
};

const ensureMetaTag = ({ name, property, content }: MetaTagConfig) => {
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    if (name) tag.name = name;
    if (property) tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

const ensureLinkTag = (rel: string, href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.rel = rel;
    document.head.appendChild(tag);
  }

  tag.href = href;
};

export const setDocumentMeta = ({
  title,
  description,
  url,
  image,
  type = 'website',
  robots = 'index,follow',
  twitterCard = 'summary_large_image',
  siteName = 'Inseat'
}: DocumentMeta) => {
  document.title = title;

  ensureMetaTag({ name: 'description', content: description });
  ensureMetaTag({ name: 'robots', content: robots });
  ensureMetaTag({ property: 'og:type', content: type });
  ensureMetaTag({ property: 'og:title', content: title });
  ensureMetaTag({ property: 'og:description', content: description });
  ensureMetaTag({ property: 'og:site_name', content: siteName });
  ensureMetaTag({ name: 'twitter:card', content: twitterCard });
  ensureMetaTag({ name: 'twitter:title', content: title });
  ensureMetaTag({ name: 'twitter:description', content: description });

  if (url) {
    ensureMetaTag({ property: 'og:url', content: url });
    ensureLinkTag('canonical', url);
  }

  if (image) {
    ensureMetaTag({ property: 'og:image', content: image });
    ensureMetaTag({ name: 'twitter:image', content: image });
  }
};

export const setJsonLd = (id: string, data: Record<string, unknown>) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);

  return () => {
    script?.remove();
  };
};
