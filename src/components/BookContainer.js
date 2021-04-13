import React,{Component} from 'react'
import BookCard from './BookCard'
// import states from '../StateList'
import books from '../data'
import Form from './Form'

class BookContainer extends Component{
    state = {
        books:[...books],
        total:0
    }

    addToTotal= () =>{
        // this.setState({...this.state,total: this.state.total+1})
        this.setState((prevState) =>{
            return{
                total:prevState.total + 1
            }
        })
    }

    renderBooks = () =>{
        return this.state.books.map(book => <BookCard key={book.isbn} 
            title={book.title} author={book.author} image={book.image}
             addToTotal={this.addToTotal}/>)
    }

    handleAddToBooks = (book) =>{
        // console.log(book)
        this.setState((prevState) =>{
            return{
                // books: prevState.books.push(book)
                books:[...prevState.books, book]
            }
        })
        console.log(this.state.books)
    }


    render(){
        return(
            <div>
                <Form  handleAddToBooks={this.handleAddToBooks}/>
                <h1>JavaScript books</h1>
                <h2>{this.state.total}</h2>
                {this.renderBooks()}
            </div>
        )

    }
}

export default BookContainer