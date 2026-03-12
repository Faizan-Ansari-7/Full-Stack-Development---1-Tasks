const sub =
{
    "FSD": [
        {
            "Topic": "HTML",

            "course": "Beginer",

            "content": ["tags", "table", "form"],

        },
        {

            "Topic": "CSS",

            "course": "Beginer",

            "content": ["tags", "table", "form"]
        }
    ]
};

for (let i in sub) {
    console.log(i);
    for (let j in sub[i]) {
        console.log(sub[i][j].Topic);
        console.log(sub[i][j].course);
        console.log(sub[i][j].content);
    }
}