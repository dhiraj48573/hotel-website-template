/**
 * ==============================================================================
 * CENTRAL PROPERTY CONFIGURATION FILE
 * ==============================================================================
 * 
 * QUICK RE-BRANDING GUIDE (Takes 30-60 Minutes per client):
 * 1. Change `property.name`, `property.tagline`, `property.category`, and `property.mode`.
 * 2. Update contact details: `property.phone`, `property.whatsapp`, `property.email`, and `property.address`.
 * 3. Choose your theme: `property.theme` ('theme-a' | 'theme-b' | 'theme-c').
 * 4. Update check-in/out timings and policies.
 * 5. Update room categories in `rooms` array (set `active: true/false` to enable/disable).
 * 6. Update nearby landmarks in `landmarks` array with verified distances.
 * 7. Replace image URLs with client's actual photography.
 * 8. Paste client's Google Maps Embed URL.
 * 
 * That's it! Every page, badge, form, and WhatsApp message reads directly from here.
 * ==============================================================================
 */

export const propertyConfig = {
  // ---------------------------------------------------------------------------
  // 1. PROPERTY IDENTITY & MODE
  // ---------------------------------------------------------------------------
  property: {
    name: "Ganga Niwas",
    nameHi: "गंगा निवास",
    tagline: "A Peaceful Stay Near The Holy Ganga",
    taglineHi: "पवित्र गंगा तट पर एक शांत और सुखद प्रवास",
    
    // Category label shown on badges and headings
    category: "Hotel & Pilgrim Guest House",
    categoryHi: "होटल एवं तीर्थ यात्री अतिथि गृह",

    // Accommodation Mode:
    // 'hotel'        -> Premium hotel layout, luxury amenities, dining, room service
    // 'dharamshala'  -> Pilgrim & family focus, Satvik food/Bhojanalaya, per-person rates, spiritual ambiance
    // 'hybrid'       -> Balanced pilgrim-friendly hotel (Default demo)
    mode: "hybrid",

    // Active visual theme:
    // 'theme-a' -> Navy + Champagne Gold + White (Premium Hospitality)
    // 'theme-b' -> Terracotta + Warm Sand + Ivory (Spiritual / Dharamshala / Heritage)
    // 'theme-c' -> Modern Charcoal + Royal Blue + White (Clean Contemporary Hotel)
    theme: "theme-a",

    // Established year & Trust statement
    establishedYear: "2014",
    headline: "YOUR COMFORTABLE STAY IN HARIDWAR",
    headlineHi: "हरिद्वार में आपका आरामदायक एवं पावन प्रवास",

    shortIntro: "Located just 450 meters from the sacred Har Ki Pauri ghat, Ganga Niwas offers clean, family-friendly, and peaceful accommodation for pilgrims, tourists, and families visiting holy Haridwar.",
    shortIntroHi: "पवित्र हर की पौड़ी घाट से मात्र 450 मीटर की दूरी पर स्थित, गंगा निवास हरिद्वार आने वाले श्रद्धालुओं और परिवारों के लिए स्वच्छ, सुरक्षित और शांत प्रवास प्रदान करता है।",

    fullAbout: "Welcome to Ganga Niwas, your serene sanctuary in the heart of Haridwar. Established with the vision of offering warm, respectful hospitality to spiritual seekers and vacationing families alike, our property combines traditional warmth with modern cleanliness. Whether you are visiting for the evening Ganga Aarti, sacred rituals, or exploring Uttarakhand, we ensure your stay is peaceful, comfortable, and memorable.",
    fullAboutHi: "गंगा निवास में आपका हार्दिक स्वागत है - हरिद्वार के पावन हृदय स्थल में आपका शांत आश्रय। आध्यात्मिक तीर्थयात्रियों और पर्यटकों को आत्मीय व सम्मानजनक आतिथ्य प्रदान करने के उद्देश्य से स्थापित, हमारा अतिथि गृह पारंपरिक सद्भाव और आधुनिक स्वच्छता का सुंदर संगम है। चाहे आप दिव्य गंगा आरती में सम्मिलित होने आए हों या पारिवारिक भ्रमण पर, हम आपके प्रवास को पावन, सुखद और यादगार बनाते हैं।",

    hospitalityPhilosophy: "Atithi Devo Bhava - We treat every guest as a divine visitor, with utmost hygiene, honesty, and courteous assistance for temple visits and Ganga Snan.",
    hospitalityPhilosophyHi: "अतिथि देवो भवः - हम प्रत्येक अतिथि का स्वागत देवतुल्य आदर, शुद्ध सात्विक वातावरण और पूर्ण ईमानदारी के साथ करते हैं।",
    
    // Logo config: text or image url
    logo: {
      type: "text", // 'text' or 'image'
      text: "Ganga Niwas",
      subtext: "HARIDWAR",
      imageUrl: null, // e.g. "/images/logo.png"
    },
  },

  // ---------------------------------------------------------------------------
  // 2. CONTACT & LOCATION DETAILS
  // ---------------------------------------------------------------------------
  contact: {
    // Primary phone for click-to-call
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    alternatePhone: "+91 98765 43211",

    // WhatsApp number in international format without '+' or spaces (e.g. 919876543210)
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",

    email: "stay@ganganiwasharidwar.com",
    
    // Physical address
    address: {
      street: "Plot No. 18, Upper Road, Near Har Ki Pauri Chowk",
      streetHi: "प्लॉट नं. 18, अपर रोड, हर की पौड़ी चौक के पास",
      city: "Haridwar",
      cityHi: "हरिद्वार",
      state: "Uttarakhand",
      stateHi: "उत्तराखंड",
      pincode: "249401",
      country: "India",
      countryHi: "भारत",
      landmarkHint: "Only 5 minutes walk from Har Ki Pauri",
      landmarkHintHi: "हर की पौड़ी से मात्र 5 मिनट की पैदल दूरी"
    },

    // Interactive Google Maps Embed URL (Must be iframe src url)
    // Replace this src with your client's Google Maps Embed link
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.634625804561!2d78.1689255!3d29.9578125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094709d84bf72d%3A0xbcf046cbdb44b25e!2sHar%20Ki%20Pauri%2C%20Haridwar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    
    // Direct Google Maps Navigation URL for "Get Directions" button
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Har+Ki+Pauri+Haridwar",

    // Front Desk availability
    frontDeskHours: "24 Hours (Open Round the Clock)",
    frontDeskHoursHi: "24 घंटे उपलब्ध (दिन-रात सेवा)"
  },

  // ---------------------------------------------------------------------------
  // 3. CHECK-IN / CHECK-OUT & POLICIES
  // ---------------------------------------------------------------------------
  policies: {
    checkInTime: "12:00 PM (Noon)",
    checkInTimeHi: "दोपहर 12:00 बजे",
    checkOutTime: "11:00 AM",
    checkOutTimeHi: "सुबह 11:00 बजे",

    earlyCheckInPolicy: "Early check-in is subject to room availability upon arrival.",
    earlyCheckInPolicyHi: "जल्दी चेक-इन आगमन के समय कमरे की उपलब्धता पर निर्भर करता है।",

    idProofRequirement: "Govt. issued photo ID (Aadhaar, Passport, Voter ID or Driving License) is mandatory for every adult guest.",
    idProofRequirementHi: "प्रत्येक वयस्क अतिथि के लिए सरकार द्वारा जारी पहचान पत्र (आधार, पासपोर्ट, वोटर आईडी या ड्राइविंग लाइसेंस) अनिवार्य है।",

    cancellationPolicy: "Free cancellation up to 48 hours before check-in date. Within 48 hours, 1 night tariff applies as retention fee.",
    cancellationPolicyHi: "चेक-इन तिथि से 48 घंटे पूर्व तक निःशुल्क रद्दीकरण। 48 घंटे के भीतर एक रात का शुल्क देय होगा।",

    advancePaymentPolicy: "50% advance payment required to confirm advance reservation, balance payable upon check-in.",
    advancePaymentPolicyHi: "अग्रिम आरक्षण की पुष्टि के लिए 50% अग्रिम राशि आवश्यक है, शेष राशि चेक-इन के समय देय होगी।",

    rules: [
      "Pure vegetarian premise. Consumption of non-vegetarian food, alcohol, and smoking is strictly prohibited.",
      "Guests must respect peaceful temple town surroundings and avoid loud noises after 10:00 PM.",
      "Visitors are allowed in reception lobby only. External guests cannot stay overnight without ID registration.",
      "Hot water geyser operational round the clock."
    ],
    rulesHi: [
      "शुद्ध शाकाहारी परिसर। मांसाहार, मदिरापान और धूम्रपान पूर्णतः वर्जित है।",
      "रात 10:00 बजे के बाद शांति बनाए रखें एवं आश्रम/मंदिर की मर्यादा का पालन करें।",
      "आगंतुकों को केवल स्वागत कक्ष में मिलने की अनुमति है। बिना पहचान पत्र रात्रि प्रवास वर्जित है।",
      "गर्म पानी (गीजर) की सुविधा 24 घंटे उपलब्ध है।"
    ],

    // Peak Season / Festival Tariff notice toggle
    // Turn this to true during Kumbh, Ardh Kumbh, Kanwar Yatra, Diwali, New Year etc.
    showPeakSeasonNotice: true,
    peakSeasonNotice: "Note: Room tariffs and advance payment conditions may vary during major festivals (Somvati Amavasya, Kanwar Mela, Snan dates, and peak holiday seasons). Please verify on WhatsApp before booking.",
    peakSeasonNoticeHi: "सूचना: विशेष स्नान पर्वों (सोमवती अमावस्या, कांवड़ मेला, गंगा दशहरा) एवं त्योहारों पर दरें भिन्न हो सकती हैं। कृपया व्हाट्सएप पर पुष्टि करें।"
  },

  // ---------------------------------------------------------------------------
  // 4. DHARAMSHALA & BHAKT NIWAS SPECIFIC CONFIGURATION
  // ---------------------------------------------------------------------------
  dharamshalaFeatures: {
    enabled: true, // Always available when mode is 'dharamshala' or 'hybrid'
    bhojanalayaAvailable: true,
    bhojanalayaTitle: "Shri Ganga Satvik Bhojanalaya",
    bhojanalayaTitleHi: "श्री गंगा सात्विक भोजनालय",
    bhojanalayaDetails: "Pure vegetarian, home-style satvik meals prepared without onion and garlic on request. Fresh, hygienic, and affordable.",
    bhojanalayaDetailsHi: "शुद्ध शाकाहारी, घर जैसा सात्विक भोजन। मांग पर बिना लहसुन-प्याज का भोजन उपलब्ध। स्वच्छ, पौष्टिक और सुलभ।",
    mealTimings: {
      lunch: "11:30 AM to 02:30 PM",
      dinner: "07:30 PM to 09:30 PM"
    },
    mealPrice: "₹120 per thali (Unlimited)",
    isDonationOrFixed: "Fixed Tariff & Voluntary Annadaan Support",
    isDonationOrFixedHi: "निश्चित सुलभ दर एवं ऐच्छिक अन्नदान सहयोग",
    groupYatriBooking: "Special group stay arrangements for yatris, bhajan mandalis, and pilgrimage groups with prior intimation.",
    groupYatriBookingHi: "तीर्थ यात्रियों, संकीर्तन मंडलियों एवं यात्रा संघों के लिए पूर्व सूचना पर विशेष सामूहिक व्यवस्था।"
  },

  // ---------------------------------------------------------------------------
  // 5. HOTEL SPECIFIC CONFIGURATION
  // ---------------------------------------------------------------------------
  hotelFeatures: {
    enabled: true,
    roomService: "Available 7:00 AM - 10:00 PM",
    travelDesk: "Cab bookings for Char Dham Yatra, Rishikesh, Mussoorie & local sightseeing.",
    travelDeskHi: "चार धाम यात्रा, ऋषिकेश, मसूरी एवं स्थानीय दर्शन हेतु टैक्सी एवं यात्रा सहायता।",
    laundryService: "Same-day laundry service on chargeable basis.",
    powerBackup: "100% 24x7 Silent Generator Power Backup for uninterrupted comfort."
  },

  // ---------------------------------------------------------------------------
  // 6. ROOM CATEGORIES & PRICING
  // ---------------------------------------------------------------------------
  // Support for:
  // - AC Deluxe Room
  // - Non-AC Room
  // - Standard Double Room
  // - Family Room
  // - Triple Sharing Room
  // - Dormitory / Bed Sharing
  // - Premium Suite
  //
  // Pricing Modes:
  // pricingMode: 'fixed' -> Displays exact price (e.g. ₹1,800 / night)
  // pricingMode: 'starting_at' -> Displays starting price (e.g. "Starting from ₹1,200")
  // pricingMode: 'enquire' -> Displays "Contact Reception for Tariff"
  // ---------------------------------------------------------------------------
  rooms: [
    {
      id: "ac-deluxe-room",
      name: "AC Deluxe Room",
      nameHi: "एसी डीलक्स कमरा",
      category: "Deluxe",
      active: true,
      pricingMode: "fixed",
      price: 1850,
      priceUnit: "per_night", // 'per_night' or 'per_person'
      taxIncluded: true,
      extraGuestCharge: 400,
      capacity: {
        adults: 2,
        children: 1,
        maxGuests: 3
      },
      beds: "1 Queen Size Double Bed",
      bedsHi: "1 क्वीन साइज डबल बेड",
      roomSize: "220 sq. ft.",
      isAC: true,
      bathroom: "Attached Western Bathroom with Geyser",
      bathroomHi: "अटैच्ड वेस्टर्न बाथरूम (गीजर सहित)",
      description: "Well-appointed air-conditioned room featuring comfortable bedding, LED TV, hot water geyser, and peaceful courtyard or street view.",
      descriptionHi: "सुसज्जित वातानुकूलित कमरा जिसमें आरामदायक बिस्तर, एलईडी टीवी, गर्म पानी गीजर और शांत वातावरण उपलब्ध है।",
      amenities: ["Air Conditioning", "24hr Hot Water", "LED TV", "Free Wi-Fi", "Intercom", "Daily Housekeeping", "Electric Kettle"],
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: true
    },
    {
      id: "standard-double-room",
      name: "Standard Double Room (Non-AC)",
      nameHi: "स्टैंडर्ड डबल कमरा (नॉन-एसी)",
      category: "Standard",
      active: true,
      pricingMode: "fixed",
      price: 1100,
      priceUnit: "per_night",
      taxIncluded: true,
      extraGuestCharge: 300,
      capacity: {
        adults: 2,
        children: 1,
        maxGuests: 3
      },
      beds: "1 Double Bed",
      bedsHi: "1 डबल बेड",
      roomSize: "180 sq. ft.",
      isAC: false,
      bathroom: "Attached Bathroom with 24hr Hot Water",
      bathroomHi: "अटैच्ड बाथरूम (24 घंटे गर्म पानी)",
      description: "Clean, budget-friendly room with ceiling fan, large windows for ventilation, fresh linens, and attached private washroom.",
      descriptionHi: "स्वच्छ और बजट-अनुकूल कमरा, पंखा, ताजी हवा के लिए बड़ी खिड़की, साफ चादरें एवं निजी बाथरूम।",
      amenities: ["Ceiling Fan", "24hr Hot Water", "Free Wi-Fi", "Daily Housekeeping", "RO Drinking Water"],
      images: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: true
    },
    {
      id: "family-four-bed-room",
      name: "Family 4-Bedded Suite (AC)",
      nameHi: "फैमिली 4-बेड सूट (एसी)",
      category: "Family",
      active: true,
      pricingMode: "fixed",
      price: 2800,
      priceUnit: "per_night",
      taxIncluded: true,
      extraGuestCharge: 400,
      capacity: {
        adults: 4,
        children: 2,
        maxGuests: 6
      },
      beds: "2 Queen Size Beds",
      bedsHi: "2 क्वीन साइज डबल बेड",
      roomSize: "340 sq. ft.",
      isAC: true,
      bathroom: "Spacious Attached Bathroom with Geyser",
      bathroomHi: "विशाल अटैच्ड बाथरूम (गीजर सहित)",
      description: "Ideal for families and pilgrim groups. Features two large double beds, air conditioning, seating area, and ample luggage space.",
      descriptionHi: "सपरिवार अथवा तीर्थयात्री समूहों के लिए सर्वोत्तम। दो बड़े डबल बेड, वातानुकूलन, बैठने की जगह और सामान रखने की पर्याप्त व्यवस्था।",
      amenities: ["Air Conditioning", "2 Double Beds", "24hr Hot Water", "LED TV", "Free Wi-Fi", "Luggage Rack", "Electric Kettle"],
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: true
    },
    {
      id: "triple-sharing-room",
      name: "Triple Sharing Room (AC/Non-AC)",
      nameHi: "ट्रिपल शेयरिंग कमरा",
      category: "Triple",
      active: true,
      pricingMode: "fixed",
      price: 1950,
      priceUnit: "per_night",
      taxIncluded: true,
      extraGuestCharge: 350,
      capacity: {
        adults: 3,
        children: 1,
        maxGuests: 4
      },
      beds: "1 Double Bed + 1 Single Bed",
      bedsHi: "1 डबल बेड + 1 सिंगल बेड",
      roomSize: "250 sq. ft.",
      isAC: true,
      bathroom: "Attached Bathroom with Geyser",
      bathroomHi: "अटैच्ड बाथरूम (गीजर सहित)",
      description: "Comfortable room designed for three adults, equipped with split AC, fast Wi-Fi, and private modern bathroom.",
      descriptionHi: "तीन वयस्क अतिथियों के लिए उपयुक्त कमरा, स्प्लिट एसी, हाई-स्पीड वाई-फाई और निजी आधुनिक बाथरूम।",
      amenities: ["Air Conditioning", "3 Individual Sleeps", "24hr Hot Water", "Free Wi-Fi", "Daily Cleaning"],
      images: [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: false
    },
    {
      id: "dormitory-bed-sharing",
      name: "Pilgrim Dormitory (Single Bed)",
      nameHi: "तीर्थयात्री डॉर्मिटरी (सिंगल बेड)",
      category: "Dormitory",
      active: true,
      pricingMode: "fixed",
      price: 350,
      priceUnit: "per_person", // Charged per person/bed!
      taxIncluded: true,
      extraGuestCharge: 0,
      capacity: {
        adults: 1,
        children: 0,
        maxGuests: 1
      },
      beds: "1 Individual Clean Single Bed with Mattress & Quilt",
      bedsHi: "1 स्वच्छ सिंगल बेड, गद्दा व रजाई सहित",
      roomSize: "Shared Hall",
      isAC: false,
      bathroom: "Common Clean Bathrooms with Hot Water facility",
      bathroomHi: "साझा स्वच्छ स्नानगृह (गर्म पानी सुविधा)",
      description: "Highly economical and hygienic shared dormitory hall specifically maintained for solo pilgrims, yatris, and student travelers.",
      descriptionHi: "एकल तीर्थयात्रियों, साधु-संतों एवं बजट यात्रियों के लिए अत्यंत सुलभ, स्वच्छ एवं सुरक्षित साझा डॉर्मिटरी हॉल।",
      amenities: ["Clean Bedding", "Locker Facility", "Common Hot Water", "RO Drinking Water", "CCTV Security"],
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: true
    },
    {
      id: "premium-suite",
      name: "Ganga View Premium Suite",
      nameHi: "गंगा व्यू प्रीमियम सुइट",
      category: "Premium",
      active: true,
      pricingMode: "starting_at", // starting_at example
      price: 3500,
      priceUnit: "per_night",
      taxIncluded: true,
      extraGuestCharge: 500,
      capacity: {
        adults: 2,
        children: 2,
        maxGuests: 4
      },
      beds: "1 King Size Bed + Sofa Bed",
      bedsHi: "1 किंग साइज बेड + सोफा कम बेड",
      roomSize: "420 sq. ft.",
      isAC: true,
      bathroom: "Luxury Attached Bathroom with Premium Fittings & Geyser",
      bathroomHi: "शानदार अटैच्ड बाथरूम (प्रीमियम फिटिंग्स एवं गीजर)",
      description: "Our finest accommodation featuring river views, spacious lounge seating, refrigerator, smart TV, and dedicated room service.",
      descriptionHi: "हमारा सबसे श्रेष्ठ सुइट, मनोहारी दृश्य, भव्य बैठक, रेफ्रिजरेटर, स्मार्ट टीवी और समर्पित सेवा।",
      amenities: ["River View", "King Bed", "Smart TV", "Mini Fridge", "Tea/Coffee Maker", "AC & Heating", "Free Premium Wi-Fi"],
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
      ],
      featured: true
    }
  ],

  // ---------------------------------------------------------------------------
  // 7. FACILITIES & AMENITIES
  // ---------------------------------------------------------------------------
  facilities: [
    {
      id: "wifi",
      icon: "Wifi",
      name: "Free High-Speed Wi-Fi",
      nameHi: "निःशुल्क हाई-स्पीड वाई-फाई",
      description: "Seamless wireless internet access throughout the rooms and lobby area.",
      descriptionHi: "सभी कमरों एवं लॉबी में निरंतर इंटरनेट कनेक्टिविटी।",
      isHighlight: true
    },
    {
      id: "hotwater",
      icon: "Flame",
      name: "24-Hour Hot Water",
      nameHi: "24 घंटे गर्म पानी (गीजर)",
      description: "Instant hot water geyser systems in all attached bathrooms.",
      descriptionHi: "सभी अटैच्ड बाथरूमों में 24 घंटे गर्म पानी की व्यवस्था।",
      isHighlight: true
    },
    {
      id: "food",
      icon: "UtensilsCrossed",
      name: "Pure Veg Satvik Bhojanalaya",
      nameHi: "शुद्ध शाकाहारी सात्विक भोजनालय",
      description: "Clean, wholesome North Indian vegetarian meals prepared with pure ghee and RO water.",
      descriptionHi: "शुद्ध देशी घी एवं आरओ जल से निर्मित ताजा एवं पौष्टिक सात्विक भोजन।",
      isHighlight: true
    },
    {
      id: "lift",
      icon: "ChevronsUp",
      name: "Elevator / Lift Facility",
      nameHi: "लिफ्ट की सुविधा",
      description: "Modern passenger elevator serving all guest room floors for senior pilgrims.",
      descriptionHi: "बुजुर्ग श्रद्धालुओं की सुगमता हेतु सभी मंजिलों तक लिफ्ट सुविधा।",
      isHighlight: true
    },
    {
      id: "parking",
      icon: "Car",
      name: "Nearby Safe Parking",
      nameHi: "सुरक्षित वाहन पार्किंग",
      description: "Designated paid parking assistance available within 150m walking distance.",
      descriptionHi: "मात्र 150 मीटर की दूरी पर सुरक्षित वाहन पार्किंग व्यवस्था।",
      isHighlight: false
    },
    {
      id: "cctv",
      icon: "ShieldCheck",
      name: "CCTV & Security",
      nameHi: "सीसीटीवी एवं 24x7 सुरक्षा",
      description: "Comprehensive 24/7 CCTV surveillance in corridors, entrances, and public areas.",
      descriptionHi: "मुख्य द्वारों, गलियारों में चौबीसों घंटे सीसीटीवी निगरानी।",
      isHighlight: false
    },
    {
      id: "power",
      icon: "Zap",
      name: "100% Power Backup",
      nameHi: "24 घंटे पावर बैकअप",
      description: "Heavy-duty generator backup ensuring uninterrupted lighting and fans.",
      descriptionHi: "विद्युत कटौती की स्थिति में निरंतर जनरेटर बैकअप।",
      isHighlight: false
    },
    {
      id: "drinking-water",
      icon: "Droplets",
      name: "RO Purified Drinking Water",
      nameHi: "आरओ शुद्ध पेयजल",
      description: "Multi-stage RO purified hygienic drinking water available on every floor.",
      descriptionHi: "प्रत्येक मंजिल पर निःशुल्क स्वच्छ व ठंडा आरओ पेयजल।",
      isHighlight: false
    },
    {
      id: "reception",
      icon: "Clock",
      name: "24-Hour Front Desk",
      nameHi: "24 घंटे स्वागत कक्ष",
      description: "Always open for check-ins, late arrivals, local temple information, and early Ganga Aarti calls.",
      descriptionHi: "देर रात आगमन, मंदिर दर्शन जानकारी व आरती समय हेतु निरंतर सेवा।",
      isHighlight: true
    },
    {
      id: "wheelchair",
      icon: "Accessibility",
      name: "Senior & Wheelchair Friendly",
      nameHi: "वरिष्ठ नागरिक एवं व्हीलचेयर अनुकूल",
      description: "Ramp access at ground level and elevator connectivity for elderly yatris.",
      descriptionHi: "बुजुर्ग यात्रियों हेतु रैंप एवं सुगम लिफ्ट सुविधा।",
      isHighlight: true
    }
  ],

  // ---------------------------------------------------------------------------
  // 8. NEARBY LANDMARKS & VERIFIED DISTANCES
  // ---------------------------------------------------------------------------
  landmarks: [
    {
      id: "har-ki-pauri",
      name: "Har Ki Pauri & Brahma Kund",
      nameHi: "हर की पौड़ी एवं ब्रह्मकुंड",
      category: "ghat",
      distance: "450 meters",
      time: "5-6 min walk",
      timeHi: "5-6 मिनट पैदल",
      description: "World-famous holy ghat for Ganga Snan and the divine evening Ganga Aarti.",
      descriptionHi: "विश्वप्रसिद्ध पवित्र गंगा घाट जहां नित्य शाम को भव्य गंगा आरती होती है।"
    },
    {
      id: "mansa-devi",
      name: "Mansa Devi Temple (Ropeway)",
      nameHi: "मनसा देवी मंदिर (उड़नखटोला/रोपवे)",
      category: "temple",
      distance: "1.2 km",
      time: "10 min by e-rickshaw",
      timeHi: "10 मिनट ई-रिक्शा द्वारा",
      description: "Hilltop Siddhpeeth temple accessible via ropeway or walking path.",
      descriptionHi: "बिल्व पर्वत शिखर पर स्थित सिद्धपीठ मंदिर, रोपवे द्वारा सुलभ।"
    },
    {
      id: "chandi-devi",
      name: "Chandi Devi Temple",
      nameHi: "चंडी देवी मंदिर",
      category: "temple",
      distance: "3.5 km",
      time: "15 min drive",
      timeHi: "15 मिनट वाहन द्वारा",
      description: "Revered shrine situated atop Neel Parvat offering panoramic valley views.",
      descriptionHi: "नील पर्वत पर स्थित शक्तिपीठ मंदिर, सुंदर दृश्य।"
    },
    {
      id: "railway-station",
      name: "Haridwar Railway Station",
      nameHi: "हरिद्वार रेलवे स्टेशन",
      category: "transit",
      distance: "1.8 km",
      time: "10-12 min by auto",
      timeHi: "10-12 मिनट ऑटो द्वारा",
      description: "Direct frequent train connectivity across Delhi, Mumbai, Kolkata, Lucknow, etc.",
      descriptionHi: "देश के सभी प्रमुख शहरों से सीधी रेल कनेक्टिविटी।"
    },
    {
      id: "bus-stand",
      name: "Haridwar Inter-State Bus Stand",
      nameHi: "हरिद्वार मुख्य बस स्टैंड",
      category: "transit",
      distance: "2.1 km",
      time: "12 min by auto",
      timeHi: "12 मिनट ऑटो द्वारा",
      description: "Direct bus services from ISBT Kashmiri Gate Delhi, Dehradun, and Rishikesh.",
      descriptionHi: "दिल्ली, देहरादून एवं ऋषिकेश से सीधी बस सेवाएं।"
    },
    {
      id: "airport",
      name: "Jolly Grant Airport, Dehradun",
      nameHi: "जॉली ग्रांट हवाई अड्डा (देहरादून)",
      category: "transit",
      distance: "38 km",
      time: "50-60 min drive",
      timeHi: "50-60 मिनट ड्राइव",
      description: "Nearest domestic airport with daily flights connecting all major Indian metros.",
      descriptionHi: "निकटतम घरेलू हवाई अड्डा।"
    }
  ],

  // ---------------------------------------------------------------------------
  // 9. WHY CHOOSE US REASONS
  // ---------------------------------------------------------------------------
  whyChooseUs: [
    {
      title: "Prime Location Near Har Ki Pauri",
      titleHi: "हर की पौड़ी के अत्यंत निकट",
      description: "Walk to the holy river Ganga in just 5 minutes for morning Snan and evening Aarti without battling heavy traffic.",
      descriptionHi: "मात्र 5 मिनट में पैदल गंगा तट पहुंचकर सुबह का पावन स्नान और शाम की दिव्य आरती का आनंद लें।"
    },
    {
      title: "Pure Pilgrim & Family Atmosphere",
      titleHi: "सात्विक एवं पारिवारिक वातावरण",
      description: "Strictly vegetarian, quiet, and devotional environment where families, elderly parents, and pilgrimage groups feel secure.",
      descriptionHi: "शुद्ध शाकाहारी, मर्यादित और शांत माहौल जहां परिवार और वृद्ध माता-पिता पूर्णतः सुरक्षित महसूस करते हैं।"
    },
    {
      title: "Transparent & Affordable Tariff",
      titleHi: "पारदर्शी एवं उचित दरें",
      description: "No hidden charges or peak season surprises without prior intimation. Clean value-for-money accommodation.",
      descriptionHi: "बिना किसी छुपे हुए शुल्क के साफ-सुथरा और किफायती प्रवास।"
    },
    {
      title: "Elevator & Elderly Care",
      titleHi: "लिफ्ट सुविधा व बुजुर्गों की देखभाल",
      description: "Lift available to all floors so senior citizens can stay comfortably without climbing steep stairs.",
      descriptionHi: "सभी मंजिलों तक लिफ्ट की सुविधा, जिससे वरिष्ठ नागरिकों को सीढ़ियां चढ़ने में परेशानी न हो।"
    }
  ],

  // ---------------------------------------------------------------------------
  // 10. PHOTO GALLERY CATEGORIES & IMAGES
  // ---------------------------------------------------------------------------
  galleryCategories: [
    { id: "all", label: "All Photos", labelHi: "सभी तस्वीरें" },
    { id: "rooms", label: "Guest Rooms", labelHi: "कमरे" },
    { id: "exterior", label: "Exterior & Reception", labelHi: "बाहरी दृश्य व रिसेप्शन" },
    { id: "dining", label: "Dining & Bhojanalaya", labelHi: "भोजनालय" },
    { id: "nearby", label: "Nearby Ganga & Temples", labelHi: "गंगा तट व मंदिर" },
  ],
  gallery: [
    {
      id: 1,
      category: "rooms",
      title: "AC Deluxe Room",
      titleHi: "एसी डीलक्स रूम",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "rooms",
      title: "Spacious Family Suite",
      titleHi: "विशाल फैमिली सुइट",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "exterior",
      title: "Clean Reception & Waiting Lounge",
      titleHi: "स्वच्छ रिसेप्शन एवं लॉबी",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      category: "dining",
      title: "Satvik Dining Hall",
      titleHi: "सात्विक भोजन कक्ष",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      category: "nearby",
      title: "Sacred Har Ki Pauri Ghat (450m away)",
      titleHi: "पावन हर की पौड़ी घाट (450 मीटर दूर)",
      url: "https://images.unsplash.com/photo-1626014303757-6466336e3f4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      category: "nearby",
      title: "Divine Evening Ganga Aarti",
      titleHi: "भव्य सांध्य गंगा आरती दर्शन",
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      category: "rooms",
      title: "Clean Attached Bathroom with Geyser",
      titleHi: "स्वच्छ अटैच्ड बाथरूम (गीजर सहित)",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      category: "rooms",
      title: "Pilgrim Shared Dormitory Bed",
      titleHi: "तीर्थयात्री साझा डॉर्मिटरी",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    }
  ],

  // ---------------------------------------------------------------------------
  // 11. GENUINE OWNER-APPROVED TESTIMONIALS (Realistic Demo Content)
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      id: 1,
      name: "Rameshwar Sharma & Family",
      nameHi: "रामेश्वर शर्मा एवं परिवार",
      location: "Jaipur, Rajasthan",
      locationHi: "जयपुर, राजस्थान",
      stayType: "Family Pilgrimage",
      stayTypeHi: "पारिवारिक तीर्थ यात्रा",
      rating: 5,
      date: "October 2025",
      review: "We stayed for 3 nights with our elderly parents. The lift facility was a blessing, and Har Ki Pauri is just a short 5-minute walk. Very neat, clean rooms and peaceful atmosphere.",
      reviewHi: "हम अपने बुजुर्ग माता-पिता के साथ 3 रातों के लिए रुके थे। लिफ्ट की सुविधा बहुत मददगार रही और हर की पौड़ी केवल 5 मिनट की पैदल दूरी पर है। कमरे बेहद स्वच्छ और वातावरण बहुत शांत था।"
    },
    {
      id: 2,
      name: "Anil K. Agrawal",
      nameHi: "अनिल के. अग्रवाल",
      location: "Indore, Madhya Pradesh",
      locationHi: "इंदौर, मध्य प्रदेश",
      stayType: "Ganga Snan & Rituals",
      stayTypeHi: "गंगा स्नान एवं अनुष्ठान",
      rating: 5,
      date: "September 2025",
      review: "Honest and cooperative staff. The Satvik bhojanalaya served simple, fresh food which suited our fasting requirements. Excellent value for money in Haridwar.",
      reviewHi: "अत्यंत ईमानदार और सहयोगी कर्मचारी। सात्विक भोजनालय में बिना लहसुन-प्याज का सादा, ताजा भोजन मिला। हरिद्वार में उत्तम व्यवस्था।"
    },
    {
      id: 3,
      name: "Sunita & Vikram Joshi",
      nameHi: "सुनीता एवं विक्रम जोशी",
      location: "New Delhi",
      locationHi: "नई दिल्ली",
      stayType: "Weekend Spiritual Trip",
      stayTypeHi: "सप्ताहांत आध्यात्मिक यात्रा",
      rating: 5,
      date: "August 2025",
      review: "Booking enquiry over WhatsApp was prompt and smooth. AC worked seamlessly, geyser had constant hot water, and the reception guided us for morning Aarti timings.",
      reviewHi: "व्हाट्सएप पर बुकिंग की पूछताछ बहुत त्वरित और सरल थी। एसी और गीजर की सुविधा बढ़िया रही, रिसेप्शन ने आरती समय की पूरी जानकारी दी।"
    }
  ],

  // ---------------------------------------------------------------------------
  // 12. SOCIAL MEDIA & EXTERNAL LINKS
  // ---------------------------------------------------------------------------
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    googleReviews: "https://maps.google.com",
    tripadvisor: "https://tripadvisor.com"
  },

  // ---------------------------------------------------------------------------
  // 13. SEO & META INFORMATION
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | Ganga Niwas - Hotel & Pilgrim Guest House, Haridwar",
    defaultTitle: "Ganga Niwas | Peaceful Stay Near Har Ki Pauri, Haridwar",
    defaultDescription: "Comfortable, clean and affordable hotel and dharamshala stay near Har Ki Pauri Haridwar. AC/Non-AC rooms, family suites, Satvik food, lift & 24hr hot water.",
    keywords: "hotel in haridwar, dharamshala near har ki pauri, guest house haridwar, budget stay haridwar, ganga niwas, bhakt niwas haridwar, pilgrim accommodation haridwar",
    schemaType: "LodgingBusiness",
    priceRange: "₹₹ (₹350 - ₹3,500)"
  }
};
