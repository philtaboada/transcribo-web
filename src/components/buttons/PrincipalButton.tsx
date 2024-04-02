import { Button } from "@/components/ui/button"

interface PrincipalButtonProps {
    text: string,
    onSend: () => void,
    className?: string,
    variant?: any
}

const PrincipalButton : React.FC<PrincipalButtonProps> = ({text, onSend, className, variant}) => {
    return (
        <Button className={className} variant={variant} onClick={()=> onSend()}>{text}</Button>
    )
}

export default PrincipalButton