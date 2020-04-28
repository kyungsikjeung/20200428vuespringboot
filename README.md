# TaskAgile

Open source task management tool built with Vue.js 2, Spring Boot 2, and MySQL 5.7+

## Local development

Create `src/main/resources/application-dev.properties` with the following settings to override the settings in `application.properties`.

```properties
server.port = 8088

logging.level.org.springframework.jdbc.core.JdbcTemplate=DEBUG
logging.level.org.springframework.jdbc.core.StatementCreatorUtils=TRACE

spring.datasource.url=jdbc:mysql://localhost:7830/test?useUnicode=yes&characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=7830

logging.level.com.jks.firstweb=DEBUG
```

## Commands
- 
-  `mvn install` : frontend, backend install
- Use `mvn test` : 테스트 건너 뛰기로 함
- Use `mvn spring-boot:run` to start the back-end
- Use `npm run serve` inside the `front-end` directory to start the front-end
- Use `java -jar target/app-0.0.1-SNAPSHOT.jar` to start the bundled application
