import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def enviar_correo(email_sender, email_password, recipient, subject, body):
    try:
        # Configuración del servidor SMTP de Gmail
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587

        # Crear conexión con el servidor SMTP
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            
            # Iniciar sesión con la cuenta de correo electrónico y la contraseña de aplicación
            server.login(email_sender, email_password)

            # Crear mensaje
            message = MIMEMultipart()
            message['From'] = email_sender
            message['To'] = recipient
            message['Subject'] = subject
            message.attach(MIMEText(body, 'plain'))

            # Enviar correo electrónico
            server.sendmail(email_sender, recipient, message.as_string())

        print("Correo electrónico enviado correctamente.")
        return True
    except Exception as e:
        print(f"Error al enviar el correo electrónico: {e}")
        return False


# Ejemplo de uso
email_sender = 'p3451608@gmail.com'
email_password = 'jh123456789@'
recipient = 'jhordanhuera2002@gmail.com'
subject = 'Asunto del correo'
body = 'Hola, este es un correo de prueba desde Python.'

enviar_correo(email_sender, email_password, recipient, subject, body)
