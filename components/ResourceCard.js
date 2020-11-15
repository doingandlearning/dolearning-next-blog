import Image from "next/image";

export default function ResourceCard({ image, link, title, description }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center">
        <Image
          className="h-48 w-full object-cover rounded-lg"
          src={image.src}
          alt={image.alt}
          height="192"
          width="375"
        />
      </div>
      <div className="flex-1 bg-white px-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href={link} class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p class="text-base leading-6 text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
