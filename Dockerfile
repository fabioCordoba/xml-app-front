# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Etapa 2: Servir la aplicación usando Nginx
FROM nginx:alpine

# Elimina la config por defecto de Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copiar tu config personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist/demo-xml-app /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
