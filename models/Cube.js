const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: { type: String, required: true, match: /^https?:\/\// },
    difficultyLevel: { type: Number, min: 1, max: 6 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});

module.exports = model('Cube', schema);