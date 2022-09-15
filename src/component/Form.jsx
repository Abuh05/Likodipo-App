import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your fullName is Required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    });



    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const Submit = (data) => {
        console.log(data)
    }
  return ( 
    <div className='App'>
    <form className='form' onSubmit={handleSubmit(Submit)}>
        <input type="text" placeholder='Full Name' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='Email...' {...register("email")}/>
        <input type="number" placeholder='Age...' {...register("age")} />
        <input type="password" placeholder='Password...' {...register("password")}/>
        <input type="password" placeholder='Confirm Password...' {...register("confirmPassword")}/>
        <input type="submit" className='submit' />
    </form>
    </div>
  )
}

export default Form