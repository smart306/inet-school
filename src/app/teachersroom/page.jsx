import TeachersPage from "@/components/teacher/teacher";
import { getTeachers } from "@/lib/actions/teacher-page";

export default async function TeachersMain(){
    const { teachers } = await getTeachers(); 

    return (
      <div>
        <TeachersPage teachers={teachers} />
      </div>
    );
}