import '../Pages/properties.css';
import { useFormik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup';


const Contact = () => {

  let formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      message:''
    },

    onSubmit:(values) =>{
      console.log(values);
      values = ''
    },

    validationSchema: yup.object({
      name:yup.string().required('This field is required').min(3, 'Must be greater than 3 characters'),

      email:yup.string().email('Must be a valid email address'),

      message: yup.string().required('This field is required').min(10, 'Please, describe better how we can help you')

    })
    // validate:(values)=>{
    //   let errors = {}

    //   if (values.name == '') {
    //     errors.name = 'This field is required'
    //   }else if(values.name.length < 3){
    //     errors.name = 'Must be greater than 3 characters'
    //   }

    //   if (values.email == '') {
    //     errors.email = 'This field is required'
    //   }else if(!values.email.includes('@')){
    //     errors.email = 'Must be a valid email'
    //   }

    //   if (values.message == '') {
    //     errors.message = 'This field is required'
    //   }else if(values.message.length < 10){
    //     errors.message = 'Please, describe better how we can help you'
    //   }

    //   return errors
    // }

  })

  // console.log(formik);  
  // console.log(formik.values);  
  
  return (
    <>

<div className='contact_wrapper'>

<div className="sayHello">
  
  <div>
  <h2>Say Hello</h2>
  <p>
  Do you want to make an enquiry, a complaint or you just want to know more about us? Then you’re on the right page. Send us a message right here or contact us on any of the channels lised below.
  </p>
  </div>

  <div>
    <img src="https://landwey.ng/wp-content/uploads/2019/08/get-in-touch.png" alt="" />
  </div>
</div>

<div className="sayHello">
  
  <div>
    <div>
        <h2>Drop a message</h2>
        <p>
            Feel free to reach out by leaving us a message below. We promise to get back to you as soon as possible.
        </p>
    </div>

    <form onSubmit={formik.handleSubmit}>

    <div>
    <div className="mb-3 ">

        <div className='my-2'>

        <input name='name' onChange={formik.handleChange} type="text" 
        className={formik.touched.name&&formik.errors.name ? 'form-control is-invalid' : 'form-control'} placeholder="Name" 
        value={formik.values.name} 
        onBlur={formik.handleBlur}   
        required/>

        {formik.touched.name ? <small className='text-danger'>{formik.errors.name}</small> : ''}

        </div>

        <div className='my-3'>
        <input name='email' onChange={formik.handleChange} type="email" className={formik.touched.email&&formik.errors.email ? 'form-control is-invalid' : 'form-control'} placeholder="email" 
        value={formik.values.email} onBlur={formik.handleBlur}
         required/>
        {formik.touched.email ? <small className='text-danger'>{formik.errors.email}</small> : ''}
        </div>
    </div>


    <div className="mb-3">

        <textarea name='message' onChange={formik.handleChange} className={formik.touched.message&&formik.errors.message ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlTextarea1" rows="3" placeholder='Type your message' value={formik.values.message}
        onBlur={formik.handleBlur} required></textarea>
        {formik.touched.message && <small className='text-danger'>{formik.errors.message}</small>}
    </div>

    <div className="mb-3">

        <button type='submit' className='btn'>Send message</button>
    </div>

    </div>
    </form>

  </div>

  <div>
    <div>
        <p>
            {/* <FontAwesomeIcon icon="fa-thin fa-phone" /> */}
            +2349033179950
        </p>
    </div>

    <div>
        <p>
            {/* <FontAwesomeIcon icon="fa-thin fa-phone" /> */}
            KM 12, Lekki-Epe Express Way, Sangotedo Ajah Lagos
        </p>
    </div>

    <div>
        <p>
            {/* <FontAwesomeIcon icon="fa-thin fa-phone" /> */}
            olacandid@gmail.com
        </p>
    </div>

    <div>
        <p>
            {/* <FontAwesomeIcon icon="fa-thin fa-phone" /> */}
            +2349033179950
        </p>
    </div>
  </div>
</div>

</div>

    </>
  )
}

export default Contact