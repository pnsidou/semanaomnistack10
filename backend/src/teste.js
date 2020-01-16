const mongoose = require('mongoose');

const callback = (error) => {console.log(error);};

const connection = mongoose.connect('mongodb+srv://pnsidou:omnistack@cluster0-m11jf.mongodb.net/omni?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


connection.catch(function(reason){
    console.log(reason);
});
