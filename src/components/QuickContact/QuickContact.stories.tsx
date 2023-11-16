import QuickContact from "./QuickContact";

export default {
  title: 'Components/QuickContact',
  component: QuickContact,
  tags: ['autodics']
}

export const Primary = {
  args: {
    title: 'Tips & Råd',
    description: 'Jag går gärna igenom processen ihop med er och hjälper er att formulera era behov!',
    person: {
      name: '',
      role: '',
      url: '',
      alt: '',
      phone: '',
      email: ''
    }
  }
}