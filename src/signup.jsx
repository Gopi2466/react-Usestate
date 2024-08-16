import { useState } from "react";
import { Button } from "./Button";

export function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [Password, setPassword] = useState("")
    function fetchData() {
        console.log(firstName, Password)
    }
    return <>
    <div>username</div>
        <input type="text" placeholder="Name" onChange={(e) => {
            setFirstName(e.target.value);

        }}>

        </input>
        <div>Password</div>
        <input type= "text" placeholder="password" onChange={(e) => {
            setPassword(e.target.value);

        }}></input>
        <Button onClick={fetchData}/>
    </>
}