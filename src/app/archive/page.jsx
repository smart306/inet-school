import Archive from "@/components/archive";
import { getArchive } from "@/lib/actions/archive-page";

export default async function ArchiveMain(){
    const { archive } = await getArchive(); 
    return(
        <div>
            <Archive archive={archive}/>
        </div>
    )
}