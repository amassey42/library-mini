// add front end scripting here!

//QuerySelectors
const bookForm = document.querySelector("#newBook");
const bookId = document.querySelector("#bookId");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookUl = document.querySelector("#allBooks")

fetch("/api/books").then(res=>{
    return res.json()
}).then(data=>{
    data.forEach(book=>{
        const newLi = document.createElement('li');
        newLi.textContent = book.title
        bookUl.append(newLi);
    })
})

bookForm.addEventListener("submit", e=>{
    e.preventDefault();
    const dataObj ={
        id:parseInt(bookId.value),
        book:bookTitle.value,
        author:bookAuthor.value,
    }
    console.log(dataObj);
    fetch("/api/books",{
        method: "POST",
        body:JSON.stringify(dataObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload()
        }else {
            alert("trumpet sound")
        }
    })
})