//an array to hold the messages.
const messages = [];
let id = 0;

//Export an object with methods to create, read, update, and delete messages.
module.exports = {
    //methods
    //1
    create: (req,res) => {
        //deconstructing text and time off the req.body
        const {text,time} = req.body;
        //sends new info into messages array with an id, text and time
        
            messages.push({id, text, time});
            console.log(messages)
        //assigns a new id after every message 
            id++;
        //sends updated messages array
            res.status(200).send(messages);

    },
    //2
    read: (req, res) => {
        //return the messages array
            res.status(200).send(messages);

    },
    //3
    update: (req,res) => {
        console.log('update test')
        const{text} = req.body;
        const updatedId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updatedId)
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
          };
        console.log(messages)
        res.status(200).send(messages)
    },
    //3
    deleteMessage: (req,res) => {
        const messageIndex = messages.filter(message => {
        return message.id == req.params.id });
        messages.splice(messageIndex,1);
        res.status(200).send(messages);
    }


}