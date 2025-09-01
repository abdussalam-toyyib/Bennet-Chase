interface logoProps {
    // Add any props if needed in the future
    className?: string;
    imageSrc?: string;
    altText?: string;
    title?: string;
}

export const Logo = ({imageSrc='', altText='', className=''}: logoProps) => {
    return (
        <div className={`min-w-max inline-flex relative ${className}`}>
            <a href="#" className="realative flex items-center gap-3">
                <img src={imageSrc} alt={altText} className={`w-40 h-10 ${className}`}/>
                {/* <div className="inline-flex text-lg font-semibold text-heading-1">
                    Bennet & Chase
                </div> */}
            </a>
        </div>
    )
}