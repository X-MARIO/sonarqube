# TypeScript Калькулятор с интеграцией SonarQube

Простой проект калькулятора на TypeScript с настроенной интеграцией SonarQube для анализа качества кода.

## Предварительные требования

- Node.js и npm
- Java (требуется для SonarQube)
- Docker (опционально, для запуска SonarQube в контейнере)

## Установка

1. Клонируйте репозиторий:
```bash
git clone [URL репозитория]
cd react-sonarqube
```

2. Установите зависимости:
```bash
npm install
```

3. Установите SonarScanner глобально:
```bash
npm install -g sonar-scanner
```

## Настройка SonarQube

### Вариант 1: Использование Docker (рекомендуется)

1. Запустите SonarQube сервер через Docker:
```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

2. Откройте браузер и перейдите по адресу `http://localhost:9000`
   - Логин по умолчанию: `admin`
   - Пароль по умолчанию: `admin`
   - После первого входа система попросит сменить пароль

3. Создайте новый проект в SonarQube:
   - Перейдите в "Create new project"
   - Введите Project Key: `typescript-calculator`
   - Следуйте инструкциям на экране

4. Получите токен доступа:
   - В настройках проекта найдите раздел "Security"
   - Сгенерируйте новый токен
   - Сохраните токен (он понадобится позже)

### Вариант 2: Использование SonarCloud

1. Зарегистрируйтесь на [SonarCloud](https://sonarcloud.io)
2. Создайте новую организацию
3. Создайте новый проект
4. Получите токен доступа в настройках организации

## Настройка проекта для сканирования

1. Создайте файл с переменными окружения:
```bash
echo "SONAR_TOKEN=ваш_токен" > .env
```

2. Обновите файл `sonar-project.properties`:
```properties
# Для локального SonarQube
sonar.host.url=http://localhost:9000

# Для SonarCloud
# sonar.host.url=https://sonarcloud.io
# sonar.organization=ваша_организация

sonar.login=${env.SONAR_TOKEN}
```

## Запуск анализа

1. Соберите проект:
```bash
npm run build
```

2. Запустите анализ:
```bash
npm run sonar
```

## Просмотр результатов

- Для локального SonarQube: откройте `http://localhost:9000/dashboard?id=typescript-calculator`
- Для SonarCloud: перейдите в ваш проект на sonarcloud.io

## Устранение проблем

### Распространенные ошибки

1. "Could not find a SonarQube server":
   - Убедитесь, что SonarQube сервер запущен
   - Проверьте правильность URL в конфигурации

2. "Not authorized":
   - Проверьте правильность токена
   - Убедитесь, что токен добавлен в переменные окружения

3. "Project not found":
   - Проверьте правильность Project Key
   - Убедитесь, что проект создан в SonarQube/SonarCloud

## Дополнительная информация

- [Официальная документация SonarQube](https://docs.sonarqube.org/)
- [Документация SonarScanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/) # sonarqube
