Create a FULL STACK project using React for the frontend, Node.js + Express for the backend, and MySQL as the local database.

The project must be visually and structurally inspired by this repository:
https://github.com/Daniel-Vara/JAES.git

USE:
- The visual style
- CSS organization
- Color palette
- Modern layout structure
- Similar component organization

However, the system itself must be completely new and focused on EVENT AND TASK MANAGEMENT.

==================================================
SYSTEM OBJECTIVE
==================================================

The system must allow users to:

- Create events/tasks
- Edit events
- Delete events
- Search events
- List events
- Mark events as completed
- Mark events as canceled
- Add participants to events

Example:
"Company Party"
Date: 10/20/2026
Location: São Paulo Expo
Description: Annual company event

==================================================
REQUIRED TECHNOLOGIES
==================================================

Frontend:
- React
- React Router
- Axios
- CSS Modules or standard CSS inspired by JAES

Backend:
- Node.js
- Express

Database:
- Local MySQL

==================================================
DATABASE STRUCTURE
==================================================

Use this table as the BASE:

CREATE TABLE jaes_st (
 id INT PRIMARY KEY AUTO_INCREMENT,
 Nome_da_Tarefa VARCHAR(100),
 Data_da_Tarefa DATE,
 Descricao_da_Tarefa VARCHAR(100),
 Responsaveis VARCHAR(150),
 Local_da_Tarefa VARCHAR(150)
);

HOWEVER:
improve the database structure into a more professional relational model.

Create the following tables:

==================================================
1. MAIN EVENTS TABLE
==================================================

events

Fields:
- id
- event_name
- description
- event_date
- event_location
- event_status
- created_at
- updated_at

Status values:
- active
- completed
- canceled

==================================================
2. PARTICIPANTS TABLE
==================================================

participants

Fields:
- id
- name
- age
- event_id (FK)

Relationship:
One event has many participants.

==================================================
3. COMPLETED EVENTS TABLE
==================================================

completed_events

Fields:
- id
- original_event_id
- completion_date
- notes

==================================================
4. CANCELED EVENTS TABLE
==================================================

canceled_events

Fields:
- id
- original_event_id
- cancellation_reason
- cancellation_date

==================================================
RELATIONSHIPS
==================================================

Explain and implement:
- One-to-many relationships
- Primary keys
- Foreign keys
- Relational integrity

==================================================
REQUIRED FEATURES
==================================================

FULL CRUD:

CREATE
- create event
- add participants

READ
- list events
- search by name
- filter by status

UPDATE
- edit events
- edit participants

DELETE
- delete events
- delete participants

==================================================
BACKEND
==================================================

Create:
- REST API routes
- Controllers
- Models
- MySQL configuration
- Real SQL queries
- Organized architecture

Endpoints:
GET /events
GET /events/:id
POST /events
PUT /events/:id
DELETE /events/:id

GET /participants
POST /participants

==================================================
MYSQL INTEGRATION
==================================================

The system MUST work connected to local MySQL.

Use:
- mysql2
- dotenv

Create:
- .env file
- separate database connection
- error handling

==================================================
INTERFACE
==================================================

The interface must:
- Be modern
- Responsive
- Visually inspired by the JAES project
- Use cards
- Have a navbar
- Beautiful dashboard
- Create event page
- Edit event page
- Event details page
- Participants page

==================================================
TECHNICAL EXPLANATION
==================================================

Add comments explaining:
- Database structure
- Relationships
- SQL queries
- Route functions
- Frontend/backend integration

==================================================
EXTRA FEATURES
==================================================

Add:
- Success/error toasts
- Loading states
- Delete confirmation modal
- Real-time search
- Professional folder organization

==================================================
FOLDER STRUCTURE
==================================================

frontend/
backend/

backend:
- routes
- controllers
- models
- config

frontend:
- pages
- components
- services
- styles

==================================================
FINAL OBJECTIVE
==================================================

The project should look like a real professional system for an academic Database Systems Development presentation.

The code must be clean, organized, modern, and easy to explain during the technical presentation.
