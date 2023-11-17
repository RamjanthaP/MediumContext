import QuickContact from "./QuickContact";

export default {
  title: 'Components/QuickContact',
  component: QuickContact,
  tags: ['autodocs']
}

export const Primary = {
  args: {
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