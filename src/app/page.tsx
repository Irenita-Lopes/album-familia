import AlbumComponent from '@/components/AlbumComponent';
async function getAlbums() {
  const albums = [
    {
      id: 1,
      name: 'Exposição de Arte Moderna',
      coverUrl: 'https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg'
    },
    {
      id: 2,
      name: 'Galeria de Fotografia',
      coverUrl: 'https://res.cloudinary.com/dpkzut14s/image/upload/t_media_lib_thumb/cld-sample.jpg'
    },
    {
      id: 3,
      name: 'Esculturas Clássicas',
      coverUrl: 'https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg'
    },
  ];
  return albums;
}

export default async function Home() {
  const albums = await getAlbums();

  return (
    <div className='container mx-2 md:mx-8 p-4'>
      <div
        className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start'
      >
        {albums.map((album) => (
          <AlbumComponent key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
}