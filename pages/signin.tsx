import { useState } from 'react';
import Head from 'next/head';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// import { Layout } from '../components/layout/layout';
// import Spinner from '../components/ui-kit/common/spinner';
import { Input } from '../components/ui-kit/input/input';
// import { AddressInput } from '../components/ui-kit/input/address-input';
// import { DropdownSelect } from '../components/ui-kit/input/dropdown-select';
// import { SourceFoundUs } from '../core/types/marketing';
// import { TextArea } from '../components/ui-kit/input/textarea';
// import { enumToOptions } from '../components/ui-kit/utils';
// import { PhoneInput } from '../components/ui-kit/input/phone-input';

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        // TODO: do the API call, show success message box
      } catch (e) {
        // TODO: show error message box
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (<>
    <Head>
      <title>United Hardscapes: --sub title here-- </title>
      <meta name="description" content="<description here>" />
    </Head>
    {/* <Layout> */}
    <div className="h-screen bg-black relative">
      <div className="absolute -top-60 left-250 w-340 h-340 z-0 circle1"></div>
      <div className="absolute top-30 right-350 w-170 h-170 z-0 circle2"></div>
      <section className="pt-120 pb-80 z-10 relative">
        <div className="container mx-auto">
          <h2 className="text-white font-normal mb-15 text-30 text-center">Welcome!</h2>
          <h2 className="text-white font-normal mb-15 text-20 text-center">Let's create your account</h2>
          {/* <Spinner isLoading={isLoading} /> */}
          <div className="w-full md:w-2/5 mx-auto">
            <button className="btn-transparent border border-light-75 rounded-md w-full h-60 mb-20">
              Connect with Google
            </button>
          </div>
          <div className="w-full md:w-2/5 mx-auto">
            <button className="btn-transparent border border-light-75 rounded-md w-full h-60 mb-20">Connect with Facebook</button>
          </div>
          <form className="w-full md:w-2/5 mx-auto mb-60">
            <Input type="email" name="email" placeholder="someone@example.com" label="Email Address" value={loginForm.values.email} onChange={loginForm.handleChange} />
            <Input name="password" placeholder="******" label="Password" value={loginForm.values.password} onChange={loginForm.handleChange} />
            <div className="flex justify-center pt-30">
              <button className="btn btn-secondary btn-md w-full" disabled={!(loginForm.isValid && loginForm.dirty)}>Sign in</button>
            </div>
          </form>
          <div className="w-full md:w-2/5 mx-auto text-center mb-20">
            <a href="/signup" className="text-white">Don't have an account?<span className="font-bold">Create Account</span></a>
          </div>
          <div className="w-full md:w-2/5 mx-auto text-center mb-20">
            <a href="/forgot-password" className="text-white">Forgot Password</a>
          </div>
        </div>
      </section>
    </div>
    {/* </Layout> */}
  </>
  );
}
