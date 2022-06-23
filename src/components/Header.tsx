interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectGenreHeaderProp {
  selectedGenreHeader: GenreResponseProps;
}


export function Header(props: SelectGenreHeaderProp) {

  return (

    <header>
          <span className="category">Categoria:<span> {props.selectedGenreHeader.title}</span></span>
    </header>
  )
}