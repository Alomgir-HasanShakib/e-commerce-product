import './registration.css'
import bg from '../../assets/LOGINBG.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
const Registration = () => {

    const handleRegistration = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const userName = form.userName.value
        const phoneNumber = form.phoneNumber.value
        const password = form.password.value
        console.log(email, '=====', userName, '========', phoneNumber,'========', password);

    }
  return (
    <div className="flex h-screen justify-center items-center border bg">
        <form className="flex flex-col gap-5 glass_effect bg-transparent p-5 w-96"
        onSubmit={handleRegistration}>
            <input type="text" name='userName' placeholder='User Name' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="email" placeholder='Email' name='email' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="number" name='phoneNumber' placeholder='Phone Number' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="password" name='password' placeholder='Password' className="border border-gray-200 p-3 rounded-xl outline-blue-300 text-blue-500 placeholder:text-gray-300 placeholder:tracking-[3px] bg-transparent"/>
            <input type="submit" value="Registration" className='border border-gray-200 p-3 text-white font-bold text-lg rounded-lg hover:bg-blue-500 ease-linear duration-300 hover:border-blue-500 hover:text-white'/>
            <div className='flex justify-center items-center gap-5 font-bold text-white mt-5  p-2 rounded-full bg-blue-500 duration-300 hover:border hover:bg-transparent'>
                <FaGoogle className='text-white'></FaGoogle> Google
            </div>
            <div>
            <h4  className='text-white'>Already Have an account? <Link to='/Login' className='text-blue-300 font-bold'>Login Here!</Link></h4>
            </div>
        </form>

    </div>
  )
}

export default Registration
