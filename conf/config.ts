// /myFirstDatabase?retryWrites=true&w=majority

export const config = {
    db: {
        url: "mongodb://localhost:27017",
        // "url": "mongodb+srv://mongodev:kh17wnrg2cFWoI12@cluster0.yifvq.mongodb.net",
        name: "todo-api", 
        collections: {
            todoItems: "todo-items",
            sequences: "sequences"
        }
    }    
}
