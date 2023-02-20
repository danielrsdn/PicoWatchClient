import "./User.css";
import { useSelector } from "react-redux";
import UserInfo from './UserInfo';


const selectUserInfoLoading = (state) => {return state.user.fetchUserLoading};
const selectUserInfoError = (state) => {return state.user.fetchUserError};
const selectUserInfo = (state) => {return state.user.user};

const User = () => {
    const userInfo = useSelector((state) => selectUserInfo(state));
    const fetchUserInfoLoading = useSelector((state) => selectUserInfoLoading(state));
    const fetchUserInfoError = useSelector((state) => selectUserInfoError(state));

    return (
       <div className="User">
            {fetchUserInfoLoading && "Loading"}
            {!fetchUserInfoLoading && <UserInfo userInfo={userInfo} ></UserInfo>}
       </div>
    );
};

export default User;