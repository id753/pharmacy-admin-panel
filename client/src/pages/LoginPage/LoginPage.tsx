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
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div>
      <div className={css.logoContainer}>
        <Logo />
        <h1 className={css.title}>E-Pharmacy</h1>
      </div>

      <div>
        <div>
          <p>
            Your medication, delivered Say goodbye to all your healthcare
            worries with us
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} placeholder="Email address" />
            <p>{errors.email?.message}</p>
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
