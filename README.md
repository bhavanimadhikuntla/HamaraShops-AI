# HamaraShops-AI

# AI-Powered Business Solutions & Multi-Agent Chatbot

[![Java 17](https://img.shields.io/badge/Java-17-orange.svg?style=flat-square&logo=openjdk)](https://adoptium.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.0-brightgreen.svg?style=flat-square&logo=springboot)](https://spring.io/projects/spring-boot)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-2025.1.2-blue.svg?style=flat-square&logo=spring)](https://spring.io/projects/spring-cloud)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Google Cloud Run](https://img.shields.io/badge/GCP-Cloud%20Run-4285F4.svg?style=flat-square&logo=googlecloud)](https://cloud.google.com/run)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
**HamaraShops.ai** is an AI-powered business platform that combines a modern React frontend with a Spring Boot backend and a multi-agent chatbot.

The platform provides information about HamaraShops.ai, industry-specific AI solutions, business content, contact services, appointment scheduling, and an intelligent conversational experience powered by Groq.

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────────┐
                         │       User / Client      │
                         │                          │
                         │     Web Browser          │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     React Frontend       │
                         │      React + Vite        │
                         │                          │
                         │ • Home                   │
                         │ • About                  │
                         │ • Industries             │
                         │ • AI Use Cases           │
                         │ • Architecture           │
                         │ • Business Value         │
                         │ • Contact                │
                         │ • Appointment            │
                         │ • AI Chatbot             │
                         └────────────┬─────────────┘
                                      │
                                      │ REST API
                                      ▼
                         ┌──────────────────────────┐
                         │       API Gateway        │
                         │    Spring Cloud Gateway  │
                         │                          │
                         │ Port: 8080               │
                         │ /api/v1/**               │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                    ┌──────────────────────────────────┐
                    │         Business Service         │
                    │          Spring Boot              │
                    │                                  │
                    │ Port: 8082                       │
                    │                                  │
                    │ ┌──────────────────────────────┐ │
                    │ │      REST Controllers        │ │
                    │ │                              │ │
                    │ │ CompanyController            │ │
                    │ │ IndustryController           │ │
                    │ │ ContactController            │ │
                    │ │ ChatController               │ │
                    │ └──────────────┬───────────────┘ │
                    │                │                 │
                    │                ▼                 │
                    │ ┌──────────────────────────────┐ │
                    │ │      Business Content        │ │
                    │ │                              │ │
                    │ │ ContentDataStore              │ │
                    │ │ IndustryService               │ │
                    │ │ BusinessContentServiceImpl    │ │
                    │ └──────────────┬───────────────┘ │
                    │                │                 │
                    │                ▼                 │
                    │ ┌──────────────────────────────┐ │
                    │ │          JSON Data            │ │
                    │ │                              │ │
                    │ │ company.json                  │ │
                    │ │ industries.json               │ │
                    │ │ careers.json                  │ │
                    │ │ Other business data           │ │
                    │ └──────────────────────────────┘ │
                    │                                  │
                    │ ┌──────────────────────────────┐ │
                    │ │     Multi-Agent AI System    │ │
                    │ │                              │ │
                    │ │ ChatOrchestrator              │ │
                    │ │          │                   │ │
                    │ │     ┌────┼────┐              │ │
                    │ │     ▼    ▼    ▼              │ │
                    │ │ Company Industry Appointment │ │
                    │ │ Agent    Agent     Agent     │ │
                    │ │     │      │         │       │ │
                    │ │     └──────┼─────────┘       │ │
                    │ │            ▼                 │ │
                    │ │       GroqService            │ │
                    │ └──────────────────────────────┘ │
                    │                                  │
                    └────────────────┬─────────────────┘
                                     │
                                     ▼
                         ┌──────────────────────────┐
                         │       External AI        │
                         │                          │
                         │        Groq API          │
                         └──────────────────────────┘
```

## 🚀 Key Features

* **Modern React + Vite frontend**
  
* **Spring Boot backend**
  
* **API Gateway** for centralized API access
  
* **Business Service** for core business functionality
  
* **Multi-Agent AI chatbot**
  
* **Company Agent**
  
* **Industry Agent**
  
* **Appointment Agent**
  
* **Chat Orchestrator** for intelligent agent routing
  
* **Groq LLM integration**
  
* **Backend JSON data as the source of truth**
  
* **Industry-specific AI use cases**
  
* **Contact and appointment management**
  
* **Resend email integration**
  
* **REST APIs**
  
* **Spring Boot Actuator health endpoints**
---
## 🛠️ Technology Stack

## Frontend

**React**

**Vite**

**JavaScript**

**HTML**

**CSS**

## Backend

**Java 17**

**Spring Boot**

**Spring Cloud Gateway**

**Maven**

**REST APIs**

## AI

**Groq API**

**LLM-based multi-agent architecture**

**Custom agent orchestration**

**Data**

**JSON-based business datasets**

**In-memory backend data loading**

## Communication

**REST**

**HTTP**

**JSON**

---
## 🤖 Multi-Agent Chatbot Architecture

The chatbot is implemented inside the Business Service.

Instead of using one large chatbot component, the system separates responsibilities into specialized agents.

                         User Message
                              │
                              ▼
                     ┌─────────────────┐
                     │ ChatController  │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │ChatOrchestrator │
                     └────────┬────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
       ┌────────────┐  ┌────────────┐  ┌───────────────┐
       │  Company   │  │  Industry  │  │ Appointment   │
       │   Agent    │  │   Agent    │  │    Agent      │
       └─────┬──────┘  └──────┬─────┘  └───────┬───────┘
             │                │                 │
             ▼                ▼                 ▼
       company.json     industries.json    Appointment/
                                             Contact APIs
             │                │                 │
             └────────────────┼─────────────────┘
                              │
                              ▼
                       ┌─────────────┐
                       │ GroqService │
                       └──────┬──────┘
                              │
                              ▼
                         Groq API

---
## 🧠 AI Agents

**1. Company Agent**

The Company Agent handles questions related to HamaraShops.ai.

**Example questions**

Who is the CEO of HamaraShops.ai?

What is the mission of HamaraShops.ai?

What is the vision of the company?

Tell me about HamaraShops.ai.

**Data Source**

The Company Agent retrieves company information from:

company.json
      
      ↓

ContentDataStore
      
      ↓

CompanyAgentImpl
      
      ↓

GroqService

The agent does not need to manually duplicate company information inside the Java code.

This keeps the backend data as the source of truth.

---

## 🏭 2. Industry Agent

The Industry Agent handles industry-specific AI and Generative AI questions.
Supported industries are loaded from the backend industry dataset.

**Examples include:**

Retail
Financial Services
Media & Entertainment
Healthcare & Life Sciences
Manufacturing

**Example questions**

How can AI help retail?

Tell me about healthcare and life sciences.

What are AI use cases in manufacturing?

How can Generative AI help financial services?

**Data Flow**

industries.json

      ↓

BusinessContentServiceImpl

      ↓

IndustryService
      
      ↓

IndustryAgentImpl
      
      ↓

Selected Industry Data
      
      ↓

GroqService
      
      ↓

AI Response

The Industry Agent sends only the selected industry's information to the Groq model rather than sending the complete industry dataset.

This helps reduce unnecessary prompt size and API token usage.

---

## 📅 3. Appointment Agent

The Appointment Agent handles appointment and meeting-related requests.

**Example requests**

I want to schedule an appointment.

I want to book a meeting with HamaraShops.ai.

I would like to talk to the company.

Can I schedule a consultation?

The Appointment Agent works with the existing appointment/contact functionality in the Business Service.

**Appointment Flow**

User
  
  │
  ▼

ChatController
  
  │
  ▼

ChatOrchestrator
  
  │
  ▼

Appointment Agent
  
  │
  ▼

Appointment / Contact functionality
  
  │
  ▼

Resend Email Service
  
  │
  ▼

Appointment notification

---

## 🎯 Chat Orchestrator

The ChatOrchestrator acts as the central coordinator for the chatbot.

Its responsibility is to determine which specialized agent should handle the user's request.

                    User Message
                        
                         │
                         ▼
                ChatOrchestrator
                         
                         │
            ┌────────────┼────────────┐
            │            │            │
            ▼            ▼            ▼
        Company       Industry    Appointment
         Agent          Agent        Agent

This approach separates responsibilities and makes the chatbot easier to maintain and extend.

---

## 🔗 API Architecture

All frontend requests are routed through the API Gateway.

React Frontend
      
      │
      ▼

API Gateway
   Port 8080
      
      │
      ▼

Business Service
   Port 8082

The gateway exposes the backend APIs under:
/api/v1/**

---

## 📡 Main API Endpoints

**Company**

GET /api/v1/company

Returns HamaraShops.ai company information.

---

## Industries

**Get all industries**

GET /api/v1/industries

**Get industry by slug**

GET /api/v1/industries/{slug}

**Example:**

GET /api/v1/industries/retail

---

## Chatbot

POST /api/v1/chat

Example request:

{
  
  "message": "How can AI help retail?"

}


Example response:

{

  "agent": "Industry Agent",
  
  "response": "..."

}

---

## Contact

GET  /api/v1/contact

POST /api/v1/contact/inquire

POST /api/v1/contact/appointment

---

## 📂 Project Structure

HamaraShops-AI/
│
├── api-gateway/
│   │
│   └── src/
│       └── main/
│           ├── java/
│           └── resources/
│
├── business-service/
│   │
│   └── src/
│       └── main/
│           │
│           ├── java/
│           │   └── com/
│           │       └── hamarashops/
│           │           └── business/
│           │
│           │               ├── ai/
│           │               │   ├── controller/
│           │               │   │   └── ChatController
│           │               │   │
│           │               │   ├── model/
│           │               │   │
│           │               │   └── service/
│           │               │       ├── CompanyAgent
│           │               │       ├── CompanyAgentImpl
│           │               │       ├── IndustryAgent
│           │               │       ├── IndustryAgentImpl
│           │               │       ├── AppointmentAgent
│           │               │       ├── ChatOrchestrator
│           │               │       └── GroqService
│           │               │
│           │               ├── controller/
│           │               │   ├── CompanyController
│           │               │   ├── IndustryController
│           │               │   └── ContactController
│           │               │
│           │               ├── content/
│           │               │   └── service/
│           │               │       ├── ContentDataStore
│           │               │       └── ContentService
│           │               │
│           │               ├── model/
│           │               │   ├── CompanyContent
│           │               │   ├── Industry
│           │               │   └── other models
│           │               │
│           │               └── service/
│           │                   ├── IndustryService
│           │                   └── impl/
│           │                       └── BusinessContentServiceImpl
│           │
│           └── resources/
│               │
│               └── data/
│                   ├── company.json
│                   ├── industries.json
│                   ├── careers.json
│                   └── other data files
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md

---

## 🔄 Backend Data as the Source of Truth

One of the important design principles of the project is that the chatbot should use the same backend data that powers the website.

**For example:**

                  industries.json
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
       Industry API          Industry Agent
             │                     │
             ▼                     ▼
       React Website          GroqService

This avoids maintaining separate copies of industry information in the frontend and chatbot.

Similarly:

company.json
     
     │
     ▼
ContentDataStore
     
     │
     ├──────────────► Company API
     │
     └──────────────► Company Agent

---

## 🧩 Business Service

The Business Service is the main backend application.

It contains:

Company information

Industry information

Content management

Contact functionality

Appointment functionality

AI chatbot

Multi-agent orchestration

Groq integration

The project intentionally keeps these capabilities within the Business Service rather than creating separate services for each feature.

---

## 🌐 Frontend

The frontend is built using:

**React**

**Vite**

**JavaScript**

**REST API integration**

The website includes pages for:

Home

About

Industries

AI Use Cases

AI Architecture

Business Value

Contact

Schedule Appointment

Company Profile

AI Chatbot

The frontend communicates with the backend through the API Gateway.

---

## 🔐 Configuration

The application uses environment variables for sensitive configuration.

**Example:**

GROQ_API_KEY

RESEND_API_KEY

RESEND_FROM

Sensitive API keys should not be committed to GitHub.

Use environment variables or a local .env configuration where appropriate.

---

## 🤖 Groq Integration

The AI agents use GroqService to communicate with the Groq API.

**The general flow is:**

User Question

      ↓

ChatOrchestrator
      
      ↓

Specialized Agent
      
      ↓

Backend Data
      
      ↓

GroqService
      
      ↓

Groq API
      
      ↓
      
AI Response

The agents provide relevant backend information to the language model so that responses remain grounded in the application's data.

---

## 🛡️ AI Response Rules

The agents are designed to:

Use backend data as the primary source

Avoid inventing company information

Avoid guessing missing information

Avoid inventing customers or partnerships

Avoid inventing revenue or employee numbers

Avoid inventing business results

Distinguish potential AI use cases from measured outcomes

Keep responses relevant to the selected agent

Redirect company questions to the Company Agent

Redirect industry questions to the Industry Agent

Redirect appointment requests to the Appointment Agent

---

## 🏃 Running the Project Locally

**Prerequisites**

**Install:**

**Java 17**

**Maven**

**Node.js**

**npm**

**Git**

## 1. Clone the Repository

git clone https://github.com/bhavanimadhikuntla/HamaraShops-AI.git

cd HamaraShops-AI

## 2. Start Business Service

Open a terminal:

cd business-service

**Run:**

mvn spring-boot:run

Business Service runs on:http://localhost:8082

## 3. Start API Gateway

Open another terminal:

cd api-gateway

**Run:**

mvn spring-boot:run

API Gateway runs on:http://localhost:8080

## 4. Start Frontend

Open another terminal:

cd frontend

**Install dependencies:**

npm install

Start the development server:

npm run dev

The frontend normally runs on: http://localhost:5173

---

## 🧪 Testing the Chatbot

Once the Business Service is running, the chatbot can be tested using the API.

**Example:**

POST http://localhost:8082/api/v1/chat

Request:

{
  "message": "Who is the CEO of HamaraShops.ai?"
}

**Industry example:**

{
  "message": "How can AI help retail?"
}

**Appointment example:**

{
  "message": "I want to schedule an appointment"
}

---

## 🔍 Example Chatbot Interactions

**Company Agent**

**User**

Who is the CEO of HamaraShops.ai?

**Agent**

Dheerendar Srivastav is the Founder & Chief Executive Officer of HamaraShops.ai.

---

## Industry Agent

**User**

How can AI help retail?

**Agent**

The Industry Agent retrieves the retail information from the backend industry dataset and generates a response based on that information.

---

## Appointment Agent

**User**

I want to schedule an appointment.

**Agent**

The request is handled by the Appointment Agent and the appointment workflow is initiated.

---

## 📊 Architecture Principles

**1. Separation of Responsibilities**

Each AI agent has a specific responsibility.

Company Agent       → Company questions

Industry Agent      → Industry questions

Appointment Agent   → Appointment requests

**2. Single Source of Truth**

Business information is maintained in backend datasets and services.

Backend Data

     ↓

APIs
     
     ↓

Frontend

Backend Data

     ↓

AI Agents

     ↓
Chatbot

**3. Centralized API Access**

The frontend communicates with the backend through the API Gateway.

Frontend
   
   ↓

API Gateway

   ↓

Business Service

**4. Modular AI Design**

New specialized agents can be added later without replacing the complete chatbot architecture.

**For example:**

ChatOrchestrator
      │
      ├── Company Agent
      ├── Industry Agent
      ├── Appointment Agent
      │
      └── Future Specialized Agents

---

## 📜 License & Acknowledgments

Distributed under the **MIT License**. See `LICENSE` for details.

Developed with ❤️ by **Bhavani (Full Stack Java Developer)**.
