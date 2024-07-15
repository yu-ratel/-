import { revalidateTag } from 'next/cache';

const onRevalidate = (fetchTag: string) => {
  revalidateTag(fetchTag);
};

export default onRevalidate;
