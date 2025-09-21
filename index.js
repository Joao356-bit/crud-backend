const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); 
let items = [];

app.get("/", (req, res) => {
  res.send("Bem-vindo à API CRUD com Node.js e Express 🚀 Use /items para começar.");
});

app.post("/items", (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item não encontrado" });
  res.json(item);
});

app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item não encontrado" });

  const { name } = req.body;
  item.name = name || item.name;
  res.json(item);
});

app.delete("/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item não encontrado" });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});