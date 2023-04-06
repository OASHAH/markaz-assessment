import { useEffect } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { useRouter as useRoute } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../../components/common/Button/Button";
import TextInputField from "../../../components/common/Input/TextInputField/TextInputField";
import { useForm } from "react-hook-form";
import { cookieHelper } from "../../../helpers/cookies/cookies";
import { setUser } from "../../../store/slices/authSlice";
import { selectPendingAction } from "../../../constants/Selectors";
import { clearPendingActions } from "../../../store/slices/pendingActionsSlice";

interface FormValues {
  email: string;
  password: string;
}
const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { push } = useRouter();
  const router = useRoute();
  const dispatch = useDispatch();
  const { get: getCookie, set: setCookie } = cookieHelper();
  const pendingActions = useSelector(selectPendingAction) as any;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
    defaultValues: { ...initialValues },
    // resolver: zodResolver(schema)
  });

  useEffect(() => {
    return () => {
      if (router.pathname !== "/auth/login") {
        dispatch(clearPendingActions(null));
      }
    };
  }, []);

  const onSubmit = async ({ email, password }) => {
    try {
      //const response = await performLoginApi({ email, password });
      let response = await fetch("/api/login", {
        method: `POST`,
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let status = response.status;
      response = (await response.json()) as any;

      if (status === 200) {
        setCookie("access-token", response?.token);
        dispatch(setUser({ user: response?.user, token: response?.token }));
        if (Array.isArray(pendingActions?.pendingActions?.routerArgs)) {
          push(...pendingActions?.pendingActions?.routerArgs);
        } else {
          push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginCardOuter}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col ml-10 mr-10 mt-3"
      >
        <TextInputField
          registerInputValues={register("email")}
          placeholder="Enter your email"
          label="Email"
          inputId="email"
          inputType="email"
        />
        <TextInputField
          registerInputValues={register("password")}
          placeholder="Enter your password"
          label="Password"
          inputId="password"
          inputType="password"
        />
        <Button size="lg" type="submit" color={""} buttonType={"submit"}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
