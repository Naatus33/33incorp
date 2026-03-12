import FazendaMedeirosClient from './FazendaMedeirosClient';
import { getFazendaMedeirosGalleryImages } from './getGallery';

export default function FazendaMedeirosPage() {
  const galleryImages = getFazendaMedeirosGalleryImages();
  return <FazendaMedeirosClient galleryImages={galleryImages} />;
}
