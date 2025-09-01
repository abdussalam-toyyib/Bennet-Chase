
interface BottonLinkProps {
   href?: string;
   text?: string;
   classname?: string;
}

export const BottonLink = ({href, text, classname = ''}: BottonLinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 border-none rounded-lg outline-none relative overflow-hidden border dark:bg-[#2BA0A6FF] hover:bg-[#53aeb3] cursor-pointer transform transition duration-300 ${classname}`}>
            <span className="relative z-10 text-white"> {text} </span>
        </a>
    )
}