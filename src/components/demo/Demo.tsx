'use client'
import { Card } from "@/components/ui/card"
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { Button } from "../ui/button";
import { CiStop1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import useRecorder from "@/hooks/useRecorder";
import { use, useEffect } from "react";

interface RecordAudioProps {
    setAudioFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

const Demo: React.FC<RecordAudioProps> = (props) => {

    const {
        recordingState,
        startRecording,
        pauseRecording,
        resumeRecording,
        stopRecording,
        resetRecording,
        audioURL,
        audioFile,
        audioLevel,
        timeElapsed
    } = useRecorder()


    useEffect(() => {
      console.log('audioURL', audioFile);
    }, [audioFile])
    

    return (
        <Card className="rounded-2xl p-4">
            <p className="text-center">Try the demo here. Just press record and speak your mind.</p>
            <div className=" flex justify-center items-center">
                <Button onClick={startRecording} variant='ghost' size='default' className="rounded-full py-4 mt-28 h-18" disabled={recordingState === 'idle' ? false : true}>
                    <BiSolidMicrophoneAlt className="text-9xl text-[#e6e6e6]" />
                </Button>
            </div>

            <div>
                <h3 className="text-2xl mb-5 text-center">Time: {timeElapsed}s</h3>
            </div>

            {['recording', 'paused'].includes(recordingState) ?
                (
                    <div className="flex items-center justify-center mb-16">

                        <Button onClick={stopRecording} className="rounded-xl" variant='ghost' disabled={recordingState === 'recording' ? false : true} >
                            <CiStop1 className="text-3xl" />
                        </Button>


                        <Button onClick={resumeRecording} className="rounded-xl h-14" variant='ghost' disabled={recordingState === 'paused' ? false : true} >
                            <CiPlay1 className="text-5xl" />
                        </Button>

                        <Button onClick={pauseRecording} className="rounded-xl" variant='ghost'  >
                            <CiPause1 className="text-3xl" />
                        </Button>
                    </div>
                )
                :
                (
                    <div className="flex items-center justify-center mb-16">

                        <Button onClick={stopRecording} className="rounded-xl" variant='ghost' disabled={recordingState === 'recording' ? false : true}>
                            <CiStop1 className="text-3xl" />
                        </Button>


                        <Button onClick={resumeRecording} className="rounded-xl h-14" variant='ghost' disabled={recordingState === 'paused' ? false : true}>
                            <CiPlay1 className="text-5xl" />
                        </Button>

                        <Button onClick={pauseRecording} className="rounded-xl" variant='ghost' disabled>
                            <CiPause1 className="text-3xl" />
                        </Button>
                    </div>
                )
            }

        </Card>

    )
}

export default Demo
