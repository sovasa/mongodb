
 const mongodb = require('mongodb')
 const MongoClient = mongodb.MongoClient
 
 // Connection URI
 const url = 'mongodb://localhost:27017'
 // Use connect method to connect to the Server
 MongoClient.connect(url, (err, client) => {
   if (err) return process.exit(1)
   console.log('Kudos. Connected successfully to server')
   // Perform queries
   // contact with db 
   var db = client.db('mydatabase')
   const collection = db.collection('edx-course-students')
   //Insert 3 documents
   collection.insert([
     { name: 'Bob' }, { name: 'John' }, { name: 'Peter' } // 3 documents
   ], (error, result) => {
     if (error) return process.exit(1)
     console.log(result.result.n) // will be 3
     console.log(result.ops.length) // will be 3
     console.log('Inserted 3 documents into the edx-course-students collection')
 
     const name = 'Peter'
     collection.update({ name: name }, { $set: { grade: 'B' } }, (error, result) => {
       if (error) return process.exit(1)
       console.log(result.result.n) // will be 1
       console.log(`Updated the student document where name = ${name}`)
 
       // const name = 'John'
       // collection.remove({ name: name }, (error, result) => {
       //   if (error) return process.exit(1)
 
       //   console.log(`Removed the document where name = ${name}`)
       //   console.log(result.result.n) // will be 1
       // })
 
       // collection.find({}).toArray((error, docs) => {
       //   if (error) return process.exit(1)
       //   console.log(2, docs.length) // will be 2 because we removed one document
       //   console.log(`Found the following documents:`)
       //   console.dir(docs)
       //   callback(docs)
       // })
     })
   })
 })