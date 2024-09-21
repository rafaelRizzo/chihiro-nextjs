import { ReactNode } from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

// Definindo a interface para as props do componente
interface SocialComponentProps {
    href: string; // O href deve ser uma string
    label: string; // O label deve ser uma string
    children: ReactNode; // Os children podem ser qualquer nó React
}

// Usando a interface para tipar as props do componente
export default function SocialComponent({ href, label, children }: SocialComponentProps) {
    return (
        <TooltipProvider delayDuration={10}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={href} target="_blank">
                        <div className="flex items-center justify-center">
                            {children}
                        </div>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
