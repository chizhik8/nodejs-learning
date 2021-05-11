
const result = [
    {
        name: ""
    }
];

app.get("/users", (req, res)=> {
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
})