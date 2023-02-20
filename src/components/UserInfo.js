import "./User.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../actions/reducers/reducers";
import { resolveUpdateUserInfoError } from "../actions/action";

const selectUserInfoError = (state) => { return state.user.updateUserError };
const selectUserInfoLoading = (state) => { return state.user.updateUserLoading };

const UserInfo = ({ userInfo }) => {
    const userInfoError = useSelector((state) => selectUserInfoError(state));
    const userInfoLoading = useSelector((state) => selectUserInfoLoading(state));

    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState(userInfo.firstName + " " + userInfo.lastName);
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [enableNotifications, setEnableNotifications] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo.firstName == "") {
            setName("");
        }

        else {
            setName(userInfo.firstName + " " + userInfo.lastName);
        }
    }, [userInfo.firstName, userInfo.lastName]);

    useEffect(() => {
        setUsername(userInfo.username);
    }, [userInfo.username]);

    useEffect(() => {
        setMobile(userInfo.mobile);
    }, [userInfo.mobile]);

    useEffect(() => {
        setEnableNotifications(userInfo.enableNotifications);
    }, [userInfo.enableNotifications]);

    useEffect(() => {
        if (userInfoError === 409) {
            setIsEditMode(true);
        }

    }, [userInfoError]);

    return (
        <div>
            {userInfoLoading && "Processing..."}
            {!userInfoLoading &&
                <div>
                    <div className="Field">
                        <FormGroup>
                            <FormControlLabel disabled={!isEditMode} control={<TextField onChange={(event) => { setName(event.target.value) }} id="fullname-input" label="Full Name" variant="outlined" value={name} error={false} />} />
                        </FormGroup>
                    </div>
                    <div className="Field">
                        <FormGroup>
                            <FormControlLabel disabled={!isEditMode} control={<TextField onChange={(event) => { setUsername(event.target.value) }} id="username-input" label="Username" variant="outlined" value={username} error={userInfoError === 409} helperText={(userInfoError === 409) && "username not available"} />} />
                        </FormGroup>
                    </div>
                    <div className="Field">
                        <FormGroup>
                            <FormControlLabel disabled={!isEditMode} control={<TextField onChange={(event) => { setMobile(event.target.value) }} id="mobile-input" label="Mobile" variant="outlined" value={mobile} error={false} />} />
                        </FormGroup>
                    </div>
                    <div className="Field">
                        <FormGroup>
                            <FormControlLabel disabled={!isEditMode} control={<Switch onChange={(event) => { setEnableNotifications(event.target.checked) }} checked={enableNotifications} />} label="Enable Notifications" />
                        </FormGroup>
                    </div>
                    <div className="FieldM">
                        {isEditMode
                            ? (<>
                                  <Button variant="outlined" size="small" endIcon={<CancelIcon />} onClick={() => {dispatch(resolveUpdateUserInfoError()); setIsEditMode(false);  setName(userInfo.firstName + " " + userInfo.lastName); setUsername(userInfo.username); setMobile(userInfo.mobile); setEnableNotifications(userInfo.enableNotifications);   }}>
                                  Cancel
                                </Button>
                                <Button variant="outlined" size="small" endIcon={<CheckIcon />} onClick={() => { updateUserInfo(dispatch, { username: username, firstName: name.split(" ")[0], lastName: name.split(" ")[1], mobile: mobile, enableNotifications: enableNotifications }); setIsEditMode(false) }}>
                                    Save
                                  </Button>
                                </>
                            )
                            : (<Button variant="outlined" size="small" endIcon={<EditIcon />} onClick={() => { setIsEditMode(true) }}>
                                Edit
                            </Button>
                            )
                        }
                    </div>
                    <div className="FieldM">
                        <Button variant="outlined" size="small" endIcon={<EditIcon />}>
                            Change Password
                        </Button>
                    </div>
                </div>
            }

        </div>

    );
}

export default UserInfo;