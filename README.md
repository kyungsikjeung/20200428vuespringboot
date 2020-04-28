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
## Mysql 설치
설치 가이드 링크 
```properties
https://blog.naver.com/tipsware/221303627201

TEST DB SETTING
PORT:7830
ID:root
PW:7830
스키마명:test

샘플 테이블
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(128) COLLATE utf8_bin NOT NULL DEFAULT '',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_bin

```


## Commands
-  `mvn install` : frontend, backend install
- Use `mvn test` : 테스트 건너 뛰기로 함
- Use `mvn spring-boot:run` 백엔드 시작
- Use `npm run serve` inside the `front-end` directory to start the front-end
- Use `java -jar target/app-0.0.1-SNAPSHOT.jar` to start the bundled application
