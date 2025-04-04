<script setup lang="ts">
const education = [
  {
    "period": "2014 - 2020",
    "degree": "Masters of Science",
    "major": "Computer Sciences",
    "university": "University of Engineering and Technology",
  },
  {
    "period": "2010 - 2014",
    "degree": "Bachelors of Science",
    "major": "Computer Science",
    "university": "University of Engineering and Technology",
  }
]
</script>
<template>
  <section id="education" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Education" icon="book-open" />
    <UCard
           :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { padding: '' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
      <UTable :rows="education" :ui="{ td: { padding: 'py-2', size: 'text-sm print:text-xs', color: '' } }" />
    </UCard>
  </section>
</template>