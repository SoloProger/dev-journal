interface ButtonProps {
  name: string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <button className='bg-[#5D71DD] p-3 rounded-2xl text-white'>{name}</button>
  );
}