type CitedImageProps = { src: string; alt: string; caption: string; href: string }
export function CitedImage({ src, alt, caption, href }: CitedImageProps) {
  return <figure className="cited-image"><img src={asset(src)} alt={alt} loading="lazy" /><figcaption>{caption} · <a href={href} target="_blank" rel="noreferrer">Image source ↗</a></figcaption></figure>
}
import { asset } from '../data/asset'
