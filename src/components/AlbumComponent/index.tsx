import Image from "next/image";
import Link from "next/link";

export interface IAlbumComponentProps {
    id: number;
    name: string;
    coverUrl: string;
}

const AlbumComponent: React.FC<IAlbumComponentProps> = ({ id, name, coverUrl }) => {
    return (
        <Link
            href={`/albuns/${id}`}
            className="w-80 md:w-100 h-80 md:h-100 flex flex-col border border-gray-300 shadow-2xl rounded-lg overflow-hidden"
            key={id}
        >
            <Image
                className="object-cover w-full h-2/3"
                src={coverUrl}
                alt={name}
                width={450}
                height={300}
            />
            <div className="flex items-center justify-center h-1/3 p-2 bg-white">
                <h2 className="text-center font-semibold text-lg">{name}</h2>
            </div>
        </Link>
    );
}

export default AlbumComponent;