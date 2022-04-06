import React, { useEffect , useState} from 'react';
import books from '../docs/books.json';

type Props = {}

const BookList = (props: Props) => {
  const [booksData, setBooksData] = useState([{}]);
  console.log(booksData);


  useEffect(() => {
    setBooksData(books)
  }, [])
  
  return (
    <div>
      { booksData.map((book: any) => (
        <div>
          <p>{ book.nome }</p>
        </div>
      ))}
    </div>
  )
}

export default BookList