from pymongo import MongoClient

uri = "mongodb+srv://yogeshchauhanai:NIHr90rCXAOJWZKr@cluster0.onbgqk8.mongodb.net/test?retryWrites=true&w=majority&tls=true"
client = MongoClient(uri)

print(client.list_database_names())
