import classNames from 'classnames'
import { twMerge } from 'tailwind-merge';


function Button({
    children,
    primary,
    secondary,
    danger,
    warning,
    success,
    outline,
    rounded,
    ...rest
}) {

    let classes = twMerge(
        classNames(rest.className,'flex items-center px-3 py-1.5 border', { //not over writing the classes of text 
        'border-blue-600 bg-blue-400 text-white': primary,
        'border-gray-900 bg-gray-800 text-white': secondary,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-green-500 bg-green-500 text-white': success,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-600': outline && primary,
        'text-gray-900': outline && secondary,
        'text-red-500': outline && danger,
        'text-yellow-400': outline && warning,
        'text-green-500': outline && success,
    }))

    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue : (props) => {
        console.log(props)
    }
}


export default Button;