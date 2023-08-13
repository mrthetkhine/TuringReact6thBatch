import swagPhotos, { Photo } from '../../photos';
import Link from 'next/link'
import Image from 'next/image'

export default function PhotoView()
{
    const photos = swagPhotos;
    return (<div>
        {photos.map(({ id, imageSrc }) => (
            <Link key={id} href={`/photos/${id}`}>
                <Image
                    alt=""
                    src={imageSrc}
                    height={500}
                    width={500}
                    className="w-full object-cover aspect-square"
                />
            </Link>
        ))}
    </div>)
}