# Case da desfudência - Me poupe!

> Status: Done ✔️

## Requirements

- Git
- Node.js
- Docker
- Docker Compose

## 🎲 How to run the application:

```bash
# Clone this repository

$ docker-compose up

# Server will run on port:3333 - acesse <http://localhost:3333>
```

### API Endpoints

`GET /cep`
```
Body:

{
    "zipCode": 92325210
}
```
`GET /average`
```
Body:

{
    "firstGrade": 8,
    "secondGrade": 20
}
```
---

contact: felipe.lazzid@gmail.com
