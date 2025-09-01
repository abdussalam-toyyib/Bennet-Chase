interface containerProps {
    children?: React.ReactNode;
    className?: string;
}


export const Container = ({children, className = ""}: containerProps) => {
    return (
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-5 md:px-14 ${className}`}>
            {children}
        </div>
    )
}