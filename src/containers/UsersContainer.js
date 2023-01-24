import {useEffect} from "react";
import Users from "../components/Users";
import {connect} from "react-redux";
import {getUsers} from "../modules/users";
import {Preloader} from "../lib/PreloadContext";

const UsersContainer = ({users, getUsers}) => {
    //CSR - 컴포넌트 마운트될 때 호출
    //SSR - useEffect 작동 안함

    useEffect(() => {
        // PreloadContext 실행으로 자료가 이미 있다면 또 요청하지 않음
        if (users) return;
        getUsers();
    }, [getUsers, users]);

    return (
        <>
            <Users users={users}/>
            {/* PreloadContext 완료 아니면 getUsers 라는 비동기 작업을 실행하고 */}
            {/* 결과를 PreloadContext.promises에 적재 */}
            {/* 무조건 null 리턴하여 화면에 보이지 않음 */}
            <Preloader resolve={getUsers}/>
        </>

    );
}

export default connect(
    state => ({
        users: state.users.users
    }),
    {
        getUsers
    }
)(UsersContainer);