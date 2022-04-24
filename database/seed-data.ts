interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: ' Pendiente: Ala cacati deust nople',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En progreso: Deas novu date lafre',
      status: 'in-progres',
      createdAt: Date.now() - 123333,
    },
    {
      description: 'Finished: Nego tego tufo tiki',
      status: 'finished',
      createdAt: Date.now() - 1000000,
    },
  ],
}
