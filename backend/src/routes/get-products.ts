import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export async function GetProducts(server: FastifyInstance){
  server.withTypeProvider<ZodTypeProvider>().get('/products', {
    schema:{
      response:{
        200: z.object({
          products: z.array(z.object({
            id: z.string(),
            name: z.string(),
            price: z.number(),
            description: z.string(),
            image_url: z.string(),
            category: z.string()
          }))
        }),
        400: z.object({
          message: z.string()
        }),
      },
    }
  }, async (request, reply) => {
    const products = await prisma.product.findMany();
    if (products.length > 0) {
      reply.status(200).send({products: products});
    } else {
      reply.status(404).send({ message: 'No products found' });
    }
  });
}