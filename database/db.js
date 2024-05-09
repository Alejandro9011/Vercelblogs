import mongoose from "mongoose"

const url = "mongodb+srv://produccion:123@cluster6.jbvsirp.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster6"

mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("¡Conectado a MongoDB!");
});
db.on("error", () => {
  console.log("¡Error al conectar a MongoDB!");
});

export default db;
