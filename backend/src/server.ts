import Fastify from 'fastify';
import cors from '@fastify/cors'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { GetProducts } from './routes/get-products.js';
import { CreateProduct } from './routes/create-product.js';

const server = Fastify({logger: true});
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

await server.register(cors,{
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

server.register(GetProducts)
server.register(CreateProduct)


await server.listen({port: 3333}).then(() => {
  console.log('Server listening on port 3333');
});