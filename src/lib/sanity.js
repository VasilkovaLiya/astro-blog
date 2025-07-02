import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'tx9cap6e',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01',
})
