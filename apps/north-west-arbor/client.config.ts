import { defineClient } from "@hirobius/schema";

export const client = defineClient({
  "slug": "north-west-arbor",
  "business": {
    "name": "North West Arbor LLC",
    "phone": "(509) 388-1671",
    "email": "hello@north-west-arbor.example",
    "hours": [
      {
        "days": "Mon–Sun",
        "hours": "Call for hours"
      }
    ],
    "serviceAreas": [
      "Yakima",
      "Yakima Valley"
    ]
  },
  "brand": {
    "palettePreset": "landscaping",
    "cssVarOverrides": {},
    "font": "geist",
    "fontPairing": "modern",
    "radius": "sm",
    "shadow": "hard",
    "spacingDensity": "compact",
    "motion": "subtle"
  },
  "layout": {
    "variant": "A",
    "sections": {
      "hero": {
        "variant": "classic"
      },
      "services": {
        "variant": "grid"
      },
      "gallery": {
        "variant": "grid"
      },
      "reviews": {
        "variant": "cards"
      },
      "serviceAreaMap": {
        "variant": "standard"
      },
      "contact": {
        "variant": "standard"
      }
    },
    "sectionOrder": [
      "services",
      "serviceAreaMap",
      "contact"
    ]
  },
  "hero": {},
  "services": [
    {
      "title": "Lawn Care & Maintenance",
      "description": "Regular mowing, edging, and fertilization to keep your lawn healthy and green all season."
    },
    {
      "title": "Landscape Design & Installation",
      "description": "Custom planting beds, shrubs, and hardscaping designed to fit your property and budget."
    },
    {
      "title": "Mulching & Bed Maintenance",
      "description": "Fresh mulch and weed control to keep garden beds looking sharp year-round."
    },
    {
      "title": "Irrigation & Drainage",
      "description": "Sprinkler system installation and repair, plus drainage solutions for problem areas."
    },
    {
      "title": "Seasonal Cleanup",
      "description": "Spring and fall cleanups — leaf removal, bed prep, and pruning to reset your yard."
    }
  ],
  "copy": {
    "heroHeadline": "Trusted Landscaping in Yakima",
    "heroSub": "North West Arbor LLC brings reliable, professional landscaping to Yakima and the surrounding area.",
    "ctaLabel": "Get a Free Lawn Quote",
    "about": "North West Arbor LLC is a local landscaping company serving Yakima, WA and nearby communities. Reach out today for a free quote."
  },
  "gallery": [],
  "reviews": [],
  "map": {
    "embedQuery": "Yakima, WA"
  },
  "form": {
    "provider": "web3forms",
    "accessKey": "REPLACE_WITH_WEB3FORMS_ACCESS_KEY"
  },
  "seo": {
    "title": "North West Arbor LLC | Yakima landscaping",
    "description": "Professional landscaping in Yakima, WA. Contact North West Arbor LLC for a free quote.",
    "city": "Yakima",
    "region": "WA",
    "siteUrl": "https://north-west-arbor.example"
  }
});
