import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Wathsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber='+237670857204'
            accountName='Douala-Prime'
            statusMessage='Réponse généralement en moins de 30 minutes'
            placeholder='Saisissez votre message ici...'
            avatar='/images/logo_zoom.png'
            chatMessage="Bonjour ! 🤝 Comment pouvons-nous vous aider ?"
            messageDelay={3}
            darkMode={true}
            allowClickAway={true}
            allowEsc={true}
            chatboxHeight={400}
            notification={true}
            notificationDelay={10}
            notificationSound={true}
            notificationLoop={3}
            // style={{
            //     position: "fixed",
            //     bottom: "20px",
            //     right: "20px",
            //     zIndex: 99,
            // }}
            buttonStyle={{
                backgroundColor: "#25D366",
                color: "white",
            }}
            chatboxStyle={{
                backgroundColor: "#F0F0F0",
            }}
        />
    )
}
