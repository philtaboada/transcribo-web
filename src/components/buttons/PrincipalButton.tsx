import { Button } from "@/components/ui/button"

interface PrincipalButtonProps {
    text: string,
    onSend: () => void,
    className?: string
}

const PrincipalButton : React.FC<PrincipalButtonProps> = ({text, onSend, className}) => {
    return (
        <Button className={className} onClick={()=> onSend}>{text}</Button>
    )
}

export default PrincipalButton