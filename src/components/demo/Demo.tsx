import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { Button } from "../ui/button";
import { CiStop1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";




const Demo = () => {
    return (
        <Card className="rounded-2xl p-4">
            <p className="text-center">Try the demo here. Just press record and speak your mind.</p>
            <div className=" flex justify-center items-center">
                <Button variant='ghost' size='default' className="rounded-full py-4 mt-28 h-18">
                    <BiSolidMicrophoneAlt className="text-9xl text-[#e6e6e6]" />
                </Button>
            </div>
            <div>
                <h3 className="text-4xl mb-5 text-center">01:00</h3>
            </div>
            <div className="flex items-center justify-center mb-16">
                <Button className="rounded-xl" variant='ghost'>
                    <CiStop1 className="text-3xl" />
                </Button>
                <Button className="rounded-xl h-14" variant='ghost'>
                    <CiPlay1 className="text-5xl" />
                </Button>
                <Button className="rounded-xl" variant='ghost'>
                    <CiPause1 className="text-3xl" />
                </Button>
            </div>
        </Card>
    )
}

export default Demo
