
show dbs; //Did you mean: `db.getMongo().getDBNames()`?

use BlogDB;  Did you mean: `db.getMongo().getDB("BlogDB")`?

db.createCollection("Posts");
show collections Did you mean: `db.getCollectionNames()`?

db.posts.insertOne({
    title: "My First Blog Post",,
content: "This is the content of my first blog post.",,
category: "General",
likes: 3,
tags: ["introduction", "welcome"],
Date: new Date()
})

db.posts.insertMany([
    {
        title: "My Second Blog Post",
        content: "This is the content of my second blog post.",
        category: "General",
        likes: 5,
        tags: ["introduction", "welcome"],
        Date: new Date()
    },
    {
        title: "My Third Blog Post",
        content: "This is the content of my third blog post.",
        category: "Tech",
        likes: 8,
        tags: ["introduction", "welcome"],
        Date: new Date()
    },
    {
        title: "My Fourth Blog Post",
        content: "This is the content of my fourth blog post.",
        category: "Tech",
        likes: 10,
        tags: ["introduction", "welcome"],
        Date: new Date()
    }
])

db.posts.find({category: "Tech"
}).sort({
    likes: -1   
}).limit(2);

db.posts.find({
    $and: [
        {category: "Tech"},
        {likes: {$gt: 5}}
    ]

    
});

db.posts.updateOne({
    title: "My First Blog Post"
}, 
{
    $set:{
        likes:89,
        tags: ["introduction", "welcome", "updated"],

    }
})

db.posts.deleteOne({
    title: "My Second Blog Post"
})

db.posts.updateOne({
    title: "My Third Blog Post"
},
{
    $inc: {likes: 1}
    upsert: true
})

db.posts.updateOne({
    title: "My Fourth Blog Post"
},
{
    $dec: {likes: -1}
    upsert: true
})

db.posts.deleteOne({
    title: "My First Blog Post"

},
{
    writeConcern: "majority"
})

db.posts.deleteMany(
   {
    category: "Tech"
   }
)



