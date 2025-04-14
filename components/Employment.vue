<script setup lang="ts">
const columns = [
  { key: 'period', label: 'Period' },
  { key: 'designation', label: 'Designation' },
  { key: 'organization', label: 'Organization' },
  { key: 'sector', label: 'Sector' },
]
const employment = [
  {
    "period": "2022 - Present",
    "designation": "Senior Product Manager",
    "organization": "Rayn Group",
    "organizationLink": "https://www.rayn.group/",
    "sector": "Private"
  },
  {
    "period": "2016 - 2022",
    "designation": "Government Innovation Lead (Product)",
    "organization": "Code for Pakistan",
    "organizationLink": "https://codeforpakistan.org/",
    "sector": "Development"
  },
  {
    "period": "2015 - 2016",
    "designation": "Business Innovation Officer",
    "organization": "The Nerd Camp",
    "organizationLink": "https://thenerdcamp.com/",
    "sector": "Private"
  },
  {
    "period": "2014 - 2015",
    "designation": "Software Engineer",
    "organization": "Sweet Pixel Studios",
    "organizationLink": "https://sweetpixelstudios.com",
    "sector": "Private"
  }
]
</script>
<template>
  <section id="employment" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Employment" icon="building-office" />
    <UCard
      :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { padding: '' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
      <UTable :rows="employment" :columns="columns"
        :ui="{ td: { padding: 'py-2', size: 'text-sm print:text-xs', color: '' } }">
        <template #organization-data="{ row }">
          <a v-if="row.organizationLink" :href="row.organizationLink" class="text-blue-600 hover:text-blue-800 underline" target="_blank">
            {{ row.organization }}
          </a>
          <span v-else>{{ row.organization }}</span>
        </template>
      </UTable>
    </UCard>
  </section>
</template>