const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.use((req, res, next) => {
    console.count(`Numero de requisicoes`);

    return next();
});

function checkProjectExists(req, res ,next) {
    const { id } = req.params;

    const project = projects.find(project => project.id == id);

    if(!project){
        return res.json({error : "Project has not found"})
    }

    return next();
}

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    const project = { id, title, tasks: [] }

    projects.push(project);

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(project => project.id == id);
    project.title = title;

    return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    const index = projects.findIndex(project => project.id == id);

    projects.splice(index, 1);

    return res.json(projects);
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(project => project.id == id);

    project.tasks.push(title);

    return res.json(projects);
});

server.listen(3333);