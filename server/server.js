const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./models/Project');
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

// Ruta para obtener todos los proyectos
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proyectos' });
  }
});

// Ruta para eliminar un proyecto por ID
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar proyecto' });
  }
});


// Nueva ruta para editar un proyecto
app.put('/api/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar proyecto' });
  }
});

// Ruta de autenticación (ejemplo básico)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí deberías hacer la validación de usuario, este es un ejemplo básico
  if (username === 'admin' && password === 'admin') {
    res.json({ message: 'Login exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Ruta para obtener un proyecto por ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    console.log(project); // Agregar este log para ver lo que devuelve
    res.json(project); // Asegúrate de devolver un JSON
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener el proyecto' });
  }
});

