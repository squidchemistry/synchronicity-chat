import prisma from '../src/server/prisma';

async function main() {
  console.log('🌱 Starting seeding...');

  const users = await Promise.all([
    prisma.user.create({
      data: {
        username: 'devmaster',
        email: 'devmaster@example.com',
        messages: {
          create: [
            { text: 'Just finished deploying the chat app 🚀' },
            { text: 'Anyone up for a quick bug hunt?' },
          ],
        },
      },
    }),
    prisma.user.create({
      data: {
        username: 'codewitch',
        email: 'codewitch@example.com',
        messages: {
          create: [
            { text: 'Loving this interface! 🧙‍♀️' },
            { text: 'We should add voice chat next 🔊' },
          ],
        },
      },
    }),
    prisma.user.create({
      data: {
        username: 'botlord',
        email: 'botlord@example.com',
        messages: {
          create: [
            { text: 'Hello humans 🤖' },
            { text: 'I am monitoring all channels!' },
          ],
        },
      },
    }),
  ]);

  console.log('✅ Seeded users:', users.map((u) => u.username));
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🌱 Seeding complete.');
  });
