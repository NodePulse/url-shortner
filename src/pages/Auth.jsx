import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import Login from "../components/Login";
import Register from "../components/Register";
import { UrlState } from "../context";
import { useEffect } from "react";

const Auth = () => {
    const [serachparams] = useSearchParams();
    const longLink = serachparams.get("createNew")
    const navigate = useNavigate()

    const { isAuthenticated, loading } = UrlState()
    useEffect(() => {
        if (isAuthenticated && !loading) {
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`)
        }
    }, [isAuthenticated, loading])

    return (
        <div className="mt-20 flex flex-col items-center gap-10">
            <h1 className="text-5xl font-extrabold">
                {longLink
                    ? "Hold up! Let's login first..."
                    : "Login / register"}
            </h1>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="register">
                    <Register />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Auth;
