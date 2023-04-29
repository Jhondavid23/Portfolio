import axios from 'axios';

export const sendEmail = async () => {
  try {
    const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', {
      sender: {
        name: 'Nombre del remitente',
        email: 'email@remitente.com',
      },
      to: [
        {
          email: 'email@destinatario.com',
          name: 'Nombre del destinatario',
        },
      ],
      replyTo: {
        email: 'email@remitente.com',
        name: 'Nombre del remitente',
      },
      subject: 'Asunto del correo electrónico',
      htmlContent: '<p>Contenido del correo electrónico</p>',
    }, {
      headers: {
        'api-key': 'API_KEY',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};