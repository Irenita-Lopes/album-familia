import AlbumPhoto from '@/components/PhotoComponent';
import Link from 'next/link';

async function getAlbumData(albumId: number) {
  return {
    id: albumId,
    name: `Álbum ${albumId}`,
    photos: [
      {
        id: 1,
        url: 'https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg',
        description: 'Menino sorrindo ao sol',
      },
      {
        id: 2,
        url: 'https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg',
        description: 'Menina brincando com blocos',
      },
      {
        id: 3,
        url: 'https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg',
        description: 'Menino explorando a natureza',
      },
    ],
  };
}

async function getAlbums() {
  return [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];
}

export default async function AlbumPage() {
  const album = await getAlbumData(3);

  return (
    <div>
      <Link href="/">← Voltar para a lista de álbuns</Link>
      <h1>{album.name}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {album.photos.map((photo) => (
          <AlbumPhoto key={photo.id} {...photo} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((album) => ({
    albumId: album.id.toString(),
  }));
}
