const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/emmaMo', { useNewUrlParser: true, useUnifiedTopology: true });
const em=mongoose.connection;
em.once('open', ()=>{
    console.log('db is open');
})

const userSchema=new mongoose.Schema({
    name:String,
    password:{
        type:String,
        required:true,
        unique:true
    },
    gender: String
})
const User=mongoose.model('User', userSchema);
const loyce= new User({
    name:'Nabasirye',
    password:'rayo',
    gender:'female'
})
console.log(loyce.password);
loyce.save();