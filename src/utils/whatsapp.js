import { propertyConfig } from '../config/property.config';

/**
 * Generates an encoded WhatsApp API URL with a structured prefilled message
 */
export const buildWhatsAppUrl = ({
  checkIn = '',
  checkOut = '',
  adults = '',
  children = '',
  roomType = '',
  customMessage = '',
  specialRequests = '',
  senderName = ''
} = {}) => {
  const number = propertyConfig.contact.whatsappNumber;
  const propName = propertyConfig.property.name;

  let text = `Namaste! I would like to enquire about accommodation at *${propName}*.\n\n`;

  if (senderName) {
    text += `👤 *Guest Name:* ${senderName}\n`;
  }
  if (checkIn) {
    text += `📅 *Check-in Date:* ${checkIn}\n`;
  }
  if (checkOut) {
    text += `📅 *Check-out Date:* ${checkOut}\n`;
  }
  if (adults) {
    text += `👥 *Adults:* ${adults}\n`;
  }
  if (children && children !== '0') {
    text += `👶 *Children:* ${children}\n`;
  }
  if (roomType) {
    text += `🛏️ *Room Type:* ${roomType}\n`;
  }
  if (specialRequests) {
    text += `📝 *Notes/Requirements:* ${specialRequests}\n`;
  }
  if (customMessage) {
    text += `💬 *Message:* ${customMessage}\n`;
  }

  text += `\nPlease share current room availability, total tariff, and booking details. Thank you!`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encoded}`;
};

/**
 * Quick action WhatsApp link generator
 */
export const getQuickWhatsAppUrl = (topic = 'general') => {
  const propName = propertyConfig.property.name;
  let custom = '';

  switch (topic) {
    case 'reception':
      custom = `Namaste! I am contacting reception regarding my stay at ${propName}. Please assist me.`;
      break;
    case 'group':
      custom = `Namaste! I would like to enquire about Group / Yatri Sangha booking for multiple rooms at ${propName}.`;
      break;
    case 'availability':
      custom = `Namaste! I would like to check room availability for this week at ${propName}.`;
      break;
    default:
      custom = `Namaste! I would like to enquire about room booking and tariffs at ${propName}.`;
  }

  return `https://wa.me/${propertyConfig.contact.whatsappNumber}?text=${encodeURIComponent(custom)}`;
};
