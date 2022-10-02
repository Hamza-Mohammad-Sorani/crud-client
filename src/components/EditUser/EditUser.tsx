import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Form, Formik } from "formik";
import FormControl from '../Formik/FormControl/FormControl'
import axios from "../../axiosInstance/axios";
import { setLoading, setOverlay } from '../../app/features/mainReducer'
import { useAppDispatch } from '../../app/hooks';
import draw from '../../images/draw.webp';
import { useNavigate, useParams } from 'react-router-dom';

export interface User {
  name: string;
  email: string;
  mobile: string;
}

const EditUser = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const getUser = () => {
    dispatch(setLoading(true));
    axios.get('/' + id )
      .then(res => {
        setUser(res.data[0])
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        dispatch(setLoading(false));
      })
  }
  
  
  useEffect(() => {
    getUser();
  }, []);
  
  const initialValues: User = {
    name: "",
    email: "",
    mobile: "",
  }
  
  const onSubmit = (data: User, actions: any) => {
    dispatch(setLoading(true))
    axios.put("/edit/"+id, data)
      .then(res => {
        const data = JSON.parse(JSON.stringify(res.data));
        setMessage(data.message);
        setSuccess(data.status);
        navigate('/user/list');
      }).catch(err => {
        const data = JSON.parse(JSON.stringify(err.data));
        setMessage(data.message)
        setSuccess(data.status)
        console.log(err);
      }).finally(() => {
        dispatch(setOverlay(false));
      })
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name!"),
    email: Yup.string().email("Enter a valid email").required("Enter your email address!"),
    mobile: Yup.string().required("Enter your mobile!")
  });
  
  return (
    <div className='px-6 h-full text-gray-800'>
      <div className="FormWrapper ">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img
            src={draw}
            className="w-full"
            alt=''
          />
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={ user || initialValues }
          validationSchema={ validationSchema }
          onSubmit={onSubmit}
        >
          {formik => {
            return (
            <Form className='Form' onSubmit={formik.handleSubmit}>
              <h1 className='font-bold text-4xl text-blue-600 mb-2'>Edit User</h1>
              <FormControl
                control='input' type='text'
                name='name' label='user name:' placeholder="user name"
              />
              <FormControl
                control='input' type='email'
                name='email' label='user email:' placeholder="Email address"
              />
              <FormControl
                control='input' type='text'
                name='mobile' label='mobile phone:' placeholder="Mobile phone"
              />
              <button
                  type="submit"
                  disabled={formik.isSubmitting}
                className={["Btn BtnPrimary",formik.isSubmitting ? 'disabled' : ''].join(" ")}
              >Edit</button>
                {message &&
                  <div className={["Alert", success ? "AlertSuccess" : "AlertDanger",].join(" ")}>
                    {message}
                  </div>
                }
            </Form>
          )}}
        </Formik>
      </div>
    </div>
  )
}

export default EditUser