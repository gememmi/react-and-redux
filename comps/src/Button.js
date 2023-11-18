import PropTypes from "prop-types";

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
 }) {
   

    return <button className="bg-red-600">{ children }</button>
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