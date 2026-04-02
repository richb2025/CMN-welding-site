const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/quote', (req, res) => {
    res.sendFile(__dirname + '/public/quote.html');
});

app.get('/about_us', (req, res) => {
    res.sendFile(__dirname + '/public/about_us.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/public/gallery.html');
});


app.get('/store', (req, res) => {
    res.sendFile(__dirname + '/public/store.html');
});


app.get('/hydraulic_repair', (req, res) => {
    res.sendFile(__dirname + '/public/Hydraulic_Repair.html');
});


app.get('/repair_mod', (req, res) => {
    res.sendFile(__dirname + '/public/Repair_Mod.html');
});


app.get('/mig_tig_stick', (req, res) => {
    res.sendFile(__dirname + '/public/Mig_Tig_stick.html');
});


app.get('/custom_fab', (req, res) => {
    res.sendFile(__dirname + '/public/Custom_Fab.html');
});

app.get('/store', (req, res) => {
    res.sendFile(__dirname + '/public/Store.html');
});

app.get('/cnc_plasma_cutter', (req, res) => {
    res.sendFile(__dirname + '/public/CNC_plasma_cutter.html');
});


/*
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,     // cmnwelding@gmail.com
        pass: process.env.GMAIL_PASS,     // your app password (see step 3)
    }
});

app.post('/api/quote', express.json(), async (req, res) => {
    const { fname, lname, email, business, service, message } = req.body;

    if (!fname || !lname || !email || !service || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await transporter.sendMail({
            from: `"CMN Welding Website" <${process.env.GMAIL_USER}>`,
            to: 'cmnwelding@gmail.com',
            replyTo: email,
            subject: `New Quote Request — ${service}`,
            html: `
                <h2>New Quote Request</h2>
                <p><strong>Name:</strong> ${fname} ${lname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Business:</strong> ${business || 'N/A'}</p>
                <p><strong>Service:</strong> ${service}</p>
                <hr/>
                <p><strong>Project Details:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });
        res.json({ ok: true });
    } catch (err) {
        console.error('Mail error:', err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});
 Note: The email sending code is commented out to prevent errors if nodemailer is not installed or configured. Uncomment and configure as needed.
*/
