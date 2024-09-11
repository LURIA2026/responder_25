const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])



const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'ola'])
    .addAnswer('🙌 Hola te habla tu asistente *VIRTUAL*')
    
const flowPrincipa = addKeyword(['qr', 'Qr', 'enviar', 'me puede'])
    .addAnswer('Ahi le envio el *QR* ', {
        delay: 10,
        media: "https://www.ibolivia.org/wp-content/uploads/2019/10/escudo-de-bolivia.jpg"  
    })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowPrincipa])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
