// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.ngrok-free.app',
        port: '', // Puedes dejarlo vacío si no tienes un puerto específico
        pathname: '/images/**', // Ajusta el pathname si es necesario
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
        pathname: '/**',
      },
      {
        protocol: 'http', // Agregar el protocolo http
        hostname: 'localhost', // Hostname del servidor local
        port: '3001', // Puerto de tu backend
        pathname: '/images/**', // Ruta donde están tus imágenes
      },
    ],
  },
  // Configuración de variables de entorno
  env: {
    API_URL: process.env.API_URL,  // Define una URL predeterminada si no está configurada
  },
};

export default nextConfig;
