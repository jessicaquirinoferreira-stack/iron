/**
 * Iron Road Transporte - Core Configuration & Contact Details
 */

export const COMPANY_INFO = {
  name: 'IRON ROAD TRANSPORTE',
  slogan: 'Juntos somos mais fortes!',
  phoneDisplay: '(13) 99189-1387',
  phoneClean: '5513991891387',
  whatsappUrl: 'https://wa.me/5513991891387',
  email: 'Claudio@ironroadtransport.com.br',
  instagramHandle: '@ironroadtransporte',
  instagramUrl: 'https://www.instagram.com/ironroadtransporte/',
  location: 'Santos-SP (Logística Portuária)',
  coverage: 'Todo o Território Nacional',
  domain: 'ironroadtransport.com.br',
  logoUrl: 'https://i.postimg.cc/D0NbfSzK/Logo-metalico-Iron-Road-Transporte.png',
};

export const getWhatsAppLink = (message: string): string => {
  return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
};
