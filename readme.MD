Online course Rest APIs and Database design

#### Used technologies:
* Nodejs
* Expressjs
* MongoDB
* Docker

#### Setup
* Enter folder path
* Open command
Run:
```sh
docker-compose up -d
```

#### Explanation

The application was dockerized and orchestrated with docker-compose. MongoDB runs on docker.

Database design was done on mongoose with code first approach. 
Created 'course', 'lesson', 'chapter' and 'page' schemas in the /models folder of the application.

![db-design](https://user-images.githubusercontent.com/47754791/155860710-e3c6fba1-fe37-4b93-8450-4b0d14005dba.png)


The "One-to-Squillions" approach was preferred for relationships between models, since there could be a lot of data on the 'many' side.
 >Arrays should not grow without bound. If there are more than a couple of hundred documents on the "many" side, don't embed them; if there are more than a few thousand documents on the "many" side, don't use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed 
 https://www.mongodb.com/developer/article/mongodb-schema-design-best-practices/

#### Rest APIs

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| http://localhost/api/courses | `POST` | {"name": "HB Course Name","identifier": "HB Identifier", "language": "US","description": "HB Description","photo": { "title": "Photo Title","data": "Photo Data"}} | Create a new course. |
| http://localhost/api/lessons | `POST` | {"name": "HB Lessons Name", "description": "HB Lessons", "photo": { "title": "Photo Lessons Title", "data": "Photo Lessons Data"}, "course_id": "course_id"} | Create a new lesson. |
| http://localhost/api/chapters | `POST` | {"name": "HB Chapters Name","photo": {"title": "Photo Chapters Title","data": "Photo Chapters Data"},"lesson_id": "lesson_id"} | Create a new chapter. |
| http://localhost/api/pages | `POST` | {"components": [{"photo": "HB Components Photo","video": "HB Components Video","paragraph": "HB Components Paragraph", "text_input": "HB Components Text input"},{"photo": "HB Components Photo2","video": "HB Components Video2","paragraph": "HB Components Paragraph2","text_input": "HB Components Text input2"}],"chapter_id": "chapter_id"} | Create a new page. |
