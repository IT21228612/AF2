import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user_ReduxSlice';



export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields.'));
      // return setErrorMessage('Please fill out all fields.');
    }
    try {
      dispatch(signInStart());
      // setLoading(true);
      // setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        // return setErrorMessage(data.message);
      }
      // setLoading(false);
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      // setErrorMessage(error.message);
      // setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-xl mx-auto flex-col gap-5'>
        {/* left */}
        <div className='mb-6 flex justify-center'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-5 py-3 bg-indigo-600 rounded-lg text-white'>
              NASA API
            </span>
          </Link>
        </div>
        {/* right */}
  
        <div className='max-w-3xl'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              className='bg-indigo-600 hover:bg-indigo-700'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
          <div className='flex justify-center gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
  
}