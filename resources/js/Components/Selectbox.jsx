export default function Selectbox({ className = "", option = [], currentValue = "", ...props }) {
    return (
        <select
            {...props}
            defaultValue={currentValue}
            className={
                'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ' +
                className
            }
        >
            {option.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}