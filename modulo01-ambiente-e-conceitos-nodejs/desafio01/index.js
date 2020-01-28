const express = require('express');

const server = express();

server.use(express.json());

const projects = [

];

server.post('/projects', (req, res) => {
    const { id, title} = req.body;

    projects.push([id, title, []]);

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    projects.forEach(project => 
        project[0] == id ? project[1] = title : console.log('ID diferente')
    );

    return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    projects.forEach((project, index) => 
        project[0] == id ? projects.splice(index, 1) : console.log('Index incorreto')
    );

    return res.json(projects);
});

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title, tasks } = req.body;


    projects.forEach((project, index) => {
        project[0] == id ? project[2].push(tasks) : console.log('ID incorreto')
    });

    return res.json(projects);
});

server.listen(3333);