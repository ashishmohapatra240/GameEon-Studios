import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, role, imageUrl }) => {
  return (
    <div className="bg-stone-900 rounded-xl p-6 flex flex-col justify-between gap-4 max-w-lg mx-auto h-auto">
      <div className="overflow-hidden text-white text-base font-normal font-['Gilroy'] leading-relaxed ">
        {text}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Image
          className="w-14 h-14 rounded-full"
          src={imageUrl}
          alt={author}
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <div className="text-white text-lg font-semibold leading-6">
            {author}
          </div>
          <div className="text-white text-sm font-normal leading-tight">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;