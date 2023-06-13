import classNames from 'classnames';

function Button ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
}) {
    const classes = classNames( rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-500 bg-gray-500': secondary,
        'border-green-500 bg-green-500': success,
        'border-yellow-500 bg-yellow-500': warning,
        'border-red-500 bg-red-500': danger,
        'rounded-full': rounded,
        'text-white': !outline,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
    });

    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger,
    }) => {
        const count = [primary, secondary, success, warning, danger].filter(Boolean).length;
        if (count > 1) {
            return Error('Only one of variations (primary, secondary, success, warning, danger) can be true');
        }
    }
}

export default Button;
