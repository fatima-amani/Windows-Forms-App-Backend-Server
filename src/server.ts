import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, 'db.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ping route
app.get('/ping', (req: Request, res: Response) => {
    res.send('true');
});

// Submit route
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    submissions.push({ name, email, phone, github_link, stopwatch_time });
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
    res.json({ success: true });
});

// Read route
app.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    } else if(index == submissions.length){
        res.status(404).json({ error: 'This is last Submission' });
    }
    else {
        res.status(404).json({ error: 'No more Submissions to Display' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
