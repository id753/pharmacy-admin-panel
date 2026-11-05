import Logo from '../../components/Logo/Logo';
import css from './LoginPage.module.css';
import { useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.pageWrapper}>
      <div className={css.container}>
        <div className={css.logoContainer}>
          <Logo />
          <h1 className={css.title}>E-Pharmacy</h1>
        </div>

        <div className={css.contentContainer}>
          <div className={css.infoWrapper}>
            <p className={css.description}>
              Your medication, delivered Say goodbye to all
              <span className={css.accent}> your healthcare </span>
              worries with us
            </p>
          </div>
          <div className={css.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
              <div className={css.fieldWrapper}>
                <input
                  {...register('email', {
                    // required: 'Email is required',
                    // pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                  placeholder="Email address"
                  className={css.input}
                />
                <p className={css.errorText}>{errors.email?.message}</p>
              </div>
              <div className={css.fieldWrapper}>
                <input
                  {...register('password', {
                    // required: 'Password is required',
                    // minLength: {
                    // value: 6,
                    // message: 'Password must be at least 6 characters',
                    // },
                  })}
                  type="password"
                  placeholder="Password"
                  className={css.input}
                />
                <p className={css.errorText}>{errors.password?.message}</p>
              </div>
              <button className={css.submitBtn} type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
