import {useParams} from "react-router-dom";

export function EditStudent(){
    const {id} = useParams();
    console.log(id);
    return (
        <>
            <h1>Edit Student</h1>
        </>
    )
}