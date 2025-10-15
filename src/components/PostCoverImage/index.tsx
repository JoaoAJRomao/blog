import Link from 'next/link';
import Image from 'next/image';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link href={linkProps.href} className={`w-full h-full overflow-hidden rounded-xl group ${linkProps.className}`}>
      <Image
        {...imageProps}
        className={`w-full h-full object-cover group-hover:scale-115 transition-transform duration-500 ${imageProps.className}`}
        alt={imageProps.alt}
      />
    </Link>
  );
}
