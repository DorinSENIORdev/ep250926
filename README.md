# EP250926 - Company / Employee API

API NestJS cu TypeORM si PostgreSQL pentru relatia 1:N dintre `Company` si `Employee`.

## Pornire cu Docker

```bash
docker compose up --build
```

Swagger: http://localhost:3000/api/docs

## Pornire locala

Necesita PostgreSQL pornit si variabilele din `.env` configurate pentru baza de date locala.

```bash
npm install
npm run start:dev
```

## Endpoint-uri

- `POST /parents`, `GET /parents`, `GET /parents/:id`, `PUT /parents/:id`, `DELETE /parents/:id`
- `POST /children`, `GET /children`, `GET /children/:id`, `PUT /children/:id`, `DELETE /children/:id`

Un `Employee` are `companyId` ca foreign key catre `Company.id`.

## Repository si commituri

```bash
git init
git add .
git commit -m "feat(app): initialize backend project"
```

Pe GitHub creati repository-ul privat `ep250926`, adaugati utilizatorul `sergiuchilat` ca collaborator, apoi:

```bash
git remote add origin https://github.com/<username>/ep250926.git
git branch -M main
git push -u origin main
```

Commiturile ulterioare pot fi separate astfel:

1. `feat(parent): create parent entity + CRUD`
2. `feat(child): create child entity + FK to parent + CRUD`
3. `docs(swagger): add Swagger documentation`
4. `chore(docker): add Dockerfile and docker-compose`
