import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../constants/Selectors";
import { logOut } from "../../store/slices/authSlice";
import { useRouter } from "next/router";
import Button from "../../components/common/Button/Button";
import { cookieHelper } from "../../helpers/cookies/cookies";

const Profile = () => {
  const { user, token } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { delete: deleteCookie } = cookieHelper();
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Welcome {user?.email}
        </h5>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Logged In
        </div>
      </div>

      <Button
        size="sm"
        type="submit"
        color={"black"}
        buttonType={"button"}
        handleButtonClick={(e) => {
          dispatch(logOut());
          deleteCookie("access-token");
          router.push("/");
        }}
      >
        Log Out
      </Button>
    </div>
  );
};
export default Profile;
