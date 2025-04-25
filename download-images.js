const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'valley-of-flowers.jpg',
    url: 'https://images.unsplash.com/photo-1598866595775-7f0df3171079?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'kedarkantha.jpg',
    url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'hampta-pass.jpg',
    url: 'https://images.unsplash.com/photo-1626610671900-091765c62cc5?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'sandakphu.jpg',
    url: 'https://images.unsplash.com/photo-1618245480592-6e5cc0635c9e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'kheerganga.jpg',
    url: 'https://images.unsplash.com/photo-1587547192856-46ed67337406?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'brahmatal.jpg',
    url: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'chadar-trek.jpg',
    url: 'https://images.unsplash.com/photo-1619266465172-02a857c3556d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'goechala.jpg',
    url: 'https://images.unsplash.com/photo-1569499426480-7559f2d79ce4?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'destinations-bg.jpg',
    url: 'https://images.unsplash.com/photo-1670268105408-2f8b2307e768?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'hero-bg.jpg',
    url: 'https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'cta-bg.jpg',
    url: 'https://images.unsplash.com/photo-1669424040737-37d18dfecff1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'logo.png',
    url: 'https://via.placeholder.com/150x50/1a73e8/FFFFFF?text=TreksIndia'
  },
  {
    name: 'logo-white.png',
    url: 'https://via.placeholder.com/150x50/FFFFFF/1a73e8?text=TreksIndia'
  },
  {
    name: 'responsible-tourism.jpg',
    url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'about-hero.jpg',
    url: 'https://images.unsplash.com/photo-1527824404775-dce343118ebc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'about-story.jpg',
    url: 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'contact-hero.jpg',
    url: 'https://images.unsplash.com/photo-1512757576557-6551daf91bf9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'team-1.jpg',
    url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'team-2.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'team-3.jpg',
    url: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'team-4.jpg',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'testimonial-1.jpg',
    url: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'testimonial-2.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'testimonial-3.jpg',
    url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500&auto=format&fit=crop'
  },
  {
    name: 'testimonial-4.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop'
  }
];

// Create the public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${filename}...`);
    
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {});
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}`);
    }
  }
  console.log('All downloads completed!');
}

downloadAllImages(); 