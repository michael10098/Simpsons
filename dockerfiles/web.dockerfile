# Use the latest LTS version of Node.js
FROM node:24
 
# Set the working directory inside the container
WORKDIR /app
 
# Install Python and its package manager pip, along with build tools for scikit-learn dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY ./web/requirements.txt ./
RUN pip install --no-cache-dir --break-system-packages -r requirements.txt

# Copy package.json and package-lock.json
COPY ./web/package*.json ./
 
# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY ./web .

# Expose the port your app runs on
EXPOSE 3000
 
# Define the command to run your app
CMD ["sh", "run.sh"]
