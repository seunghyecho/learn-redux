import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from '../modules/saga/users';
import {usePreloader} from "../lib/PreloadContext";
import User from "../components/User";

const UserContainer = ({id}) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    usePreloader(() => dispatch(getUser(id)));

    useEffect(() => {
        if (user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    }, [dispatch, id, user]);

    if (!user) return null;
    return <User user={user}/>
}

export default UserContainer;