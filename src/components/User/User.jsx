import { useParams } from "react-router-dom"
export default function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-500 text-3xl text-white text-center p-16'>
            User: {userid}
        </div>
    )
}