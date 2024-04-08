"use client";

const Input = ({
    backgroundColor,
    color,
    name,
    required,
    type,
    fieldName,
    handleChange,
    onBlur,
    onFocus,
    formData,
    focused,
}) => {
    const isNumberType = type === "number";
    return (
        <div className="relative">
            <label
                className={`transition-text duration-300 ease-out bg-custom-${backgroundColor} absolute font-normal text-lg lg:text-2xl text-custom-${color} pointer-events-none ${
                    focused[name] || formData[name] ? "text-base -top-5" : ""
                }`}
            >
                {fieldName}
                {required && "*"}
            </label>
            <input
                name={name}
                onChange={handleChange}
                onBlur={onBlur}
                onFocus={onFocus}
                value={formData[name]}
                required={required}
                type={type}
                className={`border-b-[1.5px] lg:border-b-[2px] h-12 w-full lg:w-3/4 border-custom-${color} text-lg lg:text-2xl font-normal lg:font-medium text-custom-${color} focus:outline-none bg-custom-${backgroundColor} ${
                    isNumberType ? "appearance-none" : ""
                }`}
            ></input>
            {focused[name] && !formData[name] && (
                <p className="font-medium text-base text-custom-red">
                    Campo Requerido
                </p>
            )}
        </div>
    );
};

export default Input;
