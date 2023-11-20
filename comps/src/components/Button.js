import className from 'classnames';
import { twMerge } from 'tailwind-merge';


function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) 
 {
    
   
    const classes = twMerge(
        className(rest.className, 'flex items-center px-3 py-1.5 border', {
          'border-blue-500 bg-blue-500 text-white': primary,
          'border-gray-900 bg-gray-900 text-white': secondary,
          'border-green-500 bg-green-500 text-white': success,
          'border-yellow-400 bg-yellow-400 text-white': warning,
          'border-red-500 bg-red-500 text-white': danger,
          'rounded-full': rounded,
          'bg-white': outline,
          'text-blue-500': outline && primary,
          'text-gray-900': outline && secondary,
          'text-green-500': outline && success,
          'text-yellow-400': outline && warning,
          'text-red-500': outline && danger
        })
      );

    return <button {...rest} className={ classes }>{ children }</button>
}
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
         const count = Number(!!primary)
         + Number(!!secondary)
         + Number(!!success)
         + Number(!!danger)
         + Number(!!warning)

         if (count > 1) {
            return new Error('Only one primary, secondary, success, warning, or danger can be true')
         }
    }
};

export default Button;

//tricky Javascript to check if we have more than on true value from our variations:
//true = 1, false = 0, undefined = NaN, !!undefined = 0
//This means that if assign all these props a number value and add them up, only the true number values will give us one, and if there is more than one value that is true, an erro will be sent since 