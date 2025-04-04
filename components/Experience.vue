<script setup lang="ts">
const experience = [
  {
    "period": "February 2022 till date",
    "organization": "Rayn Group",
    "designation": "Senior Product Manager",
    "introduction": "Rayn is on a mission to leverage cutting-edge technology and large-scale program implementation to solve some of the most critical public sector challenges in Pakistan.",
    "contributions": [
      "Led the development of ML-powered GIS analytics systems, increasing automation in identifying unvisited areas by 87%.",
      "Built GIS-driven spatial intelligence solutions for real-time public health interventions, boosting vaccination coverage by 25%.",
      "Designed and implemented geofencing ML based models, enhancing workforce tracking and security compliance through automated timestamped movement logs",
      "Helped manage key accounts and stakeholders, including WHO, Gates Foundation, and government agencies, aligning product goals with global health initiatives.",
      "Developed and maintained a comprehensive product roadmap, ensuring alignment with strategic objectives and market trends."
    ]
  },
  {
    "period": "October 2016 - January 2022",
    "organization": "Code for Pakistan",
    "designation": "Government Innovation Lead",
    "introduction": "Tech for Change is a civic innovation non-profit made up of a passionate community of technologists and talented professionals, driven by a strong belief in civic innovation and social impact that can move Pakistan forward in measurable and meaningful ways.",
    "contributions": [
      "Led product development and user testing of civic tech solutions, achieving 80%+ adoption rates across 20 government departments.",
      "Managed strategic partnerships with the World Bank, Ministry of National Health Services Regulations and Coordination, Khyber Pakhtunkhwa Information Technology Board, and the Punjab Information Technology Board securing funding and scaling digital solutions.",
      "Conducted workshops and training sessions for government officials, empowering them to leverage technology for better governance and service delivery."
    ]
  },
  {
    "period": "October 2015 - September 2016",
    "organization": "The Nerd Camp",
    "designation": "Business Innovation Officer",
    "introduction": "The Nerd Camp is a for-profit organization that provides training and resources to help people learn to code and build their own apps.",
    "contributions": [
      "Developed and implemented a comprehensive business strategy for The Nerd Camp, focusing on growth and expansion of the organization.",
      "Managed client relationships and partnerships, ensuring high levels of customer satisfaction and retention.",
      "Led the development of new business opportunities and partnerships, resulting in increased revenue and market share."
    ]
  },
  {
    "period": "April 2014 - October 2015",
    "organization": "Sweet Pixel Studios",
    "designation": "Software Engineer",
    "introduction": "Sweet Pixel Studios is an indie game development agency.",
    "contributions": [
      "Developed and maintained various indie games and apps, including a mobile game called 'Pixel Fall'.",
      "Managed client relationships and partnerships, ensuring high levels of customer satisfaction and retention.",
      "Integrated gaming analytics, improving user engagement and retention."
    ]
  }
]
</script>
<template>
  <section class="my-8 md:my-12 xl:my-16"
           id="experience">
           <SectionTitle title="Experience" icon="briefcase" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
      <UCard v-for="item in experience"
             :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { base: 'text-sm print:text-xs', padding: 'p2' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
        <template #header>
          <div class="flex">
            <h2 class="font-semibold flex-1">{{ item.organization }}</h2>
            <UBadge color="white">{{ item.period }}</UBadge>
          </div>
        </template>
        <p class="mb-4">{{ item.introduction }}</p>
        <ul class="list-disc ps-4">
          <li v-for="contribution in item.contributions">{{ contribution }}</li>
        </ul>
      </UCard>
    </div>
  </section>
</template>