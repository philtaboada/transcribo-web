'use client'

import PrincipalButton from "@/components/buttons/PrincipalButton";
import Demo from "@/components/demo/Demo";

export default function Home() {
    return (
        <main className=" py-24">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 rounded-2xl bg-image-hero shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
                <div className="max-w-screen-lg !bg-cover !bg-center flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="w-sm-1/2 max-w-lg mb-5">
                        <h2 className="text-5xl text-lg-3xl mb-12">Turn your audio into words with precision and speed.</h2>
                        <p className="text-lg">Welcome to TranscriboApp, where artificial intelligence brings your conversations to life.</p>
                        <div className="sm:mr-12 mr-0">
                            <PrincipalButton className="rounded-xl w-full mt-8" text="Create Free Account" onSend={() => { }} />
                        </div>
                    </div>
                    <div className="w-sm-1/2 max-w-lg">
                        <Demo />
                    </div>
                </div>
            </div>
        </main>
    );
}

