const db = require('../db/config');

async function createPost(req, res) {

    const body = req.body;

    const user = {
        name: body.name,
        post: body.post,
        username: body.username
    };

    if(!user.username){ return res.status(400).send('UserName is required') }

    const insertQuery = `INSERT INTO public.tasks (id, name, post, username)
                        VALUES (default, '${user.name}', '${user.post}', '${user.username}');`
    
    
    result = await db.query(insertQuery)
    
    res.status(200).json(result);   
    
}

async function getAllPosts(req, res){
    const result = await db.query(`SELECT name, post, id, username
	                                FROM public.tasks
		                                ORDER BY
			                                id ASC;`)

    return res.json(result);
}

async function getTaskId(req, res){
    const id = req.params.id;
    const result = await db.query(`SELECT * FROM public.tasks WHERE id=${id}`);

    return res.json(result);
}

async function updatePosts(req, res){
    const body = req.body;
    const id = req.params.id;

    if(body.name === undefined) return ''   
    if(body.post === undefined) return '' 

    const result = await db.query( `UPDATE public.tasks
	                        SET name='${body.name}', post='${body.post}'
	                        WHERE id=${id};`)
    return res.json(result);

}

async function deletePost(req, res){
    const id = req.params.id;

    const result = await db.query(`DELETE FROM public.tasks WHERE id=${id};`);

    return res.json(result);
}

module.exports = { createPost, getAllPosts, getTaskId, updatePosts, deletePost };