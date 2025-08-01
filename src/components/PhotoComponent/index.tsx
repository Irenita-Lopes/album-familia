import Image from "next/image";

export interface IPhotoComponentProps {
    id: number;
    url: string;
    description: string;
}

const PhotoComponent: React.FC<IPhotoComponentProps> = ({ id, url, description }) => {
    return (
        <div
            className="w-80 md:w-100 h-80 md:h-100 flex flex-col border border-gray-300 shadow-2xl rounded-lg overflow-hidden"
            key={id}
        >
            <Image
                className="object-cover w-full h-2/3"
                src={url}
                alt={description}
                width={450}
                height={300}
            />
             <div className="flex items-center justify-center h-1/3 p-2 bg-white">
                <h2
                    className="text-center font-semibold text-lg">
                    {description}
                </h2>
            </div>
        </div>
    );
}

export default PhotoComponent;