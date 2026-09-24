# HamaraShops.ai — Enterprise Microservices Platform

[![Java 17](https://img.shields.io/badge/Java-17-orange.svg?style=flat-square&logo=openjdk)](https://adoptium.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.0-brightgreen.svg?style=flat-square&logo=springboot)](https://spring.io/projects/spring-boot)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-2025.1.2-blue.svg?style=flat-square&logo=spring)](https://spring.io/projects/spring-cloud)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Google Cloud Run](https://img.shields.io/badge/GCP-Cloud%20Run-4285F4.svg?style=flat-square&logo=googlecloud)](https://cloud.google.com/run)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**HamaraShops.ai** is an enterprise-grade full-stack platform featuring an event-driven Java 17 Spring Boot microservices backend and a modern React 19 single-page application (SPA) frontend. Built for high performance, fault isolation, and cloud-native scalability, the architecture decouples domain capabilities into autonomous services orchestrated via a Spring Cloud WebFlux API Gateway and deployed serverlessly on Google Cloud Run.

---

## 🏗 System Architecture

```
                         ┌─────────────────────────┐
                         │        USER / CLIENT    │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │    HAMARASHOPS WEBSITE  │
                         │      React + Vite        │
                         └────────────┬────────────┘
                                      │
                              REST / HTTP API
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       API GATEWAY       │
                         │       Spring Boot       │
                         └────────────┬────────────┘
                                      │
                         ┌────────────┴────────────┐
                         │                         │
                         ▼                         ▼
              ┌─────────────────────┐   ┌─────────────────────┐
              │   BUSINESS SERVICE   │   │     AI SERVICE      │
              │     Spring Boot      │   │ Python + LangGraph  │
              └──────────┬──────────┘   │ LangChain + Groq    │
                         │              └──────────┬──────────┘
                         │                         │
             ┌───────────┼───────────┐             ▼
             │           │           │    ┌─────────────────────┐
             ▼           ▼           ▼    │  ChatOrchestrator   │
        ┌────────┐ ┌──────────┐ ┌────────┐│   Agent Router      │
        │Industry│ │ Content  │ │Contact/│└──────────┬──────────┘
        │  APIs  │ │   APIs   │ │Appoint.│           │
        └────────┘ └──────────┘ └────────┘           │
                                                     │
                                  ┌──────────────────┼──────────────────┐
                                  │                  │                  │
                                  ▼                  ▼                  ▼
                         ┌────────────────┐ ┌────────────────┐ ┌─────────────────┐
                         │ Industry Agent │ │ Company Agent  │ │ Appointment     │
                         │                │ │                │ │ Agent           │
                         └───────┬────────┘ └───────┬────────┘ └────────┬────────┘
                                 │                  │                   │
                                 ▼                  ▼                   ▼
                           Industry Data      Company Data       Appointment API
                                                                        │
                                                                        ▼
                                                               Appointment Created
```

---

## ✨ Key Architectural Highlights

- **Single Public Ingress**: All client traffic passes through the Spring Cloud API Gateway, masking internal microservice topographies.
- **Direct HTTP Architecture**:
  - `Local Development`: High-throughput direct HTTP routing from the API Gateway (`:8080`) to downstream microservices (`:8081`, `:8082`, `:8083`).
  - `Cloud Run Production`: Directly leverages Google Cloud Run native ingress with environment-variable driven service URLs (`CONTENT_SERVICE_URL`, `BUSINESS_SERVICE_URL`, `CONTACT_SERVICE_URL`).
- **Reactive CORS WebFilter**: Global cross-origin configuration managing preflight `OPTIONS` requests, custom allowed origins, and header policies.
- **Modern React 19 Client**: High-speed frontend built with Vite 5.4, Tailwind CSS, Lucide icons, Framer Motion animations, and GPU-accelerated WebGL hero canvas shaders.
- **Centralized Axios Interceptors**: Unified HTTP client with automatic response unwrapping and global error telemetry handling.
- **Multi-Stage Docker Packaging**: Lightweight container builds using Eclipse Temurin 21 JRE Alpine (~160MB) for Spring Boot and Nginx Alpine (~25MB) for the React SPA.

---

## 📁 Repository Directory Structure

```
HamaraShops-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
|
├── api-gateway/
│    ├── src/
│    └── pom.xml
│
├── business-service/
│     ├── src/
│ │     └── main/
│ │         └── java/
│ │            └── com/
│ │               └── hamarashops/
│ │                     └── business/
│ │                           ├── content/
│ │                           ├── industry/
│ │                           └── contact/
│ └── pom.xml
│ ├── ai-service/
│ ├── agents/
│ ├── orchestrator/
│ ├── graph/
│ ├── models/
│ ├── services/
│ ├── app.py
│ ├── requirements.txt
│ └── .env
│
└── README.md
```
---
🤖 Multi-Agent AI Architecture

The AI service uses specialized agents rather than relying on a single general-purpose agent.

The ChatOrchestrator acts as the central coordination layer.

It analyzes the user's request and routes it to the appropriate specialized agent.

                         User Query
                             │
                             ▼
                    ChatOrchestrator
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          Industry        Company      Appointment
            Agent          Agent          Agent

🧠 Agents
## 🛠 Technology Stack Details

### Backend Stack
- **Java**: JDK 17 (Eclipse Temurin)
- **Framework**: Spring Boot `4.1.0`
- **Cloud Infrastructure**: Spring Cloud `2025.1.2` (Gateway WebFlux, LoadBalancer, Actuator)
- **Build Tool**: Apache Maven `3.9.9`

### Frontend Stack
- **Library**: React `19.0.0`
- **Build Tool**: Vite `5.4.11`
- **Routing**: React Router DOM `7.1.5`
- **HTTP Client**: Axios `1.7.9`
- **Styling & UI**: Tailwind CSS `3.4.17`, Framer Motion `12.4.3`, Lucide Icons `0.475.0`
- **Production Web Server**: Nginx Alpine
### AI Service
-Python
-LangChain
-LangGraph
-Groq
-LLM-based agent orchestration

---

## 🚦 API Endpoints Reference

| Microservice | HTTP Method | Gateway Endpoint Path | Description |
| :--- | :---: | :--- | :--- |
| **Business Service** | `GET` | `/api/v1/products` | Returns list of AI Product Suite offerings |
| **Business Service** | `GET` | `/api/v1/products/{slug}` | Returns detailed product profile by slug |
| **Business Service** | `GET` | `/api/v1/solutions` | Returns industry solution blueprints |
| **Business Service** | `GET` | `/api/v1/services` | Returns enterprise consulting & integration services |
| **Business Service** | `GET` | `/api/v1/case-studies` | Returns customer success stories & benchmarks |
| **Business Service**| `GET` | `/api/v1/industries` | Returns active industry vertical solutions |
| **Business Service**| `GET` | `/api/v1/careers` | Returns open engineering & AI job opportunities |
| **Contact Service** | `POST`| `/api/v1/contact/inquire` | Accepts inquiry form submission & returns tracking receipt ID |

---

## 💻 Local Development Quickstart

### Prerequisites
- **JDK 17** or later installed
- **Node.js 20+** and **npm 10+** installed
- **Apache Maven 3.9+** installed

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/HamaraShops-Ai.git
cd HamaraShops-Ai
```

### 2. Start Backend Microservices (Exact Order)
Open separate terminal tabs for each service (or start in Spring Tool Suite):
```bash
# 1. Content Service (Port 8081)
cd content-service && mvn spring-boot:run

# 2. Business Service (Port 8082)
cd business-service && mvn spring-boot:run

# 3. Contact Service (Port 8083)
cd contact-service && mvn spring-boot:run

# 4. API Gateway (Port 8080)
cd api-gateway && mvn spring-boot:run
```

### 3. Start React Frontend
```bash
# 5. Frontend (Port 5173)
cd frontend
npm install
npm run dev
```
*Frontend local server runs at `http://localhost:5173`*

---

## 🐳 Docker & Cloud Run Deployment

### Building Docker Images Locally
Each microservice and the frontend contains a production-ready `Dockerfile`:
```bash
# Build API Gateway Container Image
docker build -t hamarashops/api-gateway:latest ./api-gateway

# Build Frontend Container Image
docker build -t hamarashops/frontend:latest ./frontend
```

### Deploying to Google Cloud Run via gcloud CLI
```bash
# 1. Authenticate with GCP
gcloud auth configure-docker asia-south1-docker.pkg.dev

# 2. Remote Build using Google Cloud Build
gcloud builds submit --tag asia-south1-docker.pkg.dev/hamarashops-ai/hamarashops-repo/api-gateway:v1.0.0 ./api-gateway

# 3. Deploy API Gateway to Cloud Run
gcloud run deploy api-gateway \
  --image asia-south1-docker.pkg.dev/hamarashops-ai/hamarashops-repo/api-gateway:v1.0.0 \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars SPRING_PROFILES_ACTIVE=cloud
```

---

## 📜 License & Acknowledgments

Distributed under the **MIT License**. See `LICENSE` for details.

Developed with ❤️ by **Gorantla Charan Ranga (Full Stack Java Developer)**.
