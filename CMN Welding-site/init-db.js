require('dotenv').config();
console.log("DATABASE_URL LOADED:", process.env.DATABASE_URL);
const { Client } = require('pg');

async function init(attempt = 1) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log(`Connecting... (attempt ${attempt})`);
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
    console.error("Error creating table:", err.code);

    // Retry up to 5 times
    if (attempt < 5) {
      console.log("Retrying in 2 seconds...");
      setTimeout(() => init(attempt + 1), 2000);
      return;
    } else {
      console.log("Max retries reached. Exiting.");
    }
  } finally {
    try {
      await client.end();
    } catch {}
  }
}

init();
