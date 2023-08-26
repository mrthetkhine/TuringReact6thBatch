"use client";
import {authSlice, useDispatch} from "@/lib/redux";
import {useRouter} from "next/navigation";

export default function LogoutPage()
{
    const dispatch = useDispatch();
    const router = useRouter();
    const btnLogoutHandler = ()=>{
        console.log('Logout');
        dispatch(authSlice.actions.logout());
        router.push('/');
    };
    return (<div>
        <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={btnLogoutHandler}
        >
            Logout
        </button>
    </div>);
}