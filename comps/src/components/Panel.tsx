import * as classNames from "classnames";

function Panel ({ children, className, ...rest }) {
    const finalClassNames= classNames(
        'border p-3 shadow bg-white w-full',
        className
    );

    return <div
        {...rest}
        className={finalClassNames}
    >
        {children}
    </div>
}

export default Panel;
