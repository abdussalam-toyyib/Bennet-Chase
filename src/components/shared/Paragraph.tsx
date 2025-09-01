
interface ParagraphProps {
    children?: React.ReactNode; 
    className?: string;
}

export const Paragraph = ({children, className = ''}: ParagraphProps) => {
    return (
        <p className={`text-base md:text-lg text-heading-3 dark:text-heading-2 leading- font-montserrat ${className}`}>
            {children}
        </p>
    )
}