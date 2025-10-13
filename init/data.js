const sampleListings = [
  // Trending (5)
  {
    title: "Ice Hotel in Sweden",
    description: "Unique hotel made entirely of ice and snow.",
    bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzMDEzMDE0ODM3MDAxNDMxNg%3D%3D/original/33eb3554-f7c1-4ead-928a-02f4abee87d6.jpeg?im_w=1200" },
    price: 2000, location: "Jukkasjärvi", country: "Sweden", category: "Arctic"
  },
     {
    title: "Art Deco Apartment in Miami",
    description: "Stylish Art Deco apartment in South Beach.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://thumbs.dreamstime.com/b/luxury-penthouse-living-room-panoramic-view-city-skyline-sunset-346064114.jpg" },
    price: 1600, location: "Miami", country: "USA", category: "Iconic Cities"
  },
     {
    title: "Cozy Studio in Paris",
    description: "A small, cozy studio perfect for a romantic getaway.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://i.pinimg.com/736x/cb/96/19/cb96190c942affb97c06df2f7b6f52da.jpg" },
    price: 1400, location: "Paris", country: "France", category: "Trending"
  },

    {
    title: "Frozen Lake Cabin",
    description: "Cabin beside a frozen lake in the Arctic circle.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/09dbb8a0-094c-4416-8275-f6b4c4411d4f.jpg?im_w=1200" },
    price: 2200, location: "Norway", country: "Norway", category: "Arctic"
  },

   {
    title: "Historic Brownstone in Boston",
    description: "Elegant brownstone in Boston's historic district.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://images.ft.com/v3/image/raw/ftcms%3A279991d8-9c7c-435c-93e3-7e373e48bd88?source=next-article&fit=scale-down&quality=highest&width=700&dpr=2" },
    price: 2200, location: "Boston", country: "USA", category: "Iconic Cities"
  },
   {
  title: "Cozy Mountain Room",
  description: "A comfortable and warm room nestled in the mountains with scenic valley views.",
   bedrooms: 1,
    guests: 2,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop" },
  price: 1800,
  location: "Swiss Alps",
  country: "Switzerland",
  category: "Rooms"
},

     {
    title: "Secluded Poolside Retreat",
    description: "Private retreat with outdoor pool and lounge.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI3MDQ1NTkxMjgxNzYzMjA1MQ==/original/17496378-d4e6-4ebe-ae62-9e2916d667ca.jpeg?im_w=1200" },
    price: 2800, location: "Santorini", country: "Greece", category: "Amazing Pools"
  },
   {
  title: "Heritage Palace Stay",
  description: "Stay like royalty in this 18th-century palace converted into a 7-star hotel.",
   bedrooms: 4,
    guests: 8,
  image: { filename: "listingimage", url: "https://img.jamesedition.com/listing_images/2025/09/16/15/54/39/41c12744-e239-43f5-a8ea-6ec3fe26b2c7/je/1100xxs.jpg" },
  price: 22000, location: "Jaipur", country: "India", category: "Luxury"
},
  {
    title: "Historic Cottage in Charleston",
    description: "Beautifully restored cottage with private garden.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://www.whatawonderfulworld.guide/wp-content/uploads/2024/02/Destinations-of-the-Future-The-Next-Wave-in-Luxury-Travel.jpg" },
    price: 1600, location: "Charleston", country: "USA", category: "Trending"
  },

  {
  title: "Urban Rooftop Escape",
  description: "Enjoy the city skyline from this modern rooftop apartment with stunning night views.",
   bedrooms: 4,
    guests: 9,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" },
  price: 5000,
  location: "New York City",
  country: "USA",
  category: "Trending"
},


  // Beaches (5)
   {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint cottage.",
     bedrooms: 5,
    guests: 10,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Cotswolds", country: "UK", category: "Beaches"
  },

  {
    title: "Beachfront Villa in Greece",
    description: "Mediterranean villa on a Greek island.",
     bedrooms: 9,
    guests: 18,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-12786461/original/29b9c0cc-7ec9-40b8-9b6f-4feb4a7a744d.jpeg?im_w=1200" },
    price: 2500, location: "Mykonos", country: "Greece", category: "Beaches"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Private beach house for relaxing getaway.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Costa Rica", country: "Costa Rica", category: "Beaches"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Bungalow with private pool right on the beach.",
     bedrooms: 1,
    guests: 4,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-1374316588287912212/original/394795e1-90fb-4351-8e71-5c72b0ac45a0.jpeg?im_w=1440" },
    price: 1800, location: "Bali", country: "Indonesia", category: "Beaches"
  },
    {
    title: "Luxury Poolside Villa",
    description: "Private villa with stunning pool views.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/c062ea7d-9d2a-4de0-bdcb-c1e6681d2fd0.jpg?im_w=1200" },
    price: 3500, location: "Ibiza", country: "Spain", category: "Amazing Pools"
  },
  {
    title: "Sunny Beach House in Cancun",
    description: "Relaxing beach house with direct ocean access.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Cancun", country: "Mexico", category: "Beaches"
  },
 
    {
  title: "Secluded Forest Camping",
  description: "Set up your tent amidst serene forest trails with a campfire under the stars.",
   bedrooms: 3,
    guests: 6,
  image: { filename: "listingimage", url: "https://m.media-amazon.com/images/I/61I-6AOO0ML._UF894,1000_QL80_.jpg" },
  price: 1200,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Camping"
},
  {
  title: "Tropical Beachfront Bungalow",
  description: "Relax steps away from the turquoise waters and soft sandy beaches.",
   bedrooms: 2,
    guests: 4,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop" },
  price: 4500,
  location: "Bali",
  country: "Indonesia",
  category: "Beaches"
},


  // Iconic Cities (5)
  {
    title: "Modern Loft in Downtown",
    description: "Stylish loft apartment in the city center.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/e69c50ad-2324-420f-b83a-2447ae705d6a.jpg?im_w=1200" },
    price: 1200, location: "New York City", country: "USA", category: "Iconic Cities"
  },
  {
    title: "Historic Canal House in Amsterdam",
    description: "Beautifully preserved canal house in Amsterdam.",
     bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1182040679288532073/original/76bc0ae7-9443-43d0-a532-eed818d0b1b7.jpeg?im_w=1200" },
    price: 1800, location: "Amsterdam", country: "Netherlands", category: "Iconic Cities"
  },
 
 
  {
    title: "Modern Apartment in Tokyo",
    description: "Centrally located modern apartment in Tokyo.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://www.hauteresidence.com/wp-content/uploads/2018/06/26CDE85A00000578-3001606-image-a-21_1426788620940.jpg" },
    price: 2000, location: "Tokyo", country: "Japan", category: "Iconic Cities"
  },
  {
  title: "Parisian Loft Apartment",
  description: "Stay in the heart of Paris with Eiffel Tower views and chic modern interiors.",
   bedrooms: 2,
    guests: 4,
  image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1254331255153276919/original/b307f863-5707-4481-aa0a-19892308b6f5.jpeg?im_w=720" },
  price: 8000,
  location: "Paris",
  country: "France",
  category: "Iconic Cities"
},
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Chalet in Swiss Alps with direct ski access.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1329721110435870326/original/939eea19-4d94-4f0a-84f2-c9488e9abdb4.jpeg?im_w=1200" },
    price: 3000, location: "Verbier", country: "Switzerland", category: "Mountains"
  },

  // Rooms (5)
  {
    title: "Cozy Private Room in Hostel",
    description: "Comfortable private room for solo travelers.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-1383858178312116929/original/218a342d-12e2-442c-b0f7-a8d292d7fb38.jpeg?im_w=1200" },
    price: 500, location: "Barcelona", country: "Spain", category: "Rooms"
  },
  {
    title: "Minimalist Bedroom in Tokyo",
    description: "Clean and minimal room ideal for work and rest.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-1446212823996211698/original/8b89a7f3-a1ba-4bd4-96e3-74c13152bfad.jpeg?im_w=1200" },
    price: 600, location: "Tokyo", country: "Japan", category: "Rooms"
  },
  {
    title: "Shared Room in Downtown Hostel",
    description: "Budget-friendly shared room for backpackers.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwNTY1NTY5OTQxNDQxNjU5NQ==/original/fbd88457-5233-4768-8432-f93770123235.jpeg?im_w=1200" },
    price: 400, location: "London", country: "UK", category: "Rooms"
  },
  {
    title: "Luxury Bedroom Suite",
    description: "Private bedroom suite with ensuite bathroom.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/ed6b7db8-e456-4b96-94f4-4c828dbb8bbf.jpg?im_w=1200" },
    price: 1200, location: "Paris", country: "France", category: "Rooms"
  },
   {
    title: "Vineyard Farm Stay",
    description: "Experience wine making and stay on a vineyard farm.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://cdn0.weddingwire.in/vendor/5907/3_2/1280/jpg/wedding-lawns-farmhouses-babbar-farm-house-event-space-3_15_365907-161892683577607.jpeg" },
    price: 2200, location: "Napa Valley", country: "USA", category: "Farms"
  },
    {
    title: "Mountain Tent Retreat",
    description: "Set up tents near a serene mountain lake.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://www.triund-trek.com/uploads/blog/camping.jpg" },
    price: 700, location: "Swiss Alps", country: "Switzerland", category: "Camping"
  },

 

  // Mountains (5)
  {
    title: "Mountain Retreat",
    description: "Peaceful mountain cabin surrounded by nature.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1078846557276853293/original/b607029b-4124-4154-af64-7202a1ab4218.jpeg?im_w=1200" },
    price: 1000, location: "Aspen", country: "USA", category: "Mountains"
  },

  {
    title: "Mountain View Cabin in Banff",
    description: "Breathtaking mountain views in Canadian Rockies.",
     bedrooms: 5,
    guests: 10,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-1457079627237638555/original/ef382c7c-9436-41dd-b5c0-55d05eeb3f53.png?im_w=1440" },
    price: 1500, location: "Banff", country: "Canada", category: "Mountains"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Luxury ski chalet in Aspen ski resort.",
     bedrooms: 5,
    guests: 10,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Aspen", country: "USA", category: "Mountains"
  },
  {
    title: "Alpine Cabin Retreat",
    description: "Secluded cabin in the Alps with amazing views.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Chamonix", country: "France", category: "Mountains"
  },
  {
  title: "Alpine Retreat Cabin",
  description: "Secluded cabin with panoramic mountain views and easy access to hiking trails.",
   bedrooms: 5,
    guests: 10,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" },
  price: 2500,
  location: "Tyrol",
  country: "Austria",
  category: "Mountains"
},
 {
  title: "Golden Villa",
  description: "Wake up to breathtaking views of Vietnam’s iconic Golden Bridge from your room. This villa offers floor-to-ceiling windows overlooking the giant hands holding the bridge, surrounded by misty mountains and lush greenery. Perfect for photography, relaxation, and experiencing the magic of Ba Na Hills.",
     bedrooms: 1,
    guests: 2,
  image: { filename: "listingimage", url: "https://www.iqglassinternational.com/storage/images-processed/w-auto_h-850_m-fit_s-any__glass-walls-with-slim-sliding-doors-for-a-luxury-Spanish-villa.jpg" },
  price: 12000,
  location: "Ba Na Hills", 
  country: "Vietnam",
  category: "Trending"
  },

  // Amazing Pools (5)
  {
    title: "Tropical Villa in Phuket",
    description: "Luxury villa with private infinity pool.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-676750469812840664/original/d579e8a1-2a99-4ebe-b4db-e51547763a3f.jpeg?im_w=1200" },
    price: 3000, location: "Phuket", country: "Thailand", category: "Amazing Pools"
  },
    {
    title: "Artistic Loft in Berlin",
    description: "Stylish loft apartment in the heart of Berlin.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://travelcurator.com/wp-content/uploads/2024/10/Where-to-go-2025-punta-tragara-feature-1200x650.jpg" },
    price: 1300, location: "Berlin", country: "Germany", category: "Trending"
  },

  {
    title: "Infinity Pool Penthouse",
    description: "Penthouse with rooftop infinity pool.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTUxNjYwNTY2MDQ3MDE5NzU3OQ==/original/436c099d-a6c6-4ec2-8b2a-7dc0e5aa78b8.jpeg?im_w=1440" },
    price: 4000, location: "Los Angeles", country: "USA", category: "Amazing Pools"
  },
  {
    title: "Private Pool Villa in Bali",
    description: "Villa with large private pool and garden.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1326654282488855644/original/e7b855fc-6732-427c-903b-a168a3e3f083.jpeg?im_w=720" },
    price: 3200, location: "Bali", country: "Indonesia", category: "Amazing Pools"
  },
 
  {
  title: "Infinity Pool Villa",
  description: "Private villa with a rooftop infinity pool overlooking the ocean and sunset views.",
     bedrooms: 1,
    guests: 2,
  image: { filename: "listingimage", url: "https://cooganslandscape.com/wp-content/uploads/2019/04/hdr_pool-house-design.jpg" },
  price: 12000,
  location: "Phuket",
  country: "Thailand",
  category: "Amazing Pools"
},

  // Arctic (5)
  
  {
  title: "Luxury Lake Retreat",
  description: "A beautiful villa surrounded by pine trees and panoramic lake views.",
   bedrooms: 4,
    guests: 8,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop" },
  price: 7000, location: "Lucerne", country: "Switzerland", category: "Lakes"
},
 
  {
    title: "Snowy Cabin Retreat",
    description: "Cozy cabin surrounded by snow-covered landscapes.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-42879945/original/13c2daa3-a719-4ad7-b76f-b6d391fec1eb.jpeg?im_w=1200" },
    price: 1800, location: "Iceland", country: "Iceland", category: "Arctic"
  },
    {
    title: "Student Dorm Room",
    description: "Small private room in student dormitory.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/80b8016d-e65a-4c48-9e5c-920bebf46f53.jpg?im_w=1200" },
    price: 350, location: "Boston", country: "USA", category: "Rooms"
  },
  {
    title: "Polar Expedition Lodge",
    description: "Adventure lodge in polar regions for explorers.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-847580909686325328/original/b0e89719-5202-4f46-b84a-450c868a016e.jpeg?im_w=720" },
    price: 4000, location: "Greenland", country: "Greenland", category: "Arctic"
  },
 

  {
  title: "Northern Lights Igloo",
  description: "Stay in a glass igloo under the Arctic sky with breathtaking Northern Lights views.",
   bedrooms: 5,
    guests: 10,
  image: { filename: "listingimage", url: "https://www.metalocus.es/sites/default/files/styles/mopis_fullslider_desktop/public/lead-images/metalocus_casa_ariston_groenlandia_17_p.jpg?itok=64Yzb2_x" },
  price: 15000,
  location: "Lapland",
  country: "Finland",
  category: "Arctic"
},

  // Farms (5)
  {
    title: "Safari Lodge in the Serengeti",
    description: "Comfortable safari lodge in Serengeti National Park.",
     bedrooms: 2,
    guests: 4,
    image: { filename: "listingimage", url: "https://cdn.houseplansservices.com/product/5cp3g9i5d88m4tpdm2a2eankvq/w800x533.jpg?v=2" },
    price: 4000, location: "Serengeti", country: "Tanzania", category: "Farms"
  },
  {
    title: "Organic Farm Stay",
    description: "Live on an organic farm and enjoy farm activities.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://www.sloshout.com/blog/wp-content/uploads/jawas-farm-3e8520-1536x1024.jpg" },
    price: 1500, location: "California", country: "USA", category: "Farms"
  },
  {
    title: "Countryside Farmhouse",
    description: "Peaceful farmhouse surrounded by farmland.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://img.sunset02.com/sunsetm/wp-content-uploads/2019-03-20UTC10/farmhouse-fixer-upper-mcafees-sun-59790-0918.jpg" },
    price: 1200, location: "Tuscany", country: "Italy", category: "Farms"
  },
  {
    title: "Dairy Farm Experience",
    description: "Stay on a working dairy farm and learn the process.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://www.nobroker.in/blog/wp-content/uploads/2021/12/What-is-a-Farmhouse.jpg" },
    price: 1300, location: "New Zealand", country: "New Zealand", category: "Farms"
  },
 
  {
  title: "Countryside Farmhouse",
  description: "Charming farmhouse surrounded by fields and orchards, perfect for a peaceful retreat.",
   bedrooms: 3,
    guests: 6,
  image: { filename: "listingimage", url: "https://content.jdmagicbox.com/comp/def_content_category/farm-house/ae650cb9e0-farm-house-3-6htgo.jpg" },
  price: 3000,
  location: "Tuscany",
  country: "Italy",
  category: "Farms"
},


  // Camping (5)
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among treetops in this unique treehouse retreat.",
     bedrooms: 4,
    guests: 8,
    image: { filename: "listingimage", url: "https://campmonk.com/blog/wp-content/uploads/2022/06/types-of-campsites-1024x684.jpeg" },
    price: 1200, location: "Costa Rica", country: "Costa Rica", category: "Camping"
  },
  {
    title: "Forest Cabin Camping",
    description: "Rustic cabin in the middle of a lush forest.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://i.pinimg.com/736x/6f/5f/14/6f5f14a9d379fd39547169f7de61393a.jpg" },
    price: 900, location: "Oregon", country: "USA", category: "Camping"
  },
  
    {
    title: "Modern Apartment in Sydney",
    description: "Spacious apartment with modern amenities in Sydney.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://cache.net-a-porter.com/content/images/story-head-content-V1-1734944512507.jpeg/w1900_q65.jpeg" },
    price: 1500, location: "Sydney", country: "Australia", category: "Trending"
  },
  {
    title: "Beach Camping Experience",
    description: "Camp right on the beach under the stars.",
     bedrooms: 5,
    guests: 10,
    image: { filename: "listingimage", url: "https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/Corbett-1.jpg" },
    price: 800, location: "Florida Keys", country: "USA", category: "Camping"
  },
  {
    title: "Desert Camping Adventure",
    description: "Camp in the dunes and enjoy sunset views.",
       bedrooms: 1,
    guests: 2,
    image: { filename: "listingimage", url: "https://img.traveltriangle.com/blog/wp-content/uploads/2022/12/Best-Camping-Places-In-India-Copy.jpg" },
    price: 1000, location: "Sahara", country: "Morocco", category: "Camping"
  },

 
  // Luxury (5)
{
  title: "Royal Palace Villa",
  description: "An opulent villa with private butler service and infinity pool overlooking the sea.",
   bedrooms: 3,
    guests: 6,
  image: { filename: "listingimage", url: "https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/www.himalayanglacier.com/wp-content/uploads/2024/03/Maldives-730w-2x-jpg.webp?bwp" },
  price: 25000, location: "Santorini", country: "Greece", category: "Luxury"
},
{
  title: "Skyline Penthouse Suite",
  description: "Enjoy city lights from a glass-walled penthouse with 360° panoramic views.",
   bedrooms: 4,
    guests: 8,
  image: { filename: "listingimage", url: "https://solxproperties.es/images/luxurious-homes-in-costa-del-sol-malaga.jpeg" },
  price: 30000, location: "Dubai", country: "UAE", category: "Luxury"
},

{
  title: "Cliffside Infinity Villa",
  description: "A modern cliffside villa with private infinity pool and butler service.",
     bedrooms: 10,
    guests: 20,
  image: { filename: "listingimage", url: "https://img.jamesedition.com/listing_images/2025/06/24/08/30/38/bc22ed2f-c2a3-4fd1-8c1a-26da9dccab0b/je/1100xxs.jpg" },
  price: 27000, location: "Amalfi Coast", country: "Italy", category: "Luxury"
},
{
  title: "Tranquil Lakeside Cabin",
  description: "Peaceful cabin with a wooden deck overlooking the calm lake waters.",
   bedrooms: 5,
    guests: 6,
  image: { filename: "listingimage", url: "https://assets.superhivemarket.com/store/product/225590/image/xlarge-6ef3915f4eb6af40e239a5e7e67f4741.jpg" },
  price: 5000,
  location: "Banff",
  country: "Canada",
  category: "Lakes"
},
{
  title: "Overwater Paradise Retreat",
  description: "A luxury water villa with glass floors, ocean views, and personal chef.",
   bedrooms: 2,
    guests: 4,
  image: { filename: "listingimage", url: "https://img.jamesedition.com/listing_images/2025/05/12/10/27/43/f3ef31c0-09a2-4aed-b24e-7b0b9c005202/je/1100xxsxm.jpg" },
  price: 32000, location: "Maldives", country: "Maldives", category: "Luxury"
},
{
  title: "Cliffside Infinity Villa",
  description: "Modern luxury villa with private infinity pool and panoramic ocean views.",
   bedrooms: 3,
    guests: 6,
  image: { filename: "listingimage", url: "https://www.mondocamping.com/wp-content/uploads/2023/07/camping-pods-1.jpg" },
  price: 27000,
  location: "Amalfi Coast",
  country: "Italy",
  category: "Luxury"
},
// Lake View (5)
{
  title: "Tranquil Lakeside Cabin",
  description: "Peaceful cabin with a wooden deck overlooking the calm lake waters.",
   bedrooms: 4,
    guests: 8,
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" },
  price: 5000, location: "Banff", country: "Canada", category: "Lakes"
},


{
  title: "Hidden Lake Cottage",
  description: "Cozy wooden cottage offering private lake access and peaceful surroundings.",
   bedrooms: 2,
    guests: 4,
  image: { filename: "listingimage", url: "https://www.mountainshadows.in/images/Lake-View-Villa-Room.jpg" },
  price: 4500, location: "Queenstown", country: "New Zealand", category: "Lakes"
},
{
  title: "Sunset Lake Bungalow",
  description: "Romantic stay on the lakefront, perfect for sunsets and stargazing.",
     bedrooms: 1,
    guests: 2,
  image: { filename: "listingimage", url: "https://bookmykeralatrip.com/wp-content/uploads/2025/01/Wayanad-Lake-View-Retreat4-3.jpg" },
  price: 6000, location: "Pokhara", country: "Nepal", category: "Lakes"
},
 {
    title: "Arctic Glass Igloo",
    description: "Stay in a glass igloo with northern lights view.",
     bedrooms: 3,
    guests: 6,
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1389056095768785099/original/18253277-ce61-4c57-bc9f-471424e5965a.jpeg?im_w=1200" },
    price: 2500, location: "Finland", country: "Finland", category: "Arctic"
  },
  {
  title: "Floating Lake House",
  description: "Experience serenity in a floating house with a private boat and deck.",
     bedrooms: 1,
    guests: 2,
  image: { filename: "listingimage", url: "https://www.mountainshadows.in/images/Lake-View-Villa-Balcony-1536x640.jpg" },
  price: 8000, location: "Lake Tahoe", country: "USA", category: "Lakes"
},
];


module.exports = { data: sampleListings };