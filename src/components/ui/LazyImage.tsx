import { useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function LazyImage({ src, alt, className = '', width, height }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-ivory-deep" aria-hidden />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
