<template>
  <UContainer class="flex" :ui="{ constrained: 'min-w-full', base: '' }">
    <SiteTitle class="py-2" />
    <div class="flex-grow" />
    <div class="flex items-center gap-1">
      <a href="mailto:ebtihaj316@gmail.com">
        <UBadge color="white" label="ebtihaj316@gmail.com" />
      </a>
      <UBadge color="white" label="+92 (332) 994-1575" />
      <a href="https://www.linkedin.com/in/ebtihajkhan/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-700">
        <Icon name="mdi:linkedin" size="30" />
      </a>
      <a href="https://medium.com/@ebtihaj316/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-700">
        <Icon name="mdi:medium" size="30" />
      </a>
    </div>
  </UContainer>
</template>

