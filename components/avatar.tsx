import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} alt={name} width={32} height={32} className="rounded-full mr-4" />
      <div className="text-l font-bold">{name}</div>
    </div>
  );
};

export default Avatar;