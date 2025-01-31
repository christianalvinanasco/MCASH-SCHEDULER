import React from "react";

type Props = {
    title:string;
    onClick:()=>void
}
export default function Button(props:Props){
    const {title,onClick} = props;
    return <button onClick={()=>onClick()} className=" bg-green-600 text-white px-4 py-2 rounded-md">{title}</button>
}