const db = require('../config/db')

class Post{
    constructor(title, body,) {
this.title = title;
this.body = body;
 }

    async save() {
let d = new Date();
let yyyy = d.getFullYear();
let mm = d.getMonth() + 1;
let dd = d.getDate();

let now = new Date();
let formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');

let sql = `
INSERT INTO posts (
    title,
    body,
    created_at
) VALUES (
    'Your Title',
    'Your Body',
    '${formattedDate}'
);
`

return db.execute(sql);


}

    static findAll() {
        let sql = "SELECT * FROM posts;" 

        return db.execute(sql);

    }

static findById(id) {
    let sql =`SELECT * FROM posts WHERE id = ${id}`;

    return db.execute(sql);

}
static async update(id, title, body) {
    let sql = `UPDATE posts SET title = ?, body = ? WHERE id = ?`;
    const result = await db.execute(sql, [title, body, id]);
    return result[0];
}

static async delete(id) {
    let sql = `DELETE FROM posts WHERE id = ?`;
    const result = await db.execute(sql, [id]);
    return result[0];
}
}


module.exports = Post;