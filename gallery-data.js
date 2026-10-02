(function () {
  const GALLERY_ROOT = "assets/images";

  function buildGalleryImages(folder, fileNames) {
    return fileNames.map((fileName) => {
      if (fileName.startsWith(`${GALLERY_ROOT}/`)) {
        return fileName.split("/").map(encodeURIComponent).join("/");
      }

      const encodedFileName = encodeURIComponent(fileName);
      return `${GALLERY_ROOT}/${folder}/${encodedFileName}`;
    });
  }

  const galleryDefinitions = [
    {
      id: "portrait-sessions",
      title: "Portrait Sessions",
      category: "Portraits",
      description:
        "A portrait collection built around rail-side lifestyle frames, clean editorial closeups, beach styling, and coastal movement.",
      folder: "portraits",
      coverImage:
        "assets/images/portraits/black-white-over-shoulder-portrait.jpg",
      files: [
        "black-white-over-shoulder-portrait.jpg",
        "railway-fence-portrait.jpg",
        "railway-platform-walking-portrait.jpg",
        "assets/images/originals/portraits/beach-red-dress-rocks-portrait.jpg",
        "assets/images/originals/portraits/beach-red-dress-walking-portrait.jpg",
      ],
      sessionType: "Portrait Session",
      badge: "Portrait Gallery",
      location: "Los Angeles",
      dateLabel: "Portrait Collection",
      meta: "Lifestyle direction, rail-side portraits, and beach styling",
      cardPrompt: "Tap to open Portrait Sessions",
      photoClass: "photo-portraits",
      spotlightDesktopImage:
        "assets/images/portraits/black-white-over-shoulder-portrait.jpg",
      spotlightMobileImage:
        "assets/images/portraits/black-white-over-shoulder-portrait.jpg",
      spotlightPosition: "50% 36%",
      spotlightPositionMobile: "50% 28%",
      coverAlt: "Black-and-white over-the-shoulder portrait.",
    },
    {
      id: "graduation-stories",
      title: "Graduation Stories",
      category: "Graduation",
      description:
        "A complete graduation collection featuring UCLA portraits, family moments, ceremony candids, diploma details, and polished campus frames.",
      folder: "graduation",
      files: [
        "ucla-graduate-campus-portrait.jpg",
        "ucla-graduate-campus-closeup.jpg",
        "ucla-graduate-family-portrait.jpg",
        "ucla-graduate-arch-seated.jpg",
        "ucla-graduate-arch-standing.jpg",
        "graduation-black-white-photo-strip.jpg",
        "assets/images/hero/ucla-graduate-campus-towers.jpg",
        "ucla-graduate-fountain-seated.jpg",
        "ucla-graduate-diploma-banner.jpg",
        "ucla-graduate-fountain-standing.jpg",
        "ucla-graduate-indoor-closeup.jpg",
        "ucla-graduation-ceremony-closeup.jpg",
        "ucla-graduation-ceremony-wide.jpg",
        "ucla-graduation-processional.jpg",
        "ucla-graduates-duo-portrait.jpg",
        "graduation-diploma-original.jpg",
        "ucla-commencement-graduate-portrait.jpg",
        "ucla-commencement-duo-portrait.jpg",
        "ucla-commencement-family-portrait.jpg",
      ],
      sessionType: "Graduation Session",
      badge: "Graduation Gallery",
      location: "UCLA Campus",
      dateLabel: "June 2026",
      meta: "Campus portraits, diploma details, family frames, and ceremony candids",
      cardPrompt: "Tap to open Graduation Stories",
      photoClass: "photo-graduation",
      spotlightDesktopImage:
        "assets/images/graduation/ucla-graduate-campus-portrait.jpg",
      spotlightMobileImage:
        "assets/images/graduation/ucla-graduate-campus-portrait.jpg",
      spotlightPosition: "50% 32%",
      spotlightPositionMobile: "50% 12%",
      coverAlt:
        "UCLA graduate standing in a blue stole during a campus portrait.",
    },
    {
      id: "wedding-moments",
      title: "Wedding Moments",
      category: "Couples / Wedding",
      description:
        "An intimate wedding gallery with vows, cake moments, reception energy, and emotional portraits.",
      folder: "events",
      files: [
        "wedding-bouquet-portrait.jpg",
        "wedding-bride-reception-entrance.jpg",
        "wedding-reception-dance.jpg",
        "wedding-reception-dance-candid.jpg",
        "wedding-couple-reaction.jpg",
        "wedding-cake-display.jpg",
        "wedding-couple-cake-table.jpg",
        "wedding-guest-portrait.jpg",
        "wedding-toast-candid.jpg",
        "wedding-gift-opening.jpg",
        "wedding-guests-embrace.jpg",
        "wedding-venue-archway.jpg",
      ],
      sessionType: "Wedding Session",
      badge: "Wedding Gallery",
      location: "Private Estate Reception",
      dateLabel: "Summer 2026",
      meta: "Vows, portraits, and reception storytelling",
      cardPrompt: "Tap to open Wedding Moments",
      photoClass: "photo-couples",
      spotlightDesktopImage:
        "assets/images/events/wedding-bouquet-portrait.jpg",
      spotlightMobileImage: "assets/images/events/wedding-bouquet-portrait.jpg",
      spotlightPosition: "50% 34%",
      spotlightPositionMobile: "50% 20%",
      coverAlt: "Bride holding a bouquet during an intimate wedding portrait.",
    },
    {
      id: "floral-details",
      title: "Floral Details",
      category: "Events",
      description:
        "Editorial detail frames featuring flowers, soft texture, and close natural forms.",
      folder: "events",
      files: [
        "assets/images/originals/nature/pink-flower-closeup.jpg",
        "wedding-flower-bloom.jpg",
        "wedding-flower-macro.jpg",
        "assets/images/originals/nature/1000044633.jpg",
      ],
      sessionType: "Detail Gallery",
      badge: "Detail Gallery",
      location: "Mixed Scenes",
      dateLabel: "Editorial Set",
      meta: "Florals, texture, and natural detail studies",
      cardPrompt: "Tap to open Floral Details",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/nature/pink-flower-closeup.jpg",
      spotlightMobileImage:
        "assets/images/originals/nature/pink-flower-closeup.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Two pink flowers photographed in soft natural light.",
    },
    {
      id: "wildlife-in-focus",
      title: "Wildlife in Focus",
      category: "Animals / Wildlife",
      description:
        "A focused wildlife collection with birds, reptiles, insects, and close animal studies.",
      folder: "originals/wildlife",
      files: [
        "1000044614.jpg",
        "1000044609.jpg",
        "1000044610.jpg",
        "1000044612.jpg",
        "1000044613.jpg",
        "1000044618.jpg",
        "1000044619.jpg",
        "1000044620.jpg",
        "1000044621.jpg",
        "1000044622.jpg",
        "1000044623.jpg",
        "1000044624.jpg",
        "1000044625.jpg",
        "1000044626.jpg",
        "1000044635.jpg",
        "1000044636.png",
      ],
      sessionType: "Wildlife Photography",
      badge: "Wildlife Gallery",
      location: "Southern California",
      dateLabel: "Featured Work",
      meta: "Wildlife",
      cardPrompt: "Tap to open Wildlife in Focus",
      photoClass: "photo-details",
      spotlightDesktopImage: "assets/images/originals/wildlife/1000044614.jpg",
      spotlightMobileImage: "assets/images/originals/wildlife/1000044614.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Hummingbird in flight above red flowers.",
    },
    {
      id: "garden-geometry",
      title: "Garden Geometry",
      category: "Nature",
      description:
        "A contemplative look at garden structure, greenery, and quiet natural details.",
      folder: "originals/nature",
      files: [
        "flowering-hedge-maze.jpg",
        "1000044608.jpg",
        "assets/images/originals/architecture/modern-garden-building.jpg",
      ],
      sessionType: "Nature Photography",
      badge: "Nature Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Nature",
      cardPrompt: "Tap to open Garden Geometry",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/nature/flowering-hedge-maze.jpg",
      spotlightMobileImage:
        "assets/images/originals/nature/flowering-hedge-maze.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Flowering hedge maze viewed from above",
    },
    {
      id: "macro-studies",
      title: "Macro Studies",
      category: "Macro",
      description:
        "Close studies of light, texture, objects, and small-scale photographic detail.",
      folder: "originals/macro",
      files: [
        "leaf-water-droplet.jpg",
        "lakers-buss-championship-ring.jpg",
        "lakers-jerry-buss-ring.jpg",
        "us-quarter-coin.jpg",
      ],
      sessionType: "Macro Photography",
      badge: "Macro Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Macro",
      cardPrompt: "Tap to open Macro Studies",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/macro/leaf-water-droplet.jpg",
      spotlightMobileImage:
        "assets/images/originals/macro/leaf-water-droplet.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Water droplet on a green leaf",
    },
    {
      id: "twilight-shoreline",
      title: "Twilight Shoreline",
      category: "Astro / Night",
      description:
        "A quiet sunset scene with shoreline silhouettes and a fading Pacific sky.",
      folder: "originals/los-angeles",
      files: [
        "ocean-sunset-beach-silhouettes.jpg",
        "ocean-sunset-flying-bird.jpg",
      ],
      sessionType: "Night Photography",
      badge: "Night Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Astro / Night",
      cardPrompt: "Tap to open Twilight Shoreline",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/los-angeles/ocean-sunset-beach-silhouettes.jpg",
      spotlightMobileImage:
        "assets/images/originals/los-angeles/ocean-sunset-beach-silhouettes.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Sunset silhouettes by the Pacific shoreline",
    },
    {
      id: "lunar-eclipse",
      title: "Lunar Eclipse",
      category: "Astro / Night",
      description:
        "A focused lunar set with eclipse detail, moon texture, and dramatic night-sky atmosphere.",
      folder: "originals/astro",
      files: [
        "moon-clouds-eclipse.jpg",
        "moon-eclipse-closeup.jpg",
        "blood-moon-eclipse.png",
      ],
      sessionType: "Astro Photography",
      badge: "Astro Gallery",
      location: "Night Sky",
      dateLabel: "Lunar Study",
      meta: "Moon detail, eclipse color, and night-sky atmosphere",
      cardPrompt: "Tap to open Lunar Eclipse",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/astro/moon-clouds-eclipse.jpg",
      spotlightMobileImage:
        "assets/images/originals/astro/moon-clouds-eclipse.jpg",
      spotlightPosition: "50% 42%",
      spotlightPositionMobile: "50% 36%",
      coverAlt: "Moon eclipse glowing through dark clouds in the night sky.",
    },
    {
      id: "los-angeles-from-above",
      title: "Los Angeles From Above",
      category: "Los Angeles / Scenic",
      description:
        "Aerial and elevated perspectives of the Los Angeles coast, city, and architecture.",
      folder: "originals/los-angeles",
      files: [
        "1000044569.jpg",
        "los-angeles-city-overlook.jpg",
        "assets/images/originals/aerial/coastal-estate-garden-aerial.jpg",
        "assets/images/originals/aerial/coastal-estate-ocean-aerial.jpg",
        "assets/images/originals/aerial/coastal-estate-top-down-aerial.jpg",
      ],
      sessionType: "Aerial Photography",
      badge: "Los Angeles Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Scenic",
      cardPrompt: "Tap to open Los Angeles From Above",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/aerial/coastal-estate-ocean-aerial.jpg",
      spotlightMobileImage:
        "assets/images/originals/aerial/coastal-estate-ocean-aerial.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Coastal Los Angeles aerial view",
    },
    {
      id: "coastal-landscapes",
      title: "Coastal Landscapes",
      category: "Landscape",
      description:
        "A wide coastal view of ocean, city, and Southern California light.",
      folder: "originals/los-angeles",
      files: [
        "1000044627.jpg",
        "1000044628.jpg",
        "coastal-beach-city-view.jpg",
        "coastal-pier-aerial-banner.jpg",
        "assets/images/originals/nature/ocean-waves-horizon.jpg",
      ],
      sessionType: "Landscape Photography",
      badge: "Landscape Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Landscape",
      cardPrompt: "Tap to open Coastal Landscapes",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/los-angeles/coastal-pier-aerial-banner.jpg",
      spotlightMobileImage:
        "assets/images/originals/los-angeles/coastal-pier-aerial-banner.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Aerial panorama of the Los Angeles coast",
    },
    {
      id: "quinceanera-celebration",
      title: "Quinceañera Celebration",
      category: "Events",
      description:
        "A celebration gallery centered on family portraits, court moments, and formal quinceañera details.",
      folder: "originals/events/quinceanera",
      files: [
        "quinceanera-family-floral-throne.jpg",
        "quinceanera-friends-night-portrait.jpg",
        "quinceanera-throne-portrait.jpg",
      ],
      sessionType: "Event Session",
      badge: "Event Gallery",
      location: "Los Angeles",
      dateLabel: "Celebration",
      meta: "Family portraits, court moments, and formal details",
      cardPrompt: "Tap to open Quinceañera Celebration",
      photoClass: "photo-couples",
      spotlightDesktopImage:
        "assets/images/originals/events/quinceanera/quinceanera-throne-portrait.jpg",
      spotlightMobileImage:
        "assets/images/originals/events/quinceanera/quinceanera-throne-portrait.jpg",
      spotlightPosition: "50% 38%",
      spotlightPositionMobile: "50% 24%",
      coverAlt: "Quinceañera portrait seated on a floral throne.",
    },
    {
      id: "studio-portraits",
      title: "Studio Portraits",
      category: "Portraits",
      description:
        "A cohesive studio portrait set with black-and-white studies, color frames, mirror work, and clean headshots.",
      folder: "originals/portraits/studio",
      files: [
        "studio-portrait-woman-black-and-white.jpg",
        "studio-portrait-woman-color.jpg",
        "studio-portrait-woman-full-body-black-and-white.jpg",
        "studio-portrait-woman-full-body-color.jpg",
        "studio-portrait-woman-mirror-black-and-white.jpg",
        "studio-portrait-woman-smiling-headshot.jpg",
        "studio-portrait-woman-white-top.jpg",
        "studio-window-silhouette.jpg",
      ],
      sessionType: "Studio Portrait Session",
      badge: "Portrait Gallery",
      location: "Los Angeles Studio",
      dateLabel: "Studio Set",
      meta: "Studio portraits, headshots, and silhouette frames",
      cardPrompt: "Tap to open Studio Portraits",
      photoClass: "photo-portraits",
      spotlightDesktopImage:
        "assets/images/originals/portraits/studio/studio-portrait-woman-smiling-headshot.jpg",
      spotlightMobileImage:
        "assets/images/originals/portraits/studio/studio-portrait-woman-smiling-headshot.jpg",
      spotlightPosition: "50% 34%",
      spotlightPositionMobile: "50% 18%",
      coverAlt: "Studio portrait subject smiling at camera.",
    },
    {
      id: "classic-automotive",
      title: "Classic Automotive",
      category: "Automotive",
      description:
        "A concise classic Chevrolet study with front-end detail and side-profile styling.",
      folder: "originals/automotive",
      files: ["classic-chevrolet-front.jpg", "classic-chevrolet-side.jpg"],
      sessionType: "Automotive Session",
      badge: "Automotive Gallery",
      location: "Los Angeles",
      dateLabel: "Featured Work",
      meta: "Classic Chevrolet details and profile views",
      cardPrompt: "Tap to open Classic Automotive",
      photoClass: "photo-details",
      spotlightDesktopImage:
        "assets/images/originals/automotive/classic-chevrolet-front.jpg",
      spotlightMobileImage:
        "assets/images/originals/automotive/classic-chevrolet-front.jpg",
      spotlightPosition: "50% 50%",
      spotlightPositionMobile: "50% 50%",
      coverAlt: "Front view of a classic Chevrolet.",
    },
  ];

  const galleries = galleryDefinitions.map((gallery) => {
    const images = buildGalleryImages(gallery.folder, gallery.files);
    const coverImage = gallery.coverImage || images[0] || "";
    const spotlight = {
      title: gallery.title,
      category: gallery.category,
      date: gallery.dateLabel || "",
      location: gallery.location || gallery.category,
      image: gallery.spotlightDesktopImage || coverImage,
      mobileImage:
        gallery.spotlightMobileImage ||
        gallery.spotlightDesktopImage ||
        coverImage,
      alt: gallery.coverAlt || `${gallery.title} featured image.`,
      position: gallery.spotlightPosition || "50% 50%",
      mobilePosition:
        gallery.spotlightPositionMobile ||
        gallery.spotlightPosition ||
        "50% 50%",
    };

    return {
      id: gallery.id,
      title: gallery.title,
      category: gallery.category,
      description: gallery.description,
      coverImage,
      images,
      spotlight,
      sessionType: gallery.sessionType,
      badge: gallery.badge,
      location: gallery.location,
      dateLabel: gallery.dateLabel,
      meta: gallery.meta,
      cardPrompt: gallery.cardPrompt,
      photoClass: gallery.photoClass,
      spotlightDesktopImage: gallery.spotlightDesktopImage || "",
      spotlightMobileImage: gallery.spotlightMobileImage || "",
      spotlightPosition: gallery.spotlightPosition || "50% 50%",
      spotlightPositionMobile:
        gallery.spotlightPositionMobile ||
        gallery.spotlightPosition ||
        "50% 50%",
      coverAlt: gallery.coverAlt,
    };
  });

  window.SWERBZ_GALLERIES = galleries;
  window.SWERBZ_GALLERY_BY_ID = Object.fromEntries(
    galleries.map((gallery) => [gallery.id, gallery]),
  );
})();
