import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState("");
    const navigate = useNavigate();

    const handleShorten = (e) => {
        e.preventDefault();
        if (longUrl) {
            navigate(`/auth?createNew=${longUrl}`);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
                The only URL Shortener <br /> you&rsquo;ll ever need! 👇
            </h2>
            <form
                onSubmit={handleShorten}
                className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
            >
                <Input
                    type="url"
                    placeholder="Enter your loooong URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="h-full flex-1 py-4 px-4"
                />
                <Button type="submit" className="h-full" variant={"destructive"}>
                    Shorten!
                </Button>
            </form>
            <img
                src="https://media.giphy.com/media/3o7aCSPqHXeQ6T8tBC/giphy.gif"
                alt=""
                className="w-full my-11 md:px-11"
            />

            <Accordion type="multiple" className="w-full md:px-11">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        How does the Minifi - URL Shortener work?
                    </AccordionTrigger>
                    <AccordionContent>
                        When you enter a long URL, it will be shortened and a unique short
                        URL will be generated. You can then share this short URL with others
                        or use it in your website.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Do I need an account to use the app?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. Creating an account allows you to manage your URLs, view
                        analytics, and customize your short URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What analytics are available for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can view the number of clicks, geolocation data of the clicks
                        and device types (mobile/desktop) for each of your shortened URLs.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default LandingPage;
