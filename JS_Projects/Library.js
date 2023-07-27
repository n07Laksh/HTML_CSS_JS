



class Library {
    constructor(bookList) {
        this. bookList = bookList;
        this.issueBooks = {};
    }
    getBookName(){
        this.bookList.forEach((element)=>{
            console.log(element);
        })
    }
    issueBook(bookName,user) {
        if(this.issueBooks[bookName] == undefined){
        this.issueBooks[bookName] = user;
    }else(console.log('This book is already Booked'))
    }
    returnBook(bookName) {
        delete this.issueBooks[bookName];
    }
}

const library = new Library('JavaScript', 'HTML', 'Python','CSS');