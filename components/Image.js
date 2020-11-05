import React from "react";
import { useImage } from "use-cloudinary";

export default function Image({
  src,
  cloudName,
  publicId,
  transforms,
  width,
  height,
  whileLoading,
  lazy,
  ...props
}) {
  const {
    generateUrl,
    blurredPlaceholderUrl,
    url,
    ref,
    supportsLazyLoading,
    inView,
  } = useImage({
    cloudName: cloudName || null,
    transforms: transforms && { ...transforms },
  });

  React.useEffect(() => {
    if (publicId) {
      generateUrl({
        publicId,
        transformations: {
          ...transforms,
        },
      });
    }
  }, [publicId]);

  // Not using Cloudinary
  if (!publicId) {
    // Try to lazy load all images when { lazy === true }
    if (lazy) {
      return (
        <div
          ref={!supportsLazyLoading ? ref : undefined}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {inView ||
            (supportsLazyLoading && (
              <img src={src} loading="lazy" width="100%" {...props} />
            ))}
        </div>
      );
    } else {
      // Otherwise, just use the Chakra image component
      return <img src={src} {...props} />;
    }

    // Or if you are using Cloudinary, it will move to here
  } else {
    // lazy load w/ a blurred placeholder of the image that's loading
    if (lazy) {
      return (
        <div
          ref={!supportsLazyLoading ? ref : undefined}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background: `no-repeat url(${blurredPlaceholderUrl(
              publicId,
              width,
              height
            )})`,
          }}
        >
          {inView ||
            (supportsLazyLoading && (
              <img src={url} loading="lazy" width="100%" {...props} />
            ))}
        </div>
      );
    } else {
      // Just render the image
      return <img src={url} width="100%" {...props} />;
    }
  }
}
