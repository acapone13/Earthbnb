const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        min: [4,'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters'],
    },
    email: {
        type: String,
        min: [4,'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters'],
        unique: true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4,'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters'],
        required: true
    },
    rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});

userSchema.methods.hasSamePassword = function(requestPassword) {
    
    return bcrypt.compareSync(requestPassword, this.password);
}

userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema );