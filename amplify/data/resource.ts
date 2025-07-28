import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== AZNATURE ECOMMERCE SCHEMA ==========================================
Sugar cane drinking straws ecommerce website schema
=========================================================================*/
const schema = a.schema({
  Product: a
    .model({
      name: a.string().required(),
      description: a.string(),
      shortDescription: a.string(),
      price: a.float().required(),
      compareAtPrice: a.float(),
      sku: a.string().required(),
      category: a.enum(["straight", "bent", "mixed", "custom"]),
      type: a.enum(["individual", "bulk", "wholesale"]).default("individual"),
      length: a.string(), // e.g., "20cm", "25cm"
      diameter: a.string(), // e.g., "6mm", "8mm"
      color: a.string(), // natural, colored variants
      material: a.string().default("100% sugar cane"),
      inventory: a.integer().default(0),
      images: a.string().array(),
      features: a.string().array(),
      specifications: a.json(),
      isActive: a.boolean().default(true),
      isFeatured: a.boolean().default(false),
      tags: a.string().array(),
      seoTitle: a.string(),
      seoDescription: a.string(),
      weight: a.float(), // for shipping calculations
      dimensions: a.json(), // {length: 20, width: 1, height: 1}
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Category: a
    .model({
      name: a.string().required(),
      slug: a.string().required(),
      description: a.string(),
      image: a.string(),
      isActive: a.boolean().default(true),
      sortOrder: a.integer().default(0),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  CartItem: a
    .model({
      productId: a.id().required(),
      quantity: a.integer().required(),
      sessionId: a.string().required(), // for guest users
      userId: a.string(), // for authenticated users
      selectedOptions: a.json(), // color, size variations
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Order: a
    .model({
      orderNumber: a.string().required(),
      status: a.enum(["pending", "processing", "shipped", "delivered", "cancelled"]).default("pending"),
      items: a.json().required(), // array of order items
      subtotal: a.float().required(),
      tax: a.float().default(0),
      shipping: a.float().default(0),
      total: a.float().required(),
      currency: a.string().default("USD"),
      customerEmail: a.string().required(),
      customerName: a.string().required(),
      customerPhone: a.string(),
      shippingAddress: a.json().required(),
      billingAddress: a.json(),
      paymentMethod: a.string(),
      paymentStatus: a.enum(["pending", "paid", "failed", "refunded"]).default("pending"),
      notes: a.string(),
      trackingNumber: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  NewsletterSubscription: a
    .model({
      email: a.string().required(),
      isActive: a.boolean().default(true),
      tags: a.string().array(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  ContactInquiry: a
    .model({
      name: a.string().required(),
      email: a.string().required(),
      phone: a.string(),
      company: a.string(),
      subject: a.string().required(),
      message: a.string().required(),
      status: a.enum(["new", "in_progress", "resolved"]).default("new"),
      type: a.enum(["general", "wholesale", "partnership", "support"]).default("general"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
