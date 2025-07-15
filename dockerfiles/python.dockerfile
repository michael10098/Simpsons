FROM python:3.9.23-slim-bullseye

WORKDIR /app

COPY ./python/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3000

CMD [ "python", "./Simpsons_Test.py" ]