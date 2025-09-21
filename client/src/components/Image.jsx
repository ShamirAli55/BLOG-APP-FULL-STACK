import { Image } from "@imagekit/react";

const ImageWrapper = ({src,className,h,w,alt}) => {
  return (
        <Image urlEndpoint={import.meta.env.VITE_IK_KIT_ENDPOINT} 
        src={src} className={className} 
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        />
  )
}

export default ImageWrapper