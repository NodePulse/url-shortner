import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import Error from "./Error";
import useFetch from "../hooks/useFetch";
import { login, register } from "../db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "../context";

const Register = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew")
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: null
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const { data, error, loading, fn: fnRegister } = useFetch(register, formData);

    useEffect(() => {
        if (error === null && data) {
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
        }
    }, [loading, error]);

    const handleRegister = async (e) => {
        e.preventDefault()
        setErrors({});
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                    .email("Invalid email")
                    .required("Email is required"),
                password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required"),
                profile_pic: Yup.mixed().required("Profile picture is required")
            });

            await schema.validate(formData, { abortEarly: false });
            await fnRegister();
        } catch (error) {
            const newErrors = {};

            error?.inner.forEach((err) => {
                newErrors[err?.path] = err.message;
            });

            setErrors(newErrors);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Create a new account if you haven&rsquo;t already
                </CardDescription>
                {error && <Error message={error.message} />}
            </CardHeader>
            <form onSubmit={handleRegister} className="flex flex-col gap-y-2">
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Input
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.name && <Error message={errors.name} />}
                    <div className="space-y-1">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.email && <Error message={errors.email} />}
                    <div className="space-y-1">
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.password && <Error message={errors.password} />}
                    <div className="space-y-1">
                        <Input
                            name="profile_pic"
                            type="file"
                            accept="image/*"
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.profile_pic && <Error message={errors.profile_pic} />}
                </CardContent>
                <CardFooter>
                    <Button type="submit">
                        {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Create Account"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default Register;
