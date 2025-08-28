<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Lerne unser Team kennen</h1>
    </template>
    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">
        Wir sind ein engagiertes Team von Experten, die gemeinsam daran arbeiten, innovative
        Lösungen für unsere Kunden zu entwickeln.
      </h2>
    </template>
  </header-container>
  <section class="mx-auto max-w-7xl px-6 py-16">
    <h3 class="mb-12 text-center text-3xl font-bold">Unser Team</h3>

    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <!-- Mitarbeiter 1 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Max Mustermann</h4>
        <p class="font-medium text-blue-600">Geschäftsführer</p>
      </div>

      <!-- Mitarbeiter 2 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Lisa Beispiel</h4>
        <p class="font-medium text-blue-600">Projektmanagerin</p>
      </div>

      <!-- Mitarbeiter 3 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Tom Beispiel</h4>
        <p class="font-medium text-blue-600">Lead Entwickler</p>
      </div>

      <!-- Mitarbeiter 4 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Anna Schmidt</h4>
        <p class="font-medium text-blue-600">HR Managerin</p>
      </div>

      <!-- Mitarbeiter 5 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Markus Keller</h4>
        <p class="font-medium text-blue-600">Marketing Spezialist</p>
      </div>

      <!-- Mitarbeiter 6 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Julia Weber</h4>
        <p class="font-medium text-blue-600">UI/UX Designerin</p>
      </div>

      <!-- Mitarbeiter 7 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">David Müller</h4>
        <p class="font-medium text-blue-600">Backend Entwickler</p>
      </div>

      <!-- Mitarbeiter 8 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Sarah Lehmann</h4>
        <p class="font-medium text-blue-600">Frontend Entwicklerin</p>
      </div>

      <!-- Mitarbeiter 9 -->
      <div class="transform rounded-2xl bg-white p-6 text-center shadow-md">
        <img
          src="https://testingbot.com/free-online-tools/random-avatar/150"
          alt="Team Mitglied"
          class="mx-auto mb-4 h-32 w-32 rounded-full"
        />
        <h4 class="text-xl font-semibold">Jonas Fischer</h4>
        <p class="font-medium text-blue-600">Data Analyst</p>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

export default {
  name: 'TeamsView',
  components: {
    HeaderContainer,
  },
}
</script>
