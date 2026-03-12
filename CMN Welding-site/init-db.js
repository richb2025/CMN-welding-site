import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function init() {
  try {
    await client.connect();
    console.log("Connected to database");

    await client.query(`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(50),
        message TEXT,
        image_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await client.end();
    process.exit();
  }
}

init();
