import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails(){
    const {id} = useParams();
    const career  = useLoaderData();

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location {career.location}</p>
            <div className="details">
                LEu anim mollit velit laborum mollit ea excepteur occaecat ea amet excepteur. Ut dolor magna minim non minim ipsum excepteur et. Deserunt dolor nostrud occaecat elit adipisicing minim veniam ea consequat incididunt ad minim exercitation. Ipsum do sit sit consequat laborum enim veniam incididunt consectetur ipsum amet aute nostrud veniam. Excepteur consequat reprehenderit duis quis aliqua aliqua id cupidatat nisi culpa. Tempor consequat nisi enim nostrud ullamco eu voluptate duis ex aliquip.
            </div>
        </div>
    )
}

export const careerDetailsLoader = async({params}) =>{

    const  {id} = params;
   const res = await fetch('http://localhost:4000/careers/'+id);

    return res.json()
}