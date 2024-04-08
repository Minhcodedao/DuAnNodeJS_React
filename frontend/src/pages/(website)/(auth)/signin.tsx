
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useLocalStorage } from "@/common/hooks/useStorage";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import "../../../App.css"
const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
});

const SignIn = () => {
  const [, setUser] = useLocalStorage("user", {});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/signin",
        formData
      );
      return data;
    },
    onSuccess: (data) => setUser(data),
    onError: (error) => console.log(error),
  });
  const onSubmit = (formData: { email: string; password: string }) => {
    mutate(formData);
  };
  return (
    <>
      <div className="container">
        <div className="Sign_In_Child">
          <div className="close">
            <i className="fa-solid fa-xmark" />
          </div>
          <span>Login</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="use_name">
              <label className="user_name">Username</label>
              <input
                type="text"
                id="use_name"
                {...register("email", { required: true, minLength: 3 })}
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="password">
              <label className="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button className="btn-login">Login</button>
          </form>

          <div className="login_equal_goole">
            <button>facebook</button>
            <button>google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;