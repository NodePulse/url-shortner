import { useSearchParams } from "react-router-dom";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
    const [serachparams] = useSearchParams();

    return (
        <div className="mt-36 flex flex-col items-center gap-10">
            <h1 className="text-5xl font-extrabold">
                {serachparams.get("createNew")
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
