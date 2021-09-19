interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => {
  return <button type="button" {...props} />;
};
