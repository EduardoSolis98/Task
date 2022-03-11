const mongoose = require('mongoose');
const ListaSchema = mongoose.Schema({
    name: {type: String, required: true},
    isChecked: {type: Boolean, required: true}
})

module.exports = mongoose.model("Articulo", ListaSchema);