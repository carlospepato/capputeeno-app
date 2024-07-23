import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { measureMemory } from "vm";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export async function CreateProduct(server: FastifyInstance) {
  server.withTypeProvider<ZodTypeProvider>().post('/product', {
    schema:{
      body:z.object({
        name: z.string(),
        description: z.string(),
        image_url: z.string(),
        category: z.string(),
        price: z.number()
      }),
      response:{
        200:z.object({
          message: z.string(),
          id: z.string()
        }),
        404: z.object({
          message: z.string()
        }),
      }
    }

  }, async (request, reply) => {
      const {name, category, description, image_url, price} = request.body;
      const product = await prisma.product.create({
        data:{
          name,
          category,
          description,
          image_url,
          price
        }
      });
      if (product) {
        reply.status(200).send({message: 'Product created', id: product.id});
      } else {
        reply.status(404).send({message: 'Product not created'});
      }
  });
}