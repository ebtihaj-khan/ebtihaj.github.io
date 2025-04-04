<script setup lang="ts">
const skills = {
  "Product Strategy": [
      "Product Lifecycle",
      "Roadmapping",
      "PRDs",
      "Go-to-Market",
      "Product Discovery",
      "OKRs"
    ],
    "User Research & UX": [
      "User Interviews",
      "Usability Testing",
      "JTBD",
      "Personas",
      "Journey Mapping",
      "Wireframing"
    ],
    "Data & Analysis": [
      "SQL",
      "Funnel Analysis",
      "A/B Testing",
      "Google Analytics",
      "Mixpanel",
      "Tableau",
      "Excel"
    ],
    "Agile & Delivery": [
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Sprint Planning",
      "Backlog Grooming",
      "Release Management"
    ],
    "Tech Fluency": [
      "APIs",
      "REST",
      "JSON",
      "SQL",
      "PostgreSQL",
      "PostGIS",
      "Git",
    ],
    "Collaboration Tools": [
      "Slack",
      "Notion",
      "Miro",
      "Figma",
      "Trello",
      "Asana"
    ],
    "Stakeholder Management": [
      "Cross-functional Alignment",
      "Communication Plans",
      "Workshops",
      "Change Management"
    ],
    "Domain Expertise": [  
    "B2B2C",
    "B2B",
    "B2C",
    "HealthTech",
      "GIS",
      "Humanitarian Tech",
      "Digital Infrastructure",
      "Citizen-Centric Tech",
      "Public Sector",
      "Non-Profit",
      "Startups",
    ]
  }
</script>
<template>
  <section id="skills" class="my-8 md:my-12 xl:my-16 print:break-before-page">
    <SectionTitle title="Skills" icon="bug-ant" />
    <UCard
           :ui="{ divide: 'divide-none', body: { padding: 'sm:p-4' }, background: 'bg-gray-100 dark:bg-gray-900', ring: 'ring-0', shadow: 'shadow-none', }">
    <div class="grid grid-cols-12">
      <template v-for="items, tech in skills">
        <div class="col-span-2 font-semibold text-sm print:text-xs"> {{ tech }}: </div>
        <div class="col-span-10">
          <template v-for="item in items">
            <UBadge color="white" class="whitespace-nowrap m-1">{{ item }}</UBadge>
          </template>
        </div>
      </template>
    </div>
    </UCard>
  </section>
</template>