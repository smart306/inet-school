import GalleryPage from "@/components/gallery";
import { getGallery } from "@/lib/actions/gallery-page";

export default async function GalleryMain(){
    const { gallery } = await getGallery(); 

    return (
      <div>
        <GalleryPage gallery={gallery}/>
      </div>
    );
}