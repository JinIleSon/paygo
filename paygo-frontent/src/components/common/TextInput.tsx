import { cn } from "../../lib/utils"

function TextInput({
    placeholder,
    ...props
}) {

    const base = 'w-full leading-[40px] pl-3.5 h-[40px] rounded-md outline-none bg-white border border-[#d9d9d9]'

    return (
        <input
            type="text"
            placeholder={placeholder}
            className={cn(base, `font-medium text-gray-600`)}
            {...props}
        />
    )
}

export default TextInput