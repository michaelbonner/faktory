import { useNextSanityImage } from "@fevernova90/next-sanity-image";
import Image from "next/image";
import client from "../client";

function SanityImage({ image, ...rest }) {
  const imageProps = useNextSanityImage(client, image);

  if (rest.layout === "fill") {
    delete imageProps.height;
    delete imageProps.width;
  }

  const alt =
    image?.alt || image?.title || image?.description || "website image";

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
      alt={alt}
      {...rest}
    />
  );
}

export default SanityImage;
