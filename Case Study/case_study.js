let bookArray = [];

class Book{
    constructor(bookId,bookName,author,category,publisher,price,serviceFee){
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.price = price;
    }
    serviceFee(){
        let serviceFee = 0;
        if (this.price < 50000){
            serviceFee = 0.08 * this.price;
        }else if (this.price <= 100000){
            serviceFee = 0.05 * this.price;
        }else {
            serviceFee = 0;
        }
        return serviceFee;
    }

    showInfo (){
        console.log("--------------");
        console.log(`Ma sach: ${this.bookId}`);
        console.log(`Ten sach: ${this.bookName}`);
        console.log(`Tac gia: ${this.author}`);
        console.log(`The loai: ${this.category}`);
        console.log(`Nha xuat ban: ${this.publisher}`);
        console.log(`Gia sach: ${this.price}`);
        console.log(`Phi dich vu: ${this.serviceFee()}`);
        console.log("--------------");
    }
}

function addBook(){
    let bookId = document.getElementById("book-id").value;
    let bookName = document.getElementById("book-name").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let publisher = document.getElementById("publisher").value;
    let price = parseFloat(document.getElementById("price").value);

    let newBook = new Book(bookId,bookName,author,category,publisher,price);

    bookArray.push(newBook);
    alert("Book is add succesfull");
    console.log(bookArray);
}

function searchBook(){
    let searchID = document.getElementById("search").value;

    for (let i in bookArray){
        let book = bookArray[i];
        if (book.bookId === searchID){
            book.showInfo();
            alert(`book name: ${book.bookName},author: ${book.author},category: ${book.category},service fee:${book.serviceFee()}`);
            break;
        }
    }
}
function deleteBook(){
    let searchID = document.getElementById("search").value;

    for (let i in bookArray){
        let book = bookArray[i];
        if(book.bookId === searchID){
            bookArray.splice(i, 1);
            alert("deleted successfully");
            break;
        }
    }
}

function updateBook(){
    let bookId = document.getElementById("book-id").value;
    let bookName = document.getElementById("book-name").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let publisher = document.getElementById("publisher").value;
    let price = parseFloat(document.getElementById("price").value);

    for (let i in bookArray){
        let book = bookArray[i];
        if (book.bookId === bookId){
            book.bookName = bookName;
            book.author = author;
            book.category = category;
            book.publisher = publisher;
            book.price = price;
            alert("Book is updated successfully");
            break;
        }
    }
}