//here we re creating a class

class Todo {
    id:string
    text:string

    //what is the constructor used for
    constructor (todoText:string) {
        this.id = new Date().toISOString()
        this.text=todoText
    }
}

export default Todo