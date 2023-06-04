interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    fontSize?: 'sm' | 'base' | 'lg';
    innerText: string;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    fontSize = 'base',
    innerText,
    onClick,
}: ButtonProps) => {
    const buttonColor = primary
        ? 'text-white bg-blue-400'
        : 'text-gray bg-transparent';

    return (
        <button
            type="button"
            className={[
                'font-bold border border-solid border-gray-100 rounded-2xl cursor-pointer inline-block leading-none py-2 px-4 shadow-md',
                `text-${fontSize}`,
                buttonColor,
            ].join(' ')}
            onClick={onClick}
        >
            {innerText}
        </button>
    );
};