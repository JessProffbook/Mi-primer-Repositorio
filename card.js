export const Card = ({ children }) => <div className='bg-white rounded shadow'>{children}</div>;
export const CardContent = ({ children, className }) => <div className={className}>{children}</div>;