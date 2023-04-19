const imgixURL = process.env.NEXT_PUBLIC_IMGIX_URL;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

export default function imgixLoader({ src, width, quality }) {
  const url = new URL(`${imgixURL}/${normalizeSrc(src)}`);
  const params = url.searchParams;

  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString() || '50');
  }

  return url.href;
}
