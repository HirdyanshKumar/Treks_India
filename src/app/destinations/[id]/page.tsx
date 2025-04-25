"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaMapMarkerAlt, FaClock, FaMountain, FaRupeeSign, FaCalendarAlt, FaUsers, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

// Trek data - this would typically come from a database or API
const allTreks = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 12500,
    description: "Explore the UNESCO World Heritage site famous for its meadows of endemic alpine flowers and variety of flora.",
    region: "Uttarakhand",
    maxAltitude: "3,658 meters",
    groupSize: "10-15 people",
    bestSeason: "July to September",
    overview: `The Valley of Flowers trek is a mesmerizing journey through one of India's most beautiful high-altitude meadows. Located in the Western Himalayas in Uttarakhand, this UNESCO World Heritage site comes alive with vibrant wildflowers during the monsoon season.
    
    The trek takes you through verdant meadows, rushing streams, and majestic mountains. The valley is home to over 500 species of wild flowers including primulas, daisies, lilies, poppies, and many rare and endangered plants. It's also rich in wildlife, with chances to spot Himalayan black bears, snow leopards, blue sheep, and numerous bird species.
    
    Each year, the melting snow gives way to a spectacular display of flowers that bloom in succession, creating a constantly changing landscape of colors throughout the season.`,
    highlights: [
      "Trek through a UNESCO World Heritage site",
      "Witness over 500 species of endemic Himalayan flowers",
      "Visit the holy Hemkund Sahib Gurudwara",
      "Pass through the charming village of Ghangaria",
      "Experience the beauty of the Pushpawati river valley"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi to Joshimath (1,890m)",
        description: "Overnight journey from Delhi to Joshimath by bus or car."
      },
      {
        day: "Day 2",
        title: "Joshimath to Govindghat (1,828m) to Ghangaria (3,049m)",
        description: "Morning drive to Govindghat followed by a 14km trek to Ghangaria. Overnight stay in Ghangaria."
      },
      {
        day: "Day 3",
        title: "Ghangaria to Valley of Flowers (3,658m) and back",
        description: "Full day excursion to Valley of Flowers. Return to Ghangaria for overnight stay."
      },
      {
        day: "Day 4",
        title: "Ghangaria to Hemkund Sahib (4,329m) and back",
        description: "Trek to the sacred Hemkund Sahib lake and Gurudwara. Return to Ghangaria for overnight stay."
      },
      {
        day: "Day 5",
        title: "Ghangaria to Govindghat to Joshimath",
        description: "Descend from Ghangaria to Govindghat and drive to Joshimath. Overnight in Joshimath."
      },
      {
        day: "Day 6",
        title: "Joshimath to Delhi",
        description: "Return journey to Delhi. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (hotels in Joshimath, guesthouses in Ghangaria)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Safety equipment and first aid kit",
      "Permits and entry fees",
      "Transportation from Joshimath to Govindghat and back"
    ],
    exclusions: [
      "Transportation from Delhi to Joshimath and back",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters/mules for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "chadar-trek",
    name: "Chadar Trek",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    location: "Ladakh",
    duration: "9 Days",
    difficulty: "Difficult",
    price: 22999,
    description: "Walk on the frozen Zanskar River with towering mountains on both sides in this unique winter adventure.",
    region: "Ladakh",
    maxAltitude: "3,850 meters",
    groupSize: "8-12 people",
    bestSeason: "January to February",
    overview: `The Chadar Trek is one of the most unique and challenging winter treks in the world. It involves walking on the frozen Zanskar River in Ladakh, surrounded by towering canyon walls and breathtaking winter landscapes.
    
    The trek gets its name from the blanket of ice that forms over the Zanskar river during the harsh winter months, creating a 'chadar' or sheet that serves as the only path connecting remote villages to the outside world.
    
    This trek offers a rare glimpse into the traditional winter life of the Zanskari people and takes you through a stunning frozen landscape that seems almost otherworldly.`,
    highlights: [
      "Walk on the frozen Zanskar River",
      "Experience one of the most unique winter treks in the world",
      "Witness stunning frozen waterfalls and ice formations",
      "Stay in caves and remote villages",
      "Learn about the traditional winter lifestyle of the Zanskari people"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Leh (3,500m)",
        description: "Arrive in Leh and rest for acclimatization."
      },
      {
        day: "Day 2",
        title: "Acclimatization in Leh",
        description: "Sightseeing and preparation for the trek."
      },
      {
        day: "Day 3",
        title: "Leh to Chilling to Tilad Do (3,100m)",
        description: "Drive to Chilling and trek to Tilad Do. First day on the frozen river."
      },
      {
        day: "Day 4",
        title: "Tilad Do to Gyalpo (3,170m)",
        description: "Trek on the frozen river to Gyalpo."
      },
      {
        day: "Day 5",
        title: "Gyalpo to Tibb Cave (3,225m)",
        description: "Continue on the Chadar to Tibb Cave."
      },
      {
        day: "Day 6",
        title: "Tibb Cave to Nerak (3,390m)",
        description: "Trek to Nerak village and witness the frozen waterfall."
      },
      {
        day: "Day 7",
        title: "Nerak to Tibb Cave",
        description: "Return journey to Tibb Cave."
      },
      {
        day: "Day 8",
        title: "Tibb Cave to Tilad Do",
        description: "Trek back to Tilad Do."
      },
      {
        day: "Day 9",
        title: "Tilad Do to Chilling to Leh",
        description: "Final day of trek to Chilling and drive back to Leh."
      }
    ],
    inclusions: [
      "Accommodation (hotels in Leh, camping during the trek)",
      "All meals during the trek",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Oxygen cylinders for emergencies",
      "Inner line permits and wildlife fees",
      "Transportation from Leh to Chilling and back"
    ],
    exclusions: [
      "Flights to and from Leh",
      "Personal expenses and tips",
      "Travel insurance",
      "Winter clothing (can be rented in Leh)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "goechala",
    name: "Goechala Trek",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=800&auto=format&fit=crop",
    location: "Sikkim",
    duration: "11 Days",
    difficulty: "Difficult",
    price: 18500,
    description: "Get up close with the mighty Kanchenjunga, the third highest mountain in the world.",
    region: "Sikkim",
    maxAltitude: "4,940 meters",
    groupSize: "8-12 people",
    bestSeason: "April to May, September to November",
    overview: `The Goechala Trek is one of the most rewarding treks in the Eastern Himalayas, offering stunning views of the Kanchenjunga massif, the third highest mountain in the world. Located in the state of Sikkim, this trek takes you through rhododendron forests, high-altitude meadows, and pristine mountain lakes.
    
    The trek provides multiple viewpoints for observing Kanchenjunga and other peaks of the region. The landscape changes dramatically throughout the journey, from lush forests at lower elevations to alpine terrain near the pass.
    
    Goechala is also known for its incredible sunrise views, when the first rays of the sun illuminate the snow-covered peaks with golden light.`,
    highlights: [
      "Witness breathtaking views of Mt. Kanchenjunga, the third highest mountain in the world",
      "Trek through beautiful rhododendron forests (especially colorful in spring)",
      "Visit the sacred Samiti Lake",
      "Experience the diverse cultures of Sikkim",
      "Observe various other Himalayan peaks including Pandim, Kabru, and Rathong"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in New Jalpaiguri/Bagdogra - Drive to Yuksom (1,780m)",
        description: "Arrive at New Jalpaiguri/Bagdogra and drive to Yuksom. Overnight in Yuksom."
      },
      {
        day: "Day 2",
        title: "Yuksom to Sachen (2,200m)",
        description: "First day of trek from Yuksom to Sachen through forests. Overnight camping."
      },
      {
        day: "Day 3",
        title: "Sachen to Tshoka (3,000m)",
        description: "Trek from Sachen to Tshoka with gradual ascent. Overnight camping."
      },
      {
        day: "Day 4",
        title: "Tshoka to Dzongri (4,020m)",
        description: "Trek through rhododendron forests to Dzongri. Overnight camping."
      },
      {
        day: "Day 5",
        title: "Acclimatization day at Dzongri",
        description: "Rest and acclimatization day with a short hike to Dzongri Top for sunrise views."
      },
      {
        day: "Day 6",
        title: "Dzongri to Thansing (3,930m)",
        description: "Trek from Dzongri to Thansing through meadows. Overnight camping."
      },
      {
        day: "Day 7",
        title: "Thansing to Lamuney (4,200m)",
        description: "Short trek to Lamuney, the base camp for Goechala Pass. Overnight camping."
      },
      {
        day: "Day 8",
        title: "Lamuney to Goechala Pass (4,940m) and back to Thansing",
        description: "Early morning trek to Goechala Pass for sunrise views of Kanchenjunga. Return to Thansing for overnight stay."
      },
      {
        day: "Day 9",
        title: "Thansing to Tshoka",
        description: "Begin return journey, trekking from Thansing to Tshoka. Overnight camping."
      },
      {
        day: "Day 10",
        title: "Tshoka to Yuksom",
        description: "Final day of trek back to Yuksom. Overnight in Yuksom."
      },
      {
        day: "Day 11",
        title: "Yuksom to New Jalpaiguri/Bagdogra",
        description: "Drive from Yuksom back to New Jalpaiguri/Bagdogra. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (hotels in Yuksom, camping during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Sikkim permits and trekking fees",
      "Transportation from New Jalpaiguri/Bagdogra to Yuksom and back"
    ],
    exclusions: [
      "Transportation to and from New Jalpaiguri/Bagdogra",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "markha-valley",
    name: "Markha Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    location: "Ladakh",
    duration: "8 Days",
    difficulty: "Moderate to Difficult",
    price: 17500,
    description: "One of the most popular treks in Ladakh, featuring stunning landscapes, Buddhist monasteries, and traditional villages.",
    region: "Ladakh",
    maxAltitude: "4,970 meters",
    groupSize: "8-12 people",
    bestSeason: "June to September",
    overview: `The Markha Valley Trek is among the most scenic and culturally rich treks in Ladakh. It offers an incredible blend of dramatic mountain landscapes, remote villages, high-altitude plateaus, and Buddhist culture.

    The trek passes through the Hemis National Park, home to various endangered species including the snow leopard. Along the way, you'll encounter stunning vistas of the Zanskar and Ladakh mountain ranges, cross high mountain passes, and visit ancient monasteries.
    
    One of the unique features of this trek is the opportunity to experience the traditional lifestyle of Ladakhi villagers, staying in homestays or camping near remote settlements. The stark beauty of the Ladakh landscape, with its barren mountains, green valleys, and crystal-clear streams, creates a mesmerizing contrast.`,
    highlights: [
      "Trek through the stunning landscapes of Hemis National Park",
      "Cross the challenging Kongmaru La pass (5,260m)",
      "Visit traditional Ladakhi villages and Buddhist monasteries",
      "Experience the unique culture and lifestyle of local inhabitants",
      "Witness spectacular views of Zanskar and Ladakh mountain ranges"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Leh (3,500m)",
        description: "Arrive in Leh and rest for acclimatization."
      },
      {
        day: "Day 2",
        title: "Acclimatization and sightseeing in Leh",
        description: "Visit local monasteries and markets while adapting to the altitude."
      },
      {
        day: "Day 3",
        title: "Leh to Chilling to Skiu (3,400m)",
        description: "Drive to Chilling and begin trek to Skiu village along the Markha River."
      },
      {
        day: "Day 4",
        title: "Skiu to Markha Village (3,760m)",
        description: "Trek through the valley crossing several streams to reach Markha village."
      },
      {
        day: "Day 5",
        title: "Markha to Hankar (3,980m)",
        description: "Continue up the valley passing small settlements to reach Hankar village."
      },
      {
        day: "Day 6",
        title: "Hankar to Nimaling (4,720m)",
        description: "Climb to the high pastures of Nimaling with views of Kang Yatse peak."
      },
      {
        day: "Day 7",
        title: "Nimaling to Shang Sumdo via Kongmaru La (5,260m)",
        description: "Cross the Kongmaru La pass with spectacular views and descend to Shang Sumdo."
      },
      {
        day: "Day 8",
        title: "Shang Sumdo to Leh",
        description: "Drive back to Leh. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (hotels in Leh, camping or homestays during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Inner line permits and Hemis National Park fees",
      "Transportation from Leh to trek starting point and back"
    ],
    exclusions: [
      "Flights to and from Leh",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "har-ki-dun",
    name: "Har Ki Dun Trek",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "7 Days",
    difficulty: "Moderate",
    price: 11500,
    description: "Ancient trail in the Himalayas with spectacular valleys, dense forests, and villages with 3,000-year-old architecture.",
    region: "Uttarakhand",
    maxAltitude: "3,566 meters",
    groupSize: "8-15 people",
    bestSeason: "March to June, September to November",
    overview: `Har Ki Dun, meaning "Valley of Gods," is one of the most beautiful and culturally rich valleys in the Garhwal Himalayas. This cradle-shaped valley is surrounded by snow-capped peaks and offers panoramic views of the Swargarohini group of peaks.

    The trek takes you through ancient villages with wooden houses and unique architecture that has remained unchanged for centuries. These villages are believed to be among the oldest in the Himalayas, dating back to the time of the Mahabharata.
    
    The trail passes through dense forests of chestnut, walnut, willows, and chinars, alongside terraced fields and meadows. During spring, the valley becomes a paradise of wildflowers, while autumn paints it with golden hues. In winter, the entire valley is covered in a blanket of snow, offering a magical landscape.`,
    highlights: [
      "Trek to the cradle-shaped valley surrounded by majestic Himalayan peaks",
      "Visit ancient villages with unique architecture dating back thousands of years",
      "Explore the Govind Wildlife Sanctuary with its rich flora and fauna",
      "Witness the traditional lifestyle of the local people in remote mountain villages",
      "Enjoy panoramic views of Swargarohini peaks and Bandarpoonch ranges"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri (1,950m)",
        description: "Drive from Dehradun to Sankri village. Overnight stay in Sankri."
      },
      {
        day: "Day 2",
        title: "Sankri to Pauni Garaat (2,400m)",
        description: "Begin trek along the Supin River through forests to Pauni Garaat. Overnight camping."
      },
      {
        day: "Day 3",
        title: "Pauni Garaat to Kalkattiyadhar (3,100m)",
        description: "Trek through dense forests and meadows to Kalkattiyadhar. Spectacular views of the valleys."
      },
      {
        day: "Day 4",
        title: "Kalkattiyadhar to Har Ki Dun (3,566m)",
        description: "Trek to Har Ki Dun valley with stunning views of Swargarohini peaks. Overnight camping."
      },
      {
        day: "Day 5",
        title: "Exploration day at Har Ki Dun",
        description: "Full day to explore the valley, visit nearby villages, and take in the panoramic views."
      },
      {
        day: "Day 6",
        title: "Har Ki Dun to Pauni Garaat",
        description: "Begin return journey, trekking from Har Ki Dun to Pauni Garaat. Overnight camping."
      },
      {
        day: "Day 7",
        title: "Pauni Garaat to Sankri to Dehradun",
        description: "Trek to Sankri and drive back to Dehradun. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (guesthouses in Sankri, camping during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Forest and wildlife sanctuary permits",
      "Transportation from Dehradun to Sankri and back"
    ],
    exclusions: [
      "Transportation to and from Dehradun",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "roopkund",
    name: "Roopkund Trek",
    image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "8 Days",
    difficulty: "Difficult",
    price: 14800,
    description: "Trek to the mysterious skeleton lake at 16,470 feet surrounded by snow-clad mountains and breathtaking meadows.",
    region: "Uttarakhand",
    maxAltitude: "5,020 meters (16,470 feet)",
    groupSize: "8-15 people",
    bestSeason: "May to June, September to October",
    overview: `The Roopkund Trek is one of the most fascinating and challenging treks in the Garhwal Himalayas, leading to a mysterious glacial lake at an altitude of 5,020 meters. Known as the "Skeleton Lake," Roopkund is famous for the hundreds of human skeletons found at its shores, dating back to the 9th century CE.

    The trek offers incredible diversity in landscapes, starting from dense oak and rhododendron forests, passing through some of the most beautiful high-altitude meadows (bugyals) like Ali and Bedni Bugyal, and finally ascending to the alpine zone with the snow-covered lake surrounded by towering Himalayan peaks.
    
    Besides its historical mystery, Roopkund also offers breathtaking views of prominent peaks such as Trishul, Nanda Ghunti, and parts of the Nanda Devi range. The trek combines natural beauty, adventure, and mystery, making it a truly unique experience.`,
    highlights: [
      "Visit the mysterious Roopkund Lake with ancient human skeletons",
      "Trek through the magnificent Ali and Bedni Bugyal, some of the largest high-altitude meadows in Asia",
      "Experience diverse landscapes from lush forests to alpine terrain",
      "Enjoy panoramic views of major Himalayan peaks including Trishul and Nanda Ghunti",
      "Visit the ancient Kalu Vinayak temple on the trail"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung (2,300m)",
        description: "Drive from Kathgodam to Lohajung village. Overnight stay in Lohajung."
      },
      {
        day: "Day 2",
        title: "Lohajung to Didna Village (2,450m)",
        description: "Begin trek from Lohajung to Didna village through oak forests. Overnight in homestay or camping."
      },
      {
        day: "Day 3",
        title: "Didna to Ali Bugyal (3,400m)",
        description: "Trek through oak forests to reach the beautiful Ali Bugyal meadows. Overnight camping."
      },
      {
        day: "Day 4",
        title: "Ali Bugyal to Patar Nachauni via Bedni Bugyal (3,800m)",
        description: "Trek across Bedni Bugyal with stunning mountain views to reach Patar Nachauni. Overnight camping."
      },
      {
        day: "Day 5",
        title: "Patar Nachauni to Bhagwabasa (4,100m)",
        description: "Trek past Kalu Vinayak temple to reach Bhagwabasa, the base for Roopkund. Overnight camping."
      },
      {
        day: "Day 6",
        title: "Bhagwabasa to Roopkund (5,020m) and back to Bedni Bugyal",
        description: "Early morning trek to Roopkund Lake, explore the area, and return to Bedni Bugyal. Overnight camping."
      },
      {
        day: "Day 7",
        title: "Bedni Bugyal to Wan Village",
        description: "Trek down to Wan village through forests and streams. Overnight in homestay or camping."
      },
      {
        day: "Day 8",
        title: "Wan to Kathgodam",
        description: "Drive from Wan village to Kathgodam. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (guesthouses/homestays in villages, camping during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit with oxygen",
      "Forest permits and entry fees",
      "Transportation from Kathgodam to trek starting point and back"
    ],
    exclusions: [
      "Transportation to and from Kathgodam",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "pin-parvati",
    name: "Pin Parvati Pass",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "11 Days",
    difficulty: "Very Difficult",
    price: 25000,
    description: "Cross from the lush Parvati Valley to the barren Pin Valley in Spiti through a challenging high-altitude pass at 17,457 feet.",
    region: "Himachal Pradesh",
    maxAltitude: "5,319 meters (17,457 feet)",
    groupSize: "6-10 people",
    bestSeason: "July to September",
    overview: `The Pin Parvati Pass trek is one of the most challenging and rewarding treks in the Indian Himalayas. This remarkable journey connects the lush green Parvati Valley in Kullu to the barren, desert-like Pin Valley in Spiti, crossing the mighty Pin Parvati Pass at 5,319 meters (17,457 feet).

    The trek offers an incredible contrast in landscapes, beginning with dense forests, meadows, and hot springs in the Parvati Valley, and gradually transitioning to the stark, moon-like landscapes of Spiti. The dramatic change in scenery, vegetation, culture, and even climate as you cross from one valley to another is unparalleled.
    
    This expedition involves walking on glaciers, crossing rivers, navigating through moraines, and traversing the challenging Pin Parvati Pass. The pristine beauty of high-altitude lakes, massive glaciers, and towering Himalayan peaks makes this arduous journey worthwhile for experienced trekkers.`,
    highlights: [
      "Cross the challenging Pin Parvati Pass at 17,457 feet",
      "Experience the dramatic transition from the green Parvati Valley to the barren Pin Valley",
      "Trek through diverse landscapes including forests, meadows, glaciers, and high-altitude deserts",
      "Visit the natural hot springs at Khir Ganga",
      "Experience the unique Buddhist culture of Spiti Valley at the end of the trek"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi/Chandigarh to Manali",
        description: "Drive to Manali. Overnight stay and preparation for the trek."
      },
      {
        day: "Day 2",
        title: "Manali to Barshaini to Khir Ganga (2,960m)",
        description: "Drive to Barshaini and trek to Khir Ganga. Enjoy natural hot springs. Overnight camping."
      },
      {
        day: "Day 3",
        title: "Khir Ganga to Tunda Bhuj (3,285m)",
        description: "Trek along the Parvati River through forests to Tunda Bhuj. Overnight camping."
      },
      {
        day: "Day 4",
        title: "Tunda Bhuj to Thakur Kuan (3,560m)",
        description: "Trek through meadows and forests to reach Thakur Kuan. Overnight camping."
      },
      {
        day: "Day 5",
        title: "Thakur Kuan to Odi Thach (3,790m)",
        description: "Continue trekking up the valley to Odi Thach. Overnight camping."
      },
      {
        day: "Day 6",
        title: "Odi Thach to Mantalai Lake (4,115m)",
        description: "Trek to the sacred Mantalai Lake, source of the Parvati River. Overnight camping."
      },
      {
        day: "Day 7",
        title: "Mantalai to Pin Parvati Base Camp (4,550m)",
        description: "Trek over glacial moraines to the base camp for Pin Parvati Pass. Overnight camping."
      },
      {
        day: "Day 8",
        title: "Base Camp to Pin Parvati Pass (5,319m) to Pin Valley Camp (4,300m)",
        description: "Cross the challenging Pin Parvati Pass and descend to camp in the Pin Valley. Overnight camping."
      },
      {
        day: "Day 9",
        title: "Pin Valley Camp to Wichkurung Thatch (3,980m)",
        description: "Descend further into the Pin Valley to Wichkurung Thatch. Overnight camping."
      },
      {
        day: "Day 10",
        title: "Wichkurung Thatch to Mud Village (3,650m)",
        description: "Trek to Mud, the first village in the Pin Valley. Overnight stay in homestay or camping."
      },
      {
        day: "Day 11",
        title: "Mud to Kaza/Manali",
        description: "Drive from Mud village to Kaza or Manali. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (hotels in Manali, camping during the trek, homestay in Mud)",
      "All meals during the trek (nutritious vegetarian)",
      "Experienced high-altitude trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment including ropes, micro-spikes, and first aid kit with oxygen",
      "Inner line permits and wildlife sanctuary fees",
      "Transportation from Manali to trek starting point and from endpoint to Kaza/Manali"
    ],
    exclusions: [
      "Transportation to and from Manali/Chandigarh/Delhi",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Specialized high-altitude equipment (can be rented)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "hampta-pass",
    name: "Hampta Pass",
    image: "https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate to Difficult",
    price: 9999,
    description: "Experience dramatic landscape changes from lush green valleys of Kullu to the barren lands of Lahaul.",
    region: "Himachal Pradesh",
    maxAltitude: "4,270 meters",
    groupSize: "8-12 people",
    bestSeason: "June to September",
    overview: `The Hampta Pass trek is renowned for its dramatic landscape transformation, taking you from the lush green valleys of Kullu to the stark desert-like terrain of Lahaul. This stunning crossover trek offers incredible diversity in scenery over a relatively short distance.

    Starting from Manali, the trek ascends through beautiful forests of pine and maple, alongside the Hampta river, gradually opening up to wide meadows and stunning valleys. The landscape changes dramatically as you cross the Hampta Pass at 4,270 meters, offering breathtaking views of the Lahaul valley on one side and the Kullu valley on the other.
    
    The trek culminates with a visit to the stunning crescent-shaped Chandratal Lake (Moon Lake), where the turquoise waters against the barren mountains create a surreal sight that ranks among the most beautiful in the Himalayas.`,
    highlights: [
      "Experience dramatic landscape changes from lush green valleys to stark mountain desert",
      "Cross the challenging Hampta Pass at 4,270 meters",
      "Visit the beautiful crescent-shaped Chandratal Lake",
      "Camp in the scenic Balu Ka Ghera and Shea Goru",
      "Witness stunning panoramic views of the Lahaul and Spiti valleys"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Manali to Jobra to Chika (3,100m)",
        description: "Drive from Manali to Jobra and trek to Chika. Overnight camping at Chika."
      },
      {
        day: "Day 2",
        title: "Chika to Balu Ka Ghera (3,600m)",
        description: "Trek through meadows and valleys to Balu Ka Ghera. Overnight camping."
      },
      {
        day: "Day 3",
        title: "Balu Ka Ghera to Shea Goru via Hampta Pass (4,270m)",
        description: "Cross the Hampta Pass and descend to Shea Goru. Overnight camping."
      },
      {
        day: "Day 4",
        title: "Shea Goru to Chatru to Chandratal Lake (4,300m)",
        description: "Trek to Chatru and drive to the beautiful Chandratal Lake. Overnight camping."
      },
      {
        day: "Day 5",
        title: "Chandratal to Manali",
        description: "Drive from Chandratal back to Manali via Rohtang Pass. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (camping during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Transportation from Manali to Jobra and from Chandratal to Manali",
      "Forest and wildlife permits"
    ],
    exclusions: [
      "Transportation to and from Manali",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "sandakphu",
    name: "Sandakphu Trek",
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=800&auto=format&fit=crop",
    location: "West Bengal",
    duration: "7 Days",
    difficulty: "Moderate to Difficult",
    price: 14999,
    description: "The highest peak in West Bengal offering spectacular views of four of the five highest peaks in the world.",
    region: "West Bengal",
    maxAltitude: "3,636 meters",
    groupSize: "8-12 people",
    bestSeason: "March to May, October to December",
    overview: `The Sandakphu Trek takes you to the highest peak in West Bengal, known as the "Trekkers Wonderland." This magnificent ridge-top journey offers one of the most dramatic mountain views in the entire Himalayan range.

    From the summit of Sandakphu at 3,636 meters, trekkers are rewarded with unparalleled panoramic views of four of the five highest peaks in the world: Mt. Everest, Kanchenjunga, Lhotse, and Makalu. The sight of the massive Kanchenjunga massif, known as the "Sleeping Buddha" due to its resemblance to a sleeping Buddha figure, is the highlight of this trek.
    
    The trail passes through the Singalila National Park, winding through dense forests of rhododendrons, magnolias, and bamboo, picturesque villages, and tea gardens. The unique aspect of this trek is that it crosses between India and Nepal multiple times, offering a blend of both cultures.`,
    highlights: [
      "View four of the five highest peaks in the world: Everest, Kanchenjunga, Lhotse, and Makalu",
      "Witness the magnificent 'Sleeping Buddha' formation of the Kanchenjunga range",
      "Trek along the border of India and Nepal, experiencing both cultures",
      "Explore the beautiful Singalila National Park with its diverse flora and fauna",
      "Stay in traditional tea houses and experience local mountain culture"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "New Jalpaiguri/Bagdogra to Maneybhanjang (2,100m)",
        description: "Arrive at New Jalpaiguri/Bagdogra and drive to Maneybhanjang. Overnight stay."
      },
      {
        day: "Day 2",
        title: "Maneybhanjang to Tumling (2,900m)",
        description: "Trek from Maneybhanjang to Tumling through forests and villages. Overnight in tea house/homestay."
      },
      {
        day: "Day 3",
        title: "Tumling to Kalipokhri (3,100m)",
        description: "Trek along the Nepal-India border through Garibas and Kanyakatta to reach Kalipokhri. Overnight stay."
      },
      {
        day: "Day 4",
        title: "Kalipokhri to Sandakphu (3,636m)",
        description: "Trek to Sandakphu summit with breathtaking views of the Himalayan giants. Overnight stay."
      },
      {
        day: "Day 5",
        title: "Sandakphu to Sabargram (3,425m)",
        description: "Trek along the ridge with continuous views of the mountains to Sabargram. Overnight stay."
      },
      {
        day: "Day 6",
        title: "Sabargram to Rimbik (2,400m)",
        description: "Long descent through forests to the village of Rimbik. Overnight stay."
      },
      {
        day: "Day 7",
        title: "Rimbik to New Jalpaiguri/Bagdogra",
        description: "Drive from Rimbik back to New Jalpaiguri/Bagdogra. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (tea houses/homestays during the trek)",
      "All meals during the trek",
      "Professional, experienced trek leaders and guides",
      "Safety equipment and first aid kit",
      "Singalila National Park and trekking permits",
      "Transportation from New Jalpaiguri/Bagdogra to Maneybhanjang and from Rimbik back"
    ],
    exclusions: [
      "Transportation to and from New Jalpaiguri/Bagdogra",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "kheerganga",
    name: "Kheerganga Trek",
    image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "3 Days",
    difficulty: "Easy to Moderate",
    price: 6999,
    description: "A picturesque trek to natural hot springs amidst the scenic landscape of Parvati Valley.",
    region: "Himachal Pradesh",
    maxAltitude: "2,960 meters",
    groupSize: "10-15 people",
    bestSeason: "May to June, September to November",
    overview: `The Kheerganga trek is one of the most popular short treks in Himachal Pradesh, culminating at a natural hot spring surrounded by spectacular mountain views. Located in the beautiful Parvati Valley, this trek offers a perfect blend of adventure, natural beauty, and spiritual experience.

    The trail passes through charming villages, dense pine forests, and breathtaking valleys. According to local legend, Kheerganga was the place where Lord Shiva meditated for thousands of years. The hot spring at the top is believed to have medicinal properties and is a perfect place to relax after the challenging trek.
    
    What makes this trek special is its accessibility for beginners while still offering stunning Himalayan vistas. The vibrant culture of the Parvati Valley, with its unique blend of hippie and traditional mountain lifestyles, adds another dimension to this trekking experience.`,
    highlights: [
      "Soak in the natural hot springs at Kheerganga",
      "Experience the unique hippie culture of Parvati Valley",
      "Trek through dense pine forests and scenic meadows",
      "Visit the spiritual village of Kalga",
      "Enjoy panoramic views of the Parvati Valley and surrounding mountains"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi/Chandigarh to Kasol to Barshaini",
        description: "Arrive at Kasol, explore the town, and drive to Barshaini. Overnight stay in Barshaini or Tosh."
      },
      {
        day: "Day 2",
        title: "Barshaini to Kheerganga (2,960m)",
        description: "Trek from Barshaini to Kheerganga through Rudra Nag and Kalga village. Enjoy the hot springs in the evening. Overnight in tent or basic accommodation."
      },
      {
        day: "Day 3",
        title: "Kheerganga to Barshaini to Kasol/Delhi",
        description: "Morning trek back to Barshaini and transfer to Kasol. Return journey. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (basic guesthouses, homestays or camping)",
      "All meals during the trek",
      "Professional, experienced trek guides",
      "Safety equipment and first aid kit",
      "Transportation from Kasol to Barshaini and back"
    ],
    exclusions: [
      "Transportation to and from Kasol",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "brahmatal",
    name: "Brahmatal Trek",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 9500,
    description: "Experience breathtaking views of Mt. Trishul and Nanda Ghunti with alpine lakes and meadows.",
    region: "Uttarakhand",
    maxAltitude: "3,700 meters",
    groupSize: "8-15 people",
    bestSeason: "December to March (winter trek), April to June (summer trek)",
    overview: `The Brahmatal Trek is one of the most scenic winter treks in the Uttarakhand Himalayas, offering spectacular views of snow-capped peaks, frozen alpine lakes, and pristine snow-covered meadows. What makes this trek special is that it's one of the few high-altitude treks accessible during winter when most other trails are closed.

    The trail passes through dense oak and rhododendron forests, alpine meadows, and leads to the mystical Brahmatal Lake, which remains partially frozen during winter. From the Brahmatal Top at 3,700 meters, trekkers are rewarded with breathtaking panoramic views of major Himalayan peaks, including Mt. Trishul, Nanda Ghunti, and parts of the Roopkund range.
    
    The trek is named after Lord Brahma, who is said to have meditated by the Brahmatal Lake. The pristine beauty of the lake, surrounded by snow-capped peaks, creates a spiritual ambiance that truly justifies its divine association.`,
    highlights: [
      "Witness stunning views of Himalayan peaks including Mt. Trishul and Nanda Ghunti",
      "Trek through beautiful oak and rhododendron forests covered with snow in winter",
      "Visit the picturesque Brahmatal and Bekaltal lakes",
      "Experience camping amidst snow-covered meadows in winter",
      "Enjoy a relatively easy high-altitude winter trekking experience suitable for beginners"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung (2,300m)",
        description: "Drive from Kathgodam to Lohajung village. Overnight stay in Lohajung."
      },
      {
        day: "Day 2",
        title: "Lohajung to Bekaltal (2,900m)",
        description: "Trek from Lohajung to Bekaltal through forests. Visit Bekaltal Lake. Overnight camping."
      },
      {
        day: "Day 3",
        title: "Bekaltal to Brahmatal (3,200m)",
        description: "Trek from Bekaltal to Brahmatal campsite through Telandi. Overnight camping."
      },
      {
        day: "Day 4",
        title: "Brahmatal to Brahmatal Peak (3,700m) and back",
        description: "Trek to Brahmatal Peak and visit Brahmatal Lake. Return to Brahmatal campsite for overnight stay."
      },
      {
        day: "Day 5",
        title: "Brahmatal to Lohajung via Tilbudi",
        description: "Trek back to Lohajung through an alternate route via Tilbudi. Overnight in Lohajung."
      },
      {
        day: "Day 6",
        title: "Lohajung to Kathgodam",
        description: "Drive from Lohajung back to Kathgodam. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation (guesthouses in Lohajung, camping during the trek)",
      "All meals during the trek (nutritious vegetarian)",
      "Professional, experienced trek leaders and guides",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Safety equipment and first aid kit",
      "Forest permits and entry fees",
      "Transportation from Kathgodam to Lohajung and back"
    ],
    exclusions: [
      "Transportation to and from Kathgodam",
      "Personal expenses and tips",
      "Travel insurance",
      "Porters for personal luggage (can be arranged at additional cost)",
      "Anything not mentioned in inclusions"
    ]
  },
  // Add other treks here with similar structure
];

export default function TrekDetail() {
  const { id } = useParams();
  const [trek, setTrek] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  // Available trek dates (would typically come from API)
  const trekDates = [
    "June 15, 2025",
    "July 5, 2025",
    "July 25, 2025",
    "August 10, 2025",
    "August 30, 2025",
    "June 5, 2026"
  ];

  useEffect(() => {
    // Simulate API call to fetch trek details
    setLoading(true);
    const foundTrek = allTreks.find(trek => trek.id === id);
    
    // Simulate network delay
    setTimeout(() => {
      setTrek(foundTrek || null);
      setLoading(false);
    }, 500);
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <Layout>
        <div className="container py-32 min-h-screen">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </Layout>
    );
  }

  // Trek not found state
  if (!trek) {
    return (
      <Layout>
        <div className="container py-32 min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Trek Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the trek you're looking for.</p>
            <Link href="/destinations" className="btn btn-primary">
              <FaArrowLeft className="mr-2" /> Back to All Treks
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Book Now handler
  const handleBookNow = () => {
    if (!selectedDate) {
      alert("Please select a trek date first");
      return;
    }
    
    // Redirect to checkout or show modal
    alert(`Booking for ${trek.name} on ${selectedDate}`);
    // In a real app, you would redirect to a checkout page or open a modal
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-natural-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src={trek.image}
            alt={trek.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
            unoptimized={true}
          />
        </div>
        <div className="container relative z-10 text-white">
          <Link href="/destinations" className="inline-flex items-center text-white hover:text-secondary mb-4">
            <FaArrowLeft className="mr-2" /> Back to Destinations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {trek.name}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-secondary" />
              <span>{trek.location}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-secondary" />
              <span>{trek.duration}</span>
            </div>
            <div className="flex items-center">
              <FaMountain className="mr-2 text-secondary" />
              <span>{trek.difficulty}</span>
            </div>
            <div className="flex items-center">
              <FaRupeeSign className="mr-2 text-secondary" />
              <span>{trek.price} per person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Trek Details - Left Column */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
                <div className="prose max-w-none">
                  {trek.overview.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx} className="mb-4 text-natural-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Trek Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Trek Highlights</h2>
                <ul className="space-y-2">
                  {trek.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start text-natural-medium">
                      <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {trek.itinerary.map((day: any, idx: number) => (
                    <div key={idx} className="bg-natural-light p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {day.day}
                        </span>
                        <h3 className="text-xl font-bold">{day.title}</h3>
                      </div>
                      <p className="text-natural-medium">{day.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions & Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Inclusions</h3>
                    <ul className="space-y-2">
                      {trek.inclusions.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-natural-medium">
                          <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Exclusions</h3>
                    <ul className="space-y-2">
                      {trek.exclusions.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start text-natural-medium">
                          <FaCheckCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Section - Right Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-natural-light p-6 rounded-lg shadow-md sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6">Book This Trek</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-natural-medium">Price</span>
                    <span className="text-2xl font-bold">₹{trek.price}</span>
                  </div>
                  <div className="text-sm text-right text-natural-medium">per person</div>
                </div>

                <div className="mb-6">
                  <label htmlFor="trekDate" className="block text-natural-dark mb-2">
                    Available Dates <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trekDate"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a date</option>
                    {trekDates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleBookNow}
                  className="btn btn-primary w-full mb-6"
                >
                  Book Now
                </button>

                <div className="mb-6">
                  <h4 className="font-bold mb-3">Trek Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaMountain className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Max Altitude</div>
                        <div className="text-natural-medium">{trek.maxAltitude}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaUsers className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Group Size</div>
                        <div className="text-natural-medium">{trek.groupSize}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCalendarAlt className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Best Season</div>
                        <div className="text-natural-medium">{trek.bestSeason}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Need Help?</h4>
                  <p className="text-natural-medium mb-4">
                    Have questions about this trek? Contact our trekking experts for more information.
                  </p>
                  <Link href="/contact" className="btn btn-outline w-full">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Treks */}
      <section className="py-16 bg-natural-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Similar Treks You Might Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allTreks
              .filter(t => t.id !== trek.id && t.region === trek.region)
              .slice(0, 3)
              .map((similarTrek) => (
                <motion.div
                  key={similarTrek.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={similarTrek.image}
                      alt={similarTrek.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      unoptimized={true}
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      <FaRupeeSign className="inline-block mr-1" />{similarTrek.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{similarTrek.name}</h3>
                    <div className="mb-4 flex flex-wrap gap-y-2">
                      <div className="w-1/2 flex items-center text-sm text-natural-medium">
                        <FaClock className="mr-2 text-primary" />
                        {similarTrek.duration}
                      </div>
                      <div className="w-1/2 flex items-center text-sm text-natural-medium">
                        <FaMountain className="mr-2 text-primary" />
                        {similarTrek.difficulty}
                      </div>
                    </div>
                    <p className="text-natural-medium mb-6 line-clamp-2">{similarTrek.description}</p>
                    <Link
                      href={`/destinations/${similarTrek.id}`}
                      className="btn btn-outline w-full text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 