from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

def get_db():
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client["innosanskriti"]
    return db

def init_db():
    db = get_db()
    services = db["services"]
    # Purane saare services hatao
    services.delete_many({})
    # Nayi list insert karo
    services.insert_many([
        {"title": "AI/ML Solutions", "description": "Custom AI models, model training, and MLOps pipelines." },
        {"title": "LLM Integration", "description": "Fine-tuning and deploying large language models (LLMs) with APIs." },
        {"title": "MLOps", "description": "Model lifecycle management, monitoring, and automated retraining pipelines." },
        {"title": "Web Development", "description": "Full-stack apps using React, Next.js, Flask, and Django." },
        {"title": "Mobile App Development", "description": "Cross-platform apps using Flutter and React Native." },
        {"title": "DevOps & CI/CD", "description": "Automated pipelines, GitHub Actions, Jenkins, Docker & Kubernetes." },
        {"title": "Cloud Solutions", "description": "Deployments on AWS, GCP, Azure, including serverless and microservices." },
        {"title": "Data Engineering", "description": "ETL pipelines, data lakes, and real-time streaming with Kafka & Spark." },
        {"title": "Database Management", "description": "MongoDB, PostgreSQL, Redis, and scalable database design." },
        {"title": "API Development", "description": "RESTful and GraphQL APIs with authentication and rate-limiting." },
        {"title": "UI/UX Design", "description": "User-centered design with Figma and responsive HTML/CSS/JS." },
        {"title": "Automation & Scripting", "description": "Task automation using Python, Bash, and Node.js." },
        {"title": "Testing & QA", "description": "Automated testing with Selenium, Cypress, and unit testing frameworks." }
    ])