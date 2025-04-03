import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3126;
const filePath = "userData.json";

app.use(express.json());
app.use(cors({ origin: "*", methods: ["POST", "GET"] }));


const loadUsers = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        return data ? JSON.parse(data) : {};
    }
    return {};
};

const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
};

app.post("/addUser", (req, res) => {
    const { email, firstName, lastName, phoneNumber } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    let users = loadUsers();
    users[email] = { firstName, lastName, phoneNumber };
    saveUsers(users);

    res.json({ message: "User added successfully!", users });
});

app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
