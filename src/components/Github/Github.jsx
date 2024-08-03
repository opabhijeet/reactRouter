import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


export default function Github() {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/opabhijeet')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //     }
    // )
    const data = useLoaderData()
    return (
        <div className="bg-gray-500 text-3xl text-green-950 text-center p-4">
            Github folowers: {data.followers}
            <img src={data.avatar_url} alt="avatar" className='m-auto my-5 rounded-full'/>
        </div>
    )
}
export async function getGithubInfo(){
    return await fetch('https://api.github.com/users/opabhijeet')
    .then(response => response.json())
}