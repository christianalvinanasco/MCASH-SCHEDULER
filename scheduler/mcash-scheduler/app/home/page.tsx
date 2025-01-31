"use client"

import Button from "@/component/Button"

export default function Home(){

    function handleClickAbout(){
        window.location.href="/about"
    }
    return (<div>
        <p>Home page</p>
 
        <Button onClick={()=>handleClickAbout()}  title="Go to about" />
    </div>)
}