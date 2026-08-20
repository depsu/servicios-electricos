import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Equipo Editorial'),
        // La portada vive en src/assets/blog: Astro la sirve en webp y con
        // varios tamaños. Antes era una URL de Unsplash servida desde fuera.
        image: image().optional(),
        imageAlt: z.string().optional(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    'blog': blogCollection,
};
