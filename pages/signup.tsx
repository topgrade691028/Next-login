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
    userName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required('Required'),
  });
  const registerForm = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
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
          <form className="w-full md:w-2/5 mx-auto mb-60">
            <Input name="userName" placeholder="Walter White" label="UserName" value={registerForm.values.userName} onChange={registerForm.handleChange} />
            <Input type="email" name="email" placeholder="someone@example.com" label="Email Address" value={registerForm.values.email} onChange={registerForm.handleChange} />
            <Input name="password" placeholder="******" label="Password" value={registerForm.values.password} onChange={registerForm.handleChange} />
            <Input name="confirmPassword" placeholder="******" label="Confirm Password" value={registerForm.values.confirmPassword} onChange={registerForm.handleChange} />
            <div className="flex justify-center pt-30">
              <button className="btn btn-secondary btn-md w-full" disabled={!(registerForm.isValid && registerForm.dirty)}>Sign up</button>
            </div>
          </form>
          <div className="w-full md:w-2/5 mx-auto text-center">
            <a href="/signin" className="text-white">Do you have an account? <span className="font-bold">Sign in</span></a>
          </div>
        </div>
      </section>
    </div>
    {/* </Layout> */}
  </>
  );
}
