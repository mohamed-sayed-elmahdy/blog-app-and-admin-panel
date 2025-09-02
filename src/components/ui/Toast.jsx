import { IoIosCloseCircle } from "react-icons/io";


export default function Toast({ message, type }) {
    const toastType = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'blue',
    }
    return (
            <div className={`relative m-4 p-4 bg-${toastType[type]}-500  flex  items-center justify-between text-white rounded-md`}>
                <button className='absolute top-0 right-0'><IoIosCloseCircle /></button>
                <p>{message}</p>
            </div>
    )
}
