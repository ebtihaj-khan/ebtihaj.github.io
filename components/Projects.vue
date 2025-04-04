<script setup lang="ts">
const projects = [
  {
    "period": "September 2024 - Present",
    "organization": "Rayn Group",
    "project": "Digital Information Systems for PEI (DISP)",
    "description": "Leading the design and development of DISP, a mobile application aimed at digitizing data collection for polio eradication campaigns.",
    "bullets": [
      "Replaces manual tally sheets with a robust digital workflow, improving efficiency, accuracy, and real-time decision-making for frontline vaccination teams.",
      "Ensures data integrity and faster reporting, enabling quicker response from health officials and campaign planners.",
      "Working closely with field teams, UX designers, and engineers to build a user-friendly solution tailored for use in low-connectivity environments."
    ]
  },
  {
    "period": "February 2022 - September 2024",
    "organization": "Rayn Group",
    "project": "Geographical Coverage Support System (GCSS)",
    "description": "As the Product Manager for GCSS, I worked closely with engineers, data teams, and health program stakeholders to define product requirements, map workflows, and prioritize features. The platform allows managers to track polio teams and supervisors in real time, identify missed or persistently uncovered areas, and catch issues like irregular vaccination patterns or non-compliance with SOPs.",
    "bullets": [
      "Developed a comprehensive system for monitoring and analyzing polio vaccination coverage across Pakistan.",
      "Implemented real-time tracking of vaccination teams and supervisors to ensure efficient operations.",
      "Created a tool for identifying areas with low vaccination rates and potential coverage gaps.",
      "Designed a platform for monitoring vaccination compliance and SOP adherence."
    ]
  },
  {
    "period": "February 2022 - September 2024",
    "organization": "Rayn Group",
    "project": "ML Based Model to Identify Team Support Centers",
    "description": "In this project, I led the product development of an ML-based model designed to identify Team Support Centers (TSCs)—the physical locations where polio vaccinators begin and end their day. The goal was to use data more intelligently to understand field team movements, workloads, and overall performance.",
    "bullets": [
      "ML model to detect ingress and egress movement patterns of vaccinators.",
      "Automatic detection of start and end points of daily vaccinator routes.",
      "Mapping of TSCs to actual field behavior (vs. planned deployment points)."
    ]
  },
  {
    "period": "February 2022 - September 2024",
    "organization": "Rayn Group",
    "project": "xLATS",
    "description": "In this project, I led the product vision and delivery of xLATS, a custom-built platform for AgriTech startups to monitor and manage their field operations, farmer onboarding, and geospatial farm data. I worked closely with engineering and GIS teams to define use cases, design workflows, and prioritize features that would support both business users and farmers in making data-driven agricultural decisions.",
    "bullets": [
      "Custom-built platform for AgriTech startups to monitor and manage their field operations, farmer onboarding, and geospatial farm data.",
      "Designed workflows and prioritized features that would support both business users and farmers in making data-driven agricultural decisions."
    ]
  }
]
</script>
<template>
  <section id="projects" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Projects"
                  icon="document-check" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
      <UCard v-for="item in projects"
             :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { base: 'text-sm print:text-xs' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
        <template #header>
          <h2 class="font-semibold col-span-8">{{ item.project }}</h2>
          <div class="flex gap-1 mt-2 text-sm">
            <span class="flex-1">{{ item.organization }}</span>
            <UBadge color="white">{{ item.period }}</UBadge>
          </div>
        </template>
        <div class="mt-2">
          <p class="text-gray-600">{{ item.description }}</p>
          <ul v-if="item.bullets" class="mt-2 space-y-1 text-gray-600 pl-4">
            <li v-for="(bullet, index) in item.bullets" :key="index" class="list-disc">{{ bullet }}</li>
          </ul>
        </div>
      </UCard>
    </div>
  </section>
</template>