import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {children}
            </div>
        </>
    )
}

export default layout;