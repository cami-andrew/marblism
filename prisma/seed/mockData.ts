import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ae079684-9d26-44db-bdab-80489cf79d79', '1Melba.Hoppe91@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv789ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ae37d908-0fa2-47ba-ad23-54e8254bf405', '19Haleigh14@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv456def', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('63ae1614-f9c7-458b-801a-5347bc2be609', '28Nona_Moore90@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv123abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a851797f-1dfd-41bd-8285-e63b1ea15f3f', '37Noemy21@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv012jkl', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('cea98e61-a51f-4f80-9ec0-2c0a8d0bee04', '46Buck70@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv123abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab', '55Ashton_Waelchi@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv123abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('0c035e1e-c2ff-45d9-8d44-c71e7f4e7857', '64Josie_Reinger@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv345mno', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('d597d165-40fa-4887-92fa-7841e3dafd56', '73Zoey.Roob-Kozey81@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv012jkl', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('fe0be2a7-5e15-4421-bf7c-68be9cb8f862', '82Lue_Trantow96@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv123abc', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('dbe0c7bd-d145-4ae5-bb78-73282b180f08', 'm0n1o2p3q4r5s6t7u8v9', '{"celer":"suasoria","caveo":"deludo","pecco":"coadunatio","vel":"averto","approbo":"angulus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4efcaec9-25e3-4b27-b3d0-49b73063d5d0', 'p0o9n8m7l6k5j4i3h2g1', '{"voluptatem":"aegrotatio","bestia":"compono","error":"virgo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('68a5a01e-e6fa-4b28-ad06-aed2989f517d', 'a1b2c3d4e5f6g7h8i9j0', '{"terror":"vehemens","decor":"solitudo","ambitus":"tremo","hic":"creber"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('74c4cd58-ab7d-4749-9911-50df94adc98e', 'm0n1o2p3q4r5s6t7u8v9', '{"vomer":"agnitio","cauda":"adinventitias","maiores":"audax"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('be58cd93-81ce-42d0-bbd1-5fc74de0be15', 'f1e2d3c4b5a6z7y8x9w0', '{"dicta":"ademptio","desino":"credo","civitas":"cognatus","conforto":"arcus","coniecto":"tactus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2c438682-ff96-4e03-89d9-d60d409a37d7', 'z9y8x7w6v5u4t3s2r1q0', '{"delego":"ater","tremo":"excepturi","creta":"crebro"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6d6a3d92-2ac2-4b01-aa30-cf6a9aad1bfa', 'f1e2d3c4b5a6z7y8x9w0', '{"tonsor":"uberrime","conturbo":"doloribus","tergum":"cunctatio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ff684b36-6d55-403e-8f51-ac46e0cb1793', 'p0o9n8m7l6k5j4i3h2g1', '{"universe":"sortitus","talio":"reprehenderit","adsidue":"utrum","vulgus":"dolor"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c8fd1a01-c9b3-4622-8ff6-ff39915ca6c3', 'a1b2c3d4e5f6g7h8i9j0', '{"caste":"defluo","vulgivagus":"virtus","vinitor":"aliqua"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('c0749376-6bc6-4cae-8551-3e06dbd8411c', 'f1e2d3c4b5a6z7y8x9w0', '{"quos":"vallum","terra":"deleo","accusantium":"consequuntur"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('36de6b47-d94e-44dd-bef6-3f1d79a08e32', 'Tail Waggers Therapy', 'https://i.imgur.com/YfJQV5z.png?id=122');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('eb88d1a4-8559-4c6d-bb62-09537dff274f', 'Pawsitive Vibes', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a27e6344-c49d-4533-baf5-def9f9c9ea14', 'Furry Friends Psychology', 'https://i.imgur.com/YfJQV5z.png?id=128');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('01758487-0fb5-4956-bcaa-a2e8f1982c5d', 'Pawsitive Vibes', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('9c46bcc6-17cf-4f11-be75-d310de33cb05', 'Tail Waggers Therapy', 'https://i.imgur.com/YfJQV5z.png?id=134');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ca8c0e48-1da4-4e35-b240-d0d0bd1cf23c', 'Tail Waggers Therapy', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8a1b94bd-7d68-4106-ac8c-0a87b2896bd3', 'Pet Wellness Center', 'https://i.imgur.com/YfJQV5z.png?id=140');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('51e05b95-d1ee-4eb4-ba15-422833f61272', 'Tail Waggers Therapy', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('20cc1405-bd52-45e4-8cee-d15323a7ff76', 'Pawsitive Vibes', 'https://i.imgur.com/YfJQV5z.png?id=146');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1f809147-fa2e-4c34-858c-82a17e6641c8', 'Pet Wellness Center', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ce41871c-b06d-45f8-ac27-9732a3d92540', 'Pet Psychologist', 'd597d165-40fa-4887-92fa-7841e3dafd56', 'eb88d1a4-8559-4c6d-bb62-09537dff274f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fe9d90d1-71b4-4eec-b8f8-df4fc3ec78c6', 'Animal Behaviorist', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '20cc1405-bd52-45e4-8cee-d15323a7ff76');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('62bdfc0a-b39b-4eaf-9ce3-a1e59f45d678', 'Animal Behaviorist', 'fe0be2a7-5e15-4421-bf7c-68be9cb8f862', 'ca8c0e48-1da4-4e35-b240-d0d0bd1cf23c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ff6e167a-856d-4749-ae94-3794d6fdb625', 'Client Support Specialist', 'ae079684-9d26-44db-bdab-80489cf79d79', '8a1b94bd-7d68-4106-ac8c-0a87b2896bd3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cce98c71-cbb4-4c36-b8fc-266e1a56c6dd', 'Animal Behaviorist', '63ae1614-f9c7-458b-801a-5347bc2be609', '1f809147-fa2e-4c34-858c-82a17e6641c8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('dd4a65a9-5458-4023-b3fe-f24ca99ae2b0', 'Training Consultant', 'ae079684-9d26-44db-bdab-80489cf79d79', '1f809147-fa2e-4c34-858c-82a17e6641c8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('66887a96-b9a7-4ab0-8ffe-70355b7bffa2', 'Client Support Specialist', 'ae079684-9d26-44db-bdab-80489cf79d79', '36de6b47-d94e-44dd-bef6-3f1d79a08e32');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cf11d28c-ef99-45e3-af8b-53e5914a5e96', 'Pet Psychologist', '63ae1614-f9c7-458b-801a-5347bc2be609', '1f809147-fa2e-4c34-858c-82a17e6641c8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('89332d3c-f219-4b2d-a6cd-d34915b12cdf', 'Veterinarian', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '51e05b95-d1ee-4eb4-ba15-422833f61272');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('eb75aae5-8224-4fe4-8e16-8e0a47bfd2e8', 'Pet Psychologist', 'd597d165-40fa-4887-92fa-7841e3dafd56', 'a27e6344-c49d-4533-baf5-def9f9c9ea14');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('7fffd642-ff44-4a45-96c2-e2aae39e5c90', 'httpsexample.comendpoint1', 'subscription_key_3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('893b7dfe-35d8-435d-bcb5-bbf16ab7088d', 'httpsexample.comendpoint3', 'subscription_key_4', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('ceef0962-c08a-4062-80ff-67ee01689f1f', 'httpsexample.comendpoint4', 'subscription_key_3', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d1f12717-5a2a-4252-bce3-59f84c320980', 'httpsexample.comendpoint3', 'subscription_key_3', '63ae1614-f9c7-458b-801a-5347bc2be609');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('b74fb9be-d33b-40a5-8936-2afe4469c97b', 'httpsexample.comendpoint4', 'subscription_key_3', '63ae1614-f9c7-458b-801a-5347bc2be609');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('7f5c0e41-caa4-47f2-8367-750be14de6a7', 'httpsexample.comendpoint1', 'subscription_key_4', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('04bc68e1-2cc4-493e-8f44-a07640c6dcc3', 'httpsexample.comendpoint5', 'subscription_key_3', 'fe0be2a7-5e15-4421-bf7c-68be9cb8f862');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('94829222-53f5-4610-b056-bc39853dea43', 'httpsexample.comendpoint2', 'subscription_key_2', 'ae079684-9d26-44db-bdab-80489cf79d79');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('8b495d3a-7a4a-42e9-ba89-a27608049087', 'httpsexample.comendpoint4', 'subscription_key_2', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d5a1fb85-c13b-44a8-a62f-15db3125b36b', 'httpsexample.comendpoint1', 'subscription_key_3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('488341d2-9e35-4345-abff-3130aead36f3', 'Charlie', 'Cat', 'Labrador Retriever', '2024-06-10T06:40:16.256Z', 'https://i.imgur.com/YfJQV5z.png?id=205');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('c11c3c6f-c292-4191-87f6-bf2af23a547f', 'Lucy', 'Dog', 'Labrador Retriever', '2024-11-01T22:01:40.343Z', 'https://i.imgur.com/YfJQV5z.png?id=211');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('d7bb2edb-baf7-4e37-a6f4-319b05c15ac2', 'Luna', 'Bird', 'Holland Lop', '2023-11-07T05:37:37.934Z', 'https://i.imgur.com/YfJQV5z.png?id=217');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('72a79785-9542-445d-8677-b9c3b0ae9518', 'Luna', 'Dog', 'Syrian', '2024-11-23T11:01:20.684Z', 'https://i.imgur.com/YfJQV5z.png?id=223');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('0e2a6af7-b401-45c3-9ba9-7b5a18885016', 'Charlie', 'Rabbit', 'Labrador Retriever', '2025-01-19T00:45:33.191Z', 'https://i.imgur.com/YfJQV5z.png?id=229');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('61ff6c5e-c60c-4647-9a32-b790473ea6ec', 'Bella', 'Hamster', 'Siamese', '2023-10-12T00:02:57.476Z', 'https://i.imgur.com/YfJQV5z.png?id=235');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('fbbb1321-79c9-49ee-acfd-90d2e5d73c62', 'Bella', 'Bird', 'Syrian', '2024-08-24T23:15:37.403Z', 'https://i.imgur.com/YfJQV5z.png?id=241');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('f277f0ab-f6f3-4361-aaf6-1c4e321b1067', 'Bella', 'Rabbit', 'Siamese', '2023-10-28T09:32:42.958Z', 'https://i.imgur.com/YfJQV5z.png?id=247');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('bfffba7c-b5a5-4288-a8d9-a1fe6bd92a17', 'Charlie', 'Cat', 'Siamese', '2024-10-10T20:34:12.383Z', 'https://i.imgur.com/YfJQV5z.png?id=253');
INSERT INTO "Pet" ("id", "name", "species", "breed", "dateOfBirth", "imageUrl") VALUES ('8b71c86a-ca20-4a19-b5e3-4b662ed566ab', 'Lucy', 'Dog', 'Cockatiel', '2024-03-20T13:02:26.961Z', 'https://i.imgur.com/YfJQV5z.png?id=259');

INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('0a58584c-b966-4fc9-b20c-9da6b6d0aa1a', 'Cat Socialization Survey', 'Survey to assess socialization skills in cats.', '2025-04-10T01:52:37.504Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('d9ffc59f-d92c-47aa-8f64-abf7170d2b61', 'Pet Stress Level Test', 'Evaluation of common behavioral issues in cats.', '2024-06-02T11:37:58.159Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('b33e0caa-e6c9-4f72-a531-0ddffe6ad28c', 'Cat Socialization Survey', 'A comprehensive test to determine anxiety levels in dogs.', '2024-06-01T08:35:42.080Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('167a0b15-bec3-4615-8eef-cd851df911e6', 'Pet Stress Level Test', 'Analyzes obedience and response to commands in dogs.', '2024-02-10T02:25:01.306Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('489bc4d7-4fa6-4ac6-a615-4bc32b617488', 'Feline Behavior Evaluation', 'Evaluation of common behavioral issues in cats.', '2024-03-24T23:26:38.602Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('fbf6320f-0703-4d56-8751-669572809381', 'Dog Obedience Analysis', 'A comprehensive test to determine anxiety levels in dogs.', '2024-11-30T08:39:15.285Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('7794be6f-880e-4e42-9c5b-874a27416568', 'Canine Anxiety Assessment', 'A comprehensive test to determine anxiety levels in dogs.', '2024-07-05T05:56:51.928Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('289f1271-71b4-416c-a068-25592c804a14', 'Canine Anxiety Assessment', 'Survey to assess socialization skills in cats.', '2024-09-01T17:33:36.384Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('8763c663-b84c-4646-af7f-a98fa9e7d67d', 'Cat Socialization Survey', 'Survey to assess socialization skills in cats.', '2024-03-15T22:44:35.271Z');
INSERT INTO "PsychologicalTest" ("id", "name", "description", "createdAt") VALUES ('bb9f0fab-e24e-4bb3-a7de-38229d9564fc', 'Pet Stress Level Test', 'Measures the stress levels in pets using various stimuli.', '2024-03-16T19:53:06.280Z');

INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('caf4c7a4-cc2f-49fb-95ed-0e410b92b0bf', 'ae37d908-0fa2-47ba-ad23-54e8254bf405', '0e2a6af7-b401-45c3-9ba9-7b5a18885016');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('c5554464-d81d-4b24-ac99-5a6ce03236bf', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f277f0ab-f6f3-4361-aaf6-1c4e321b1067');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('6e2ca9a3-3018-4364-8764-cf1c1efd9d33', '0c035e1e-c2ff-45d9-8d44-c71e7f4e7857', '61ff6c5e-c60c-4647-9a32-b790473ea6ec');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('e57a26ba-b0e5-479a-8fea-1f9e9487ad48', 'd597d165-40fa-4887-92fa-7841e3dafd56', 'fbbb1321-79c9-49ee-acfd-90d2e5d73c62');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('6663696c-89f0-4178-9b02-e6a6575dd7cf', 'ae37d908-0fa2-47ba-ad23-54e8254bf405', 'd7bb2edb-baf7-4e37-a6f4-319b05c15ac2');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('19983021-e416-43f0-ad87-6b324852df72', 'd597d165-40fa-4887-92fa-7841e3dafd56', 'd7bb2edb-baf7-4e37-a6f4-319b05c15ac2');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('8e815db8-c42f-409a-a8f2-48e573efa5e3', '8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab', 'c11c3c6f-c292-4191-87f6-bf2af23a547f');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('0c4165df-5862-4f0b-aad7-a6c6d5cf687d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f277f0ab-f6f3-4361-aaf6-1c4e321b1067');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('b97280d0-7180-4196-b253-6bb7ddeffccf', '8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab', 'd7bb2edb-baf7-4e37-a6f4-319b05c15ac2');
INSERT INTO "PetOwner" ("id", "userId", "petId") VALUES ('0ae54600-1a36-434e-8f2b-e218ff484935', '63ae1614-f9c7-458b-801a-5347bc2be609', '72a79785-9542-445d-8677-b9c3b0ae9518');

INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('4c96974a-b37c-47de-a74a-64e51b8e05de', 896, '2025-06-01T20:31:46.952Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b33e0caa-e6c9-4f72-a531-0ddffe6ad28c');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('88d1bd53-8b96-4fbc-b5a3-9f35461d5915', 307, '2025-08-14T20:19:10.854Z', 'cea98e61-a51f-4f80-9ec0-2c0a8d0bee04', 'b33e0caa-e6c9-4f72-a531-0ddffe6ad28c');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('e4d302ac-91c8-42f3-9600-894f5be95caa', 177, '2025-09-22T07:01:07.785Z', 'ae079684-9d26-44db-bdab-80489cf79d79', 'b33e0caa-e6c9-4f72-a531-0ddffe6ad28c');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('481c2a72-6f13-4f89-9a3e-933552f5e438', 450, '2025-07-25T03:19:48.184Z', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f', 'fbf6320f-0703-4d56-8751-669572809381');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('defddd58-bff0-48cb-b648-0d8b174e995a', 460, '2024-06-27T16:14:41.392Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8763c663-b84c-4646-af7f-a98fa9e7d67d');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('29d49e6b-d1bf-427b-aed6-a835357a1202', 252, '2025-06-22T22:19:27.223Z', 'cea98e61-a51f-4f80-9ec0-2c0a8d0bee04', '289f1271-71b4-416c-a068-25592c804a14');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('70241697-7f77-4767-ad61-278aaad5ed91', 401, '2024-08-13T06:05:53.180Z', '8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab', 'd9ffc59f-d92c-47aa-8f64-abf7170d2b61');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('5dd841a0-693b-49f4-819e-25394928cf38', 344, '2025-02-13T18:02:29.620Z', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f', '289f1271-71b4-416c-a068-25592c804a14');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('47d0adfa-95e6-4c32-b6d8-4f16ae1b8222', 869, '2025-05-01T13:14:50.641Z', '63ae1614-f9c7-458b-801a-5347bc2be609', '167a0b15-bec3-4615-8eef-cd851df911e6');
INSERT INTO "TestResult" ("id", "score", "completedAt", "userId", "testId") VALUES ('55a001d8-e737-4826-b152-0684496e19e8', 906, '2023-10-12T20:55:46.350Z', 'd597d165-40fa-4887-92fa-7841e3dafd56', '8763c663-b84c-4646-af7f-a98fa9e7d67d');

INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('85be6b87-31a9-4b30-a157-0385ab2ed9dc', 'Advanced Agility Course', 'A foundational course for teaching basic commands and manners.', '2023-11-14T23:57:51.138Z', '2025-08-26T19:18:59.290Z', 'active', 'cea98e61-a51f-4f80-9ec0-2c0a8d0bee04');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('73b093be-fedb-417f-be4f-e8d8e6b47cf8', 'Basic Obedience Training', 'A foundational course for teaching basic commands and manners.', '2025-03-23T21:32:42.573Z', '2024-03-03T05:17:25.392Z', 'inprogress', 'd597d165-40fa-4887-92fa-7841e3dafd56');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('36af9572-7841-4ca4-95c2-47825f785e76', 'Advanced Agility Course', 'A program designed to help puppies socialize and learn basic skills.', '2025-03-30T07:00:50.627Z', '2025-05-04T07:05:18.607Z', 'inactive', '8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('9fabe847-49bc-4d5f-9cb8-f9b749302504', 'Basic Obedience Training', 'A program designed to help puppies socialize and learn basic skills.', '2024-03-21T05:43:38.016Z', '2024-04-24T10:07:24.235Z', 'active', '8d8a98e9-2bbf-40b3-8b5d-335de3ccbbab');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('46023cd6-eb28-4010-ae54-791bd205a688', 'Basic Obedience Training', 'Training focused on the wellness and mental stimulation of senior pets.', '2025-08-11T00:00:17.963Z', '2024-11-09T15:36:16.921Z', 'inprogress', 'ae37d908-0fa2-47ba-ad23-54e8254bf405');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('99418f39-15bc-4cef-a36f-108667c31937', 'Behavioral Modification Plan', 'A plan to address and modify specific behavioral issues.', '2023-11-29T09:35:18.286Z', '2024-05-04T20:54:37.434Z', 'completed', 'cea98e61-a51f-4f80-9ec0-2c0a8d0bee04');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('bd275a69-d68e-45d7-8fa7-bf37064fd88e', 'Basic Obedience Training', 'Training focused on the wellness and mental stimulation of senior pets.', '2024-06-24T20:36:36.083Z', '2024-01-14T00:15:06.590Z', 'inactive', '63ae1614-f9c7-458b-801a-5347bc2be609');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('63326f0e-9020-46e6-ba5c-7f075834f75d', 'Behavioral Modification Plan', 'A program designed to help puppies socialize and learn basic skills.', '2023-10-09T19:28:46.704Z', '2024-02-12T17:27:55.126Z', 'completed', '63ae1614-f9c7-458b-801a-5347bc2be609');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('a8196134-a15a-4bda-889b-a8f4138aaac7', 'Senior Pet Wellness Training', 'A plan to address and modify specific behavioral issues.', '2024-04-10T16:54:53.991Z', '2025-08-07T16:45:35.379Z', 'inactive', 'a851797f-1dfd-41bd-8285-e63b1ea15f3f');
INSERT INTO "TrainingPlan" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('ed4742a5-a264-424d-83c0-5dd6f5e6d8f3', 'Senior Pet Wellness Training', 'A program designed to help puppies socialize and learn basic skills.', '2025-06-08T03:39:41.770Z', '2023-11-05T17:36:49.040Z', 'inprogress', '63ae1614-f9c7-458b-801a-5347bc2be609');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
