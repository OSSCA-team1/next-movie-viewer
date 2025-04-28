// 공통 버튼 컴포넌트
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}


